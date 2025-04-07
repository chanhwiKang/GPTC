package com.gptc.repository;

import com.gptc.entity.Member;
import com.gptc.entity.Study;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudyRepository extends JpaRepository<Study, Long> {
    List<Study> findAllByMember(Member member); // 특정 사용자의 study 목록 조회
    List<Study> findByMember(Member member);
}