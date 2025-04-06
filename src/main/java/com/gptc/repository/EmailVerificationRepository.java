package com.gptc.repository;

import com.gptc.entity.EmailVerification;
import com.gptc.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmailVerificationRepository extends JpaRepository<EmailVerification, Long> {
    Optional<EmailVerification> findByMember_MemberEmailAndVerificationType(String memberEmail, EmailVerification.VerificationType verificationType);
    void deleteByMemberAndVerificationType(Member member, EmailVerification.VerificationType verificationType);
}