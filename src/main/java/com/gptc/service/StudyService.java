package com.gptc.service;

import com.gptc.dto.StudyDto;
import com.gptc.entity.Member;
import com.gptc.entity.Study;
import com.gptc.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudyService {

    private final StudyRepository studyRepository;

    public Study createStudy(Member member, String studyName) {
        Study study = new Study();
        study.setMember(member);
        study.setStudyName(studyName);
        return studyRepository.save(study);
    }

    public List<StudyDto> getStudiesByMember(Member member) {
        List<Study> studies = studyRepository.findByMember(member);

        return studies.stream()
                .map(study -> new StudyDto(
                        study.getStudyNo(),
                        study.getMember().getMemberNo(),
                        study.getStudyName()
                ))
                .toList();
    }

}