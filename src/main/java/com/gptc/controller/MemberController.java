package com.gptc.controller;

import com.gptc.dto.MemberDto;
import com.gptc.entity.Member;
import com.gptc.service.MemberService;
import com.gptc.util.JwtTokenProvider;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    public MemberController(MemberService memberService, JwtTokenProvider jwtTokenProvider) {
        this.memberService = memberService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @GetMapping("/isLoggedIn")
    public ResponseEntity<String> getMyInfo(Authentication authentication) {
        if (authentication == null || !authentication.isAuthenticated()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인 되어있지 않음.");
        }

        String email = authentication.getName();  // 토큰에서 추출된 사용자 email
        return ResponseEntity.ok(email);
    }

    // 회원가입
    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody MemberDto memberDto) {
        memberService.signUp(memberDto);
        return ResponseEntity.ok("회원가입 성공. 이메일 인증을 진행하세요.");
    }

    // 로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody MemberDto memberDto, HttpServletResponse response) {
        boolean isAuthenticated = memberService.authenticate(memberDto);

        if (!isAuthenticated) {
            return ResponseEntity.status(400).body("로그인 정보가 잘못되었습니다.");
        }

        Member member = memberService.findByEmail(memberDto.getMemberEmail());

        String token = jwtTokenProvider.createToken(member.getMemberEmail());

        Cookie cookie = new Cookie("jwtToken", token);
        cookie.setHttpOnly(true);
        cookie.setSecure(false); //https 사용 안함
        cookie.setPath("/");
        cookie.setMaxAge(24 * 60 * 60); // 쿠키 유효기간 1일

        response.addCookie(cookie);

        Map<String, Object> userInfo = Map.of(
                "email", member.getMemberEmail(),
                "name", member.getMemberName()
        );

        return ResponseEntity.ok(userInfo);
    }

    // 이메일 인증 여부 확인
    @GetMapping("/email-verified/{email}")
    public ResponseEntity<Boolean> isEmailVerified(@PathVariable String email) {
        boolean isVerified = memberService.isEmailVerified(email);
        return ResponseEntity.ok(isVerified);
    }
}