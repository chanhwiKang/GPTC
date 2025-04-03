package com.gptc.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Random;

@Entity
@Table(name = "emailverification")
@Data //getter, setter, tostring, equals, hashcode 만들어줌.
@NoArgsConstructor
@AllArgsConstructor
public class EmailVerification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "verificationId")
    private Long verificationId;

    @ManyToOne
    @JoinColumn(name = "memberNo", nullable = false)
    private Member member;  // 회원과 연결

    @Enumerated(EnumType.STRING)
    @Column(name = "verificationType", nullable = false, length = 20)
    private VerificationType verificationType ;

    @Column(name = "verificationCode", nullable = false, length = 6) // 6자리 인증번호
    private String verificationCode;

    @Column(name = "expirationTime", nullable = false)
    private LocalDateTime expirationTime;

    @Column(name = "isVerified", nullable = false)
    private Boolean isVerified = false;  // 기본값: 인증되지 않음

    public enum VerificationType {  // "SIGNUP = 회원가입", "PASSWORD_RESET = 비밀번호 변경"
        SIGNUP, PASSWORD_RESET
    }

    public void setVerified(boolean verified) {
        this.isVerified = verified;
    }

    @PrePersist
    public void prePersist() {
        if (this.verificationCode == null) {
            this.verificationCode = generateVerificationCode();  // 자동 인증번호 생성
        }
        if (this.expirationTime == null) {
            this.expirationTime = LocalDateTime.now().plusHours(1);  //만료시간: 1시간 후
        }
    }

    private String generateVerificationCode() {
        return String.format("%06d", new Random().nextInt(1000000));  // 000000~999999 랜덤 숫자 생성
    }
}


