package com.gptc.controller;

import com.gptc.dto.MemberDto;
import com.gptc.entity.Member;
import com.gptc.service.MemberService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody MemberDto memberDto) {
        memberService.signUp(memberDto);
        return ResponseEntity.ok("회원가입 성공. 이메일 인증을 진행하세요.");
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody MemberDto memberDto) {
        boolean isAuthenticated = memberService.authenticate(memberDto);
        if (isAuthenticated) {
            return ResponseEntity.ok("로그인 성공");
        }
        return ResponseEntity.status(400).body("잘못된 이메일 또는 비밀번호");
    }

    // 이메일 인증 여부 확인
    @GetMapping("/email-verified/{email}")
    public ResponseEntity<Boolean> isEmailVerified(@PathVariable String email) {
        boolean isVerified = memberService.isEmailVerified(email);
        return ResponseEntity.ok(isVerified);
    }
}