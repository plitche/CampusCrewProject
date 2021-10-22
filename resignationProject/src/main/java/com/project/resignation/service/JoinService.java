package com.project.resignation.service;

import com.project.resignation.vo.joinStepVO.JoinStep01VO;
import com.project.resignation.vo.joinStepVO.JoinStep02VO;

public interface JoinService {
	
	// 회원인지 아닌지 확인
	public JoinStep01VO checkMember(JoinStep01VO joinStep01VO);
	
	// 회원가입 Step01 삽입
	public int insertMemberInfo(JoinStep01VO joinStep01VO);
	
	// 회원가입 Step02 업데이트
	public int joinStep02UpdateInfo(JoinStep02VO joinStep02VO);
	
}
