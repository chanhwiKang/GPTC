package com.gptc.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "study")
@Data //getter, setter, tostring, equals, hashcode 만들어줌.
@NoArgsConstructor //인자없는 생성자
@AllArgsConstructor //모든 필드를 매개변수로 갖는 생성자
public class Study {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "studyNo", nullable = false)
    private Long studyNo;

    @ManyToOne
    @JoinColumn(name = "memberNo", nullable = false)
    private Member member;

    @Column(name = "studyName", nullable = false, length = 20)
    private String studyName;

    @Column(name = "studyDate")
    private LocalDate studyDate;

    @OneToMany(mappedBy = "study", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Pdf> pdfs;

    @OneToMany(mappedBy = "study", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Exam> exams;

    @PrePersist
    public void prePersist() {
        if (this.studyDate == null) {
            this.studyDate = LocalDate.now();  // 현재 날짜를 기본값으로 설정
        }
    }
}