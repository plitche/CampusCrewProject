package com.project.resignation.dao;

import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.joinStepVO.JoinStep01VO;
import com.project.resignation.vo.joinStepVO.JoinStep03VO;
import com.project.resignation.vo.joinStepVO.JoinStep04VO;
import com.project.resignation.vo.joinStepVO.JoinStep05VO;

public interface JoinDao {
	
	public JoinStep01VO checkMember(JoinStep01VO joinStep01VO);
	
	public int insertMemberInfo(JoinStep01VO joinStep01VO);

	public int joinStep03UpdateInfo(JoinStep03VO joinStep02VO);
	
	public int joinStep04UpdateInfo(JoinStep04VO joinStep04VO);
	
	public int insertMyProfile(AttachmentVO attachmentVO);
	
	public int insertInterestTag(JoinStep05VO joinStep05VO);
	
	public int updateIntroduce(JoinStep05VO joinStep05VO);
	
}
