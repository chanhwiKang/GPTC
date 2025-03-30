package com.gptc.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudyDto {
    private Long studyNo;
    private Long memberNo;
    private String studyName;
}