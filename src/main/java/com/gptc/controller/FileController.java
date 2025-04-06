package com.gptc.controller;

import com.gptc.entity.Member;
import com.gptc.entity.Pdf;
import com.gptc.entity.Study;
import com.gptc.service.FileService;
import com.gptc.service.MemberService;
import com.gptc.service.StudyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/file")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequiredArgsConstructor
public class FileController {

    private final MemberService memberService;
    private final StudyService studyService;
    private final FileService fileService;

    @PostMapping("/upload-pdf")
    public ResponseEntity<?> uploadPdf(
            @RequestParam("studyName") String studyName,
            @RequestParam("file") MultipartFile file
    ) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            if (authentication == null || !authentication.isAuthenticated() || authentication.getPrincipal().equals("anonymousUser")) {
                throw new RuntimeException("인증되지 않은 사용자입니다.");
            }

            String email = authentication.getName();
            Member member = memberService.findByEmail(email);

            Study study = studyService.createStudy(member, studyName);
            Pdf pdf = fileService.handlePdfUpload(study, file);

            return ResponseEntity.ok().body("PDF 업로드 및 저장 성공! pdfNo: " + pdf.getPdfNo());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("업로드 중 오류 발생: " + e.getMessage());
        }
    }
}