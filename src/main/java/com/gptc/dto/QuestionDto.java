package com.gptc.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDto {
    private Long questionNo;
    private Long examNo;
    private String questionText;
    private String questionExplanation;
}