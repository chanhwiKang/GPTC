package com.gptc.service;

import com.gptc.entity.EmailVerification;
import com.gptc.entity.Member;
import com.gptc.repository.EmailVerificationRepository;
import com.gptc.repository.MemberRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class EmailVerificationService {

    @Autowired
    private EmailVerificationRepository emailVerificationRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private EmailService emailService;

    @Transactional
    public void sendVerificationCode(String email, EmailVerification.VerificationType type) {
        Member member = memberRepository.findByMemberEmail(email)
                .orElseThrow(() -> new RuntimeException("해당 이메일의 사용자가 없습니다."));

        // 기존 인증번호 삭제 후 새로 생성
        emailVerificationRepository.deleteByMemberAndVerificationType(member, type);

        EmailVerification verification = new EmailVerification();
        verification.setMember(member);
        verification.setVerificationType(type);
        emailVerificationRepository.save(verification);

        //이메일로 인증번호 전송
        String subject = "이메일 인증번호";
        String content = "인증번호: " + verification.getVerificationCode() + "\n"
                + "해당 인증번호를 입력하여 인증을 완료하세요. (60분 내 유효)";
        emailService.sendEmail(member.getMemberEmail(), subject, content);
    }

    @Transactional
    public boolean verifyCode(String email, EmailVerification.VerificationType type, String inputCode) {
        Optional<EmailVerification> optionalVerification = emailVerificationRepository.findByMember_MemberEmailAndVerificationType(email, type);

        if (optionalVerification.isEmpty()) {
            throw new RuntimeException("인증 요청이 존재하지 않습니다.");
        }

        EmailVerification verification = optionalVerification.get();

        //인증시간 만료 체크
        if (verification.getExpirationTime().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("인증번호가 만료되었습니다.");
        }

        //코드 일치 확인
        if (!verification.getVerificationCode().equals(inputCode)) {
            return false;
        }

        // 인증 완료 처리
        verification.setVerified(true);
        emailVerificationRepository.save(verification);

        //이메일 인증 상태 변경
        Member member = verification.getMember();
        member.setMemberEmailVerified(true);
        memberRepository.save(member);

        return true;
    }
}