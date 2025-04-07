package com.gptc.controller;

import com.gptc.dto.StudyDto;
import com.gptc.entity.Member;
import com.gptc.service.MemberService;
import com.gptc.service.StudyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequiredArgsConstructor
@RequestMapping("/api/study")
public class StudyController {

    private final MemberService memberService;
    private final StudyService studyService;

    //로그인한 사용자의 Study 목록 조회
    @GetMapping("/studies")
    public ResponseEntity<List<StudyDto>> getStudies() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated() || authentication.getPrincipal().equals("anonymousUser")) {
            return ResponseEntity.status(401).build();
        }

        String email = authentication.getName();
        Member member = memberService.findByEmail(email);

        List<StudyDto> studyList = studyService.getStudiesByMember(member);
        return ResponseEntity.ok(studyList);
    }
}