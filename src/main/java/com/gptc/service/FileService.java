package com.gptc.service;

import com.gptc.entity.Pdf;
import com.gptc.entity.Study;
import com.gptc.repository.PdfRepository;
import lombok.RequiredArgsConstructor;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;

@Service
@RequiredArgsConstructor
public class FileService {

    private final PdfRepository pdfRepository;

    public Pdf handlePdfUpload(Study study, MultipartFile file) throws Exception {
        String extractedText = extractTextFromPdf(file);

        Pdf pdf = new Pdf();
        pdf.setStudy(study);
        pdf.setPdfName(file.getOriginalFilename());
        pdf.setPdfText(extractedText);

        return pdfRepository.save(pdf);
    }

    private String extractTextFromPdf(MultipartFile file) throws Exception {
        try (InputStream inputStream = file.getInputStream();
             PDDocument document = PDDocument.load(inputStream)) {
            PDFTextStripper stripper = new PDFTextStripper();
            return stripper.getText(document);
        }
    }
}