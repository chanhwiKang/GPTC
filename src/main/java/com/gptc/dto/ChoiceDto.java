package com.gptc.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChoiceDto {
    private Long choiceNo;
    private Long questionNo;
    private String choiceText;
    private boolean choiceIsAnswer;
    private boolean choiceIsSelected;
}