package com.gptc.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PdfDto {
    private Long pdfNo;
    private Long studyNo;
    private String pdfName;
    private String pdfText;
}