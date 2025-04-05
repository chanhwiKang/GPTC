package com.gptc.controller;

import com.gptc.entity.EmailVerification;
import com.gptc.service.EmailVerificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api/email-verification")
public class EmailVerificationController {

    private final EmailVerificationService emailVerificationService;

    public EmailVerificationController(EmailVerificationService emailVerificationService) {
        this.emailVerificationService = emailVerificationService;
    }

    // 이메일 인증 요청 (회원가입 or 비밀번호 찾기)
    @PostMapping("/request")
    public ResponseEntity<String> requestVerification(@RequestParam String email, @RequestParam EmailVerification.VerificationType type) {
        emailVerificationService.sendVerificationCode(email, type);
        return ResponseEntity.ok("인증번호가 이메일로 전송되었습니다.");
    }

    // 이메일 인증 확인
    @PostMapping("/verify")
    public ResponseEntity<String> verifyCode(@RequestParam String email, @RequestParam EmailVerification.VerificationType type, @RequestParam String code) {
        boolean isVerified = emailVerificationService.verifyCode(email, type, code);
        if (isVerified) {
            return ResponseEntity.ok("이메일 인증이 완료되었습니다!");
        } else {
            return ResponseEntity.status(400).body("인증번호가 일치하지 않습니다.");
        }
    }
}