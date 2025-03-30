package com.gptc.service;

import com.gptc.dto.MemberDto;
import com.gptc.entity.Member;
import com.gptc.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;  // 비밀번호 암호화를 위한 BCryptPasswordEncoder

    // 회원가입 처리
    public void signUp(MemberDto memberDto) {
        // 이미 존재하는 이메일인지 확인
        if (memberRepository.findByMemberEmail(memberDto.getMemberEmail()).isPresent()) {
            throw new RuntimeException("이미 존재하는 이메일입니다.");
        }

        // 비밀번호 암호화
        String encodedPassword = passwordEncoder.encode(memberDto.getMemberPw());

        // Member 엔티티 생성 후 저장
        Member member = new Member();
        member.setMemberName(memberDto.getMemberName());
        member.setMemberEmail(memberDto.getMemberEmail());
        member.setMemberPw(encodedPassword);

        memberRepository.save(member);  // 회원 데이터 저장
    }

    // 로그인 인증 처리
    public boolean authenticate(MemberDto memberDto) {
        // 이메일로 회원 조회
        Member member = memberRepository.findByMemberEmail(memberDto.getMemberEmail())
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다"));

        // 비밀번호 확인
        return passwordEncoder.matches(memberDto.getMemberPw(), member.getMemberPw());  // 비밀번호 일치 여부 체크
    }
}