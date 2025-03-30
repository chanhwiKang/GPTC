package com.gptc.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "question")
@Data //getter, setter, tostring, equals, hashcode 만들어줌.
@NoArgsConstructor //인자없는 생성자
@AllArgsConstructor //모든 필드를 매개변수로 갖는 생성자
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "questionNo", nullable = false)
    private Long questionNo;

    @ManyToOne
    @JoinColumn(name = "examNo", nullable = false)
    private Exam exam;

    @Column(name = "questionText", nullable = false, length = 1000)
    private String questionText;

    @Column(name = "questionExplanation", length = 1000)
    private String questionExplanation;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Choice> choices;
}