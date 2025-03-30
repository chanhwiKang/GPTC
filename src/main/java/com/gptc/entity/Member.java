package com.gptc.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "member")
@Data //getter, setter, tostring, equals, hashcode 만들어줌.
@NoArgsConstructor //인자없는 생성자
@AllArgsConstructor //모든 필드를 매개변수로 갖는 생성자
public class Member {

    @Id //PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) //기본키 자동 생성
    @Column(name = "memberNo", nullable = false)
    private Long memberNo;

    @Column(name = "memberName", nullable = false, length = 30)
    private String memberName;

    @Column(name = "memberEmail", nullable = false, length = 100, unique = true)
    private String memberEmail;

    @Column(name = "memberPw", nullable = false, length = 100)
    private String memberPw;

    @Column(name = "memberDate")
    private LocalDate memberDate;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Study> studies;

    @PrePersist
    public void prePersist() {
        if (this.memberDate == null) {
            this.memberDate = LocalDate.now();  // 현재 날짜를 기본값으로 설정 (CUR_DATE와 같은 역할 구현했음)
        }
    }
}



