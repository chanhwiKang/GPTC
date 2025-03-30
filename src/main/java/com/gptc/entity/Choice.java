package com.gptc.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "choice")
@Data //getter, setter, tostring, equals, hashcode 만들어줌.
@NoArgsConstructor //인자없는 생성자
@AllArgsConstructor //모든 필드를 매개변수로 갖는 생성자
public class Choice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "choiceNo", nullable = false)
    private Long choiceNo;

    @ManyToOne
    @JoinColumn(name = "questionNo", nullable = false)
    private Question question;

    @Column(name = "choiceText", nullable = false, length = 100)
    private String choiceText;

    @Column(name = "choiceIsAnswer", nullable = false)
    private Boolean choiceIsAnswer; // DB에 TinyInt로 해놨는데 JPA가 자동으로 변환해줍니다.

    @Column(name = "choiceIsSelected", nullable = false)
    private Boolean choiceIsSelected;

}