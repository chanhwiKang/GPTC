package com.gptc.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "exam")
@Data //getter, setter, tostring, equals, hashcode 만들어줌.
@NoArgsConstructor //인자없는 생성자
@AllArgsConstructor //모든 필드를 매개변수로 갖는 생성자
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "examNo", nullable = false)
    private Long examNo;

    @ManyToOne
    @JoinColumn(name = "studyNo", nullable = false)
    private Study study;

    @Column(name = "examTitle", nullable = false, length = 20)
    private String examTitle;

    @Column(name = "examDate")
    private LocalDate examDate; // Date로 변경할 수 있음

    @Column(name = "examScore")
    private Integer examScore;

    @OneToMany(mappedBy = "exam", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions;


    @PrePersist
    public void prePersist() {
        if (this.examDate == null) {
            this.examDate = LocalDate.now();  // 현재 날짜를 기본값으로 설정
        }
    }
}