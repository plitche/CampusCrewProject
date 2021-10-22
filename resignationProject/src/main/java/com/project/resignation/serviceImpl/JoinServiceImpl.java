package com.project.resignation.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.JoinDao;
import com.project.resignation.service.JoinService;
import com.project.resignation.vo.joinStepVO.JoinStep01VO;
import com.project.resignation.vo.joinStepVO.JoinStep02VO;

@Service
public class JoinServiceImpl implements JoinService{
	
	@Autowired
	JoinDao joinDao;

	@Override
	public JoinStep01VO checkMember(JoinStep01VO joinStep01VO) {
		return joinDao.checkMember(joinStep01VO);
	}
	
	@Override
	public int insertMemberInfo(JoinStep01VO joinStep01VO) {
		return joinDao.insertMemberInfo(joinStep01VO);
	}
	
	@Override
	public int joinStep02UpdateInfo(JoinStep02VO joinStep02VO) {
		return joinDao.joinStep02UpdateInfo(joinStep02VO);
	}
	
	
	
}
