package com.gptc.service;

import com.gptc.dto.MemberDto;
import com.gptc.entity.Member;
import com.gptc.repository.MemberRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository, BCryptPasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // 회원가입 처리
    public void signUp(MemberDto memberDto) {
        // 이메일 중복 체크
        if (memberRepository.findByMemberEmail(memberDto.getMemberEmail()).isPresent()) {
            throw new RuntimeException("이미 존재하는 이메일입니다.");
        }

        // 비밀번호 암호화 후 저장
        Member member = new Member();
        member.setMemberName(memberDto.getMemberName());
        member.setMemberEmail(memberDto.getMemberEmail());
        member.setMemberPw(passwordEncoder.encode(memberDto.getMemberPw()));
        memberRepository.save(member);
    }

    // 로그인 처리
    public boolean authenticate(MemberDto memberDto) {
        Optional<Member> optionalMember = memberRepository.findByMemberEmail(memberDto.getMemberEmail());
        if (optionalMember.isEmpty()) {
            return false;
        }
        Member member = optionalMember.get();
        return passwordEncoder.matches(memberDto.getMemberPw(), member.getMemberPw());
    }

    // 이메일 인증 여부 확인
    public boolean isEmailVerified(String email) {
        Optional<Member> optionalMember = memberRepository.findByMemberEmail(email);
        return optionalMember.map(Member::getMemberEmailVerified).orElse(false);
    }
}