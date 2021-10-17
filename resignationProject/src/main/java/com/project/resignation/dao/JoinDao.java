package com.project.resignation.dao;

import com.project.resignation.vo.joinStepVO.JoinStep01VO;

public interface JoinDao {
	
	public JoinStep01VO checkMember(JoinStep01VO joinStep01VO);
	
	public int insertMemberInfo(JoinStep01VO joinStep01VO);

}
