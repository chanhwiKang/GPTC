package com.gptc.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "pdf")
@Data //getter, setter, tostring, equals, hashcode 만들어줌.
@NoArgsConstructor //인자없는 생성자
@AllArgsConstructor //모든 필드를 매개변수로 갖는 생성자
public class Pdf {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pdfNo", nullable = false)
    private Long pdfNo;

    @ManyToOne
    @JoinColumn(name = "studyNo", nullable = false)
    private Study study;

    @Column(name = "pdfName", nullable = false, length = 20)
    private String pdfName;

    @Lob
    @Column(name = "pdfText", nullable = false)
    private String pdfText;

}