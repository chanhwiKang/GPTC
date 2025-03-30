package com.gptc.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamDto {
    private Long examNo;
    private Long studyNo;
    private String examTitle;
    private int examScore;
}