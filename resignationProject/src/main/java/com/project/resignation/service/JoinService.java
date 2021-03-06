package com.project.resignation.service;

import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.joinStepVO.JoinStep01VO;
import com.project.resignation.vo.joinStepVO.JoinStep03VO;
import com.project.resignation.vo.joinStepVO.JoinStep04VO;
import com.project.resignation.vo.joinStepVO.JoinStep05VO;

public interface JoinService {
	
	// 회원인지 아닌지 확인
	public JoinStep01VO checkMember(JoinStep01VO joinStep01VO);
	
	// 회원가입 Step01 삽입
	public int insertMemberInfo(JoinStep01VO joinStep01VO);
	
	// 회원가입 Step03 업데이트
	public int joinStep03UpdateInfo(JoinStep03VO joinStep03VO);
	
	// 회원가입 Step04 업데이트
	public int joinStep04UpdateInfo(JoinStep04VO joinStep04VO);
	
	// 회원가입 Step04 프로필사진 삽입
	public int insertMyProfile(AttachmentVO attachmentVO);
	
	// 회원가입 Step05 업데이트01 - 흥미분야,관심태그
	public int insertInterestTag(JoinStep05VO joinStep05VO);
	
	// 회원가입 Step05 업데이트02 - 소개
	public int updateIntroduce(JoinStep05VO joinStep05VO);
}
