package com.project.resignation.dao;

import com.project.resignation.vo.joinStepVO.JoinStep01VO;
import com.project.resignation.vo.joinStepVO.JoinStep03VO;

public interface JoinDao {
	
	public JoinStep01VO checkMember(JoinStep01VO joinStep01VO);
	
	public int insertMemberInfo(JoinStep01VO joinStep01VO);

	public int joinStep03UpdateInfo(JoinStep03VO joinStep02VO);
	
}
