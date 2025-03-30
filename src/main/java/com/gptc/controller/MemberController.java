package com.gptc.controller;

import com.gptc.dto.MemberDto;
import com.gptc.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/member")
public class MemberController {

    @Autowired
    private MemberService memberService;

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody MemberDto memberDto) {
        try {
            memberService.signUp(memberDto);  // 서비스 계층에서 회원가입 처리
            return ResponseEntity.ok("회원가입 성공");
        } catch (Exception e) {
            return ResponseEntity.status(400).body("회원가입 실패: " + e.getMessage());
        }
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody MemberDto memberDto) {
        boolean isAuthenticated = memberService.authenticate(memberDto);  // 로그인 인증 처리
        if (isAuthenticated) {
            return ResponseEntity.ok("로그인 성공");
        }
        return ResponseEntity.status(400).body("잘못된 이메일 또는 비밀번호");
    }
}