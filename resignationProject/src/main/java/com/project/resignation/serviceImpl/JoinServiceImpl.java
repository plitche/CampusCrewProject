package com.project.resignation.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.JoinDao;
import com.project.resignation.service.JoinService;
import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.joinStepVO.JoinStep01VO;
import com.project.resignation.vo.joinStepVO.JoinStep03VO;
import com.project.resignation.vo.joinStepVO.JoinStep04VO;
import com.project.resignation.vo.joinStepVO.JoinStep05VO;

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
	public int joinStep03UpdateInfo(JoinStep03VO joinStep03VO) {
		return joinDao.joinStep03UpdateInfo(joinStep03VO);
	}
	
	@Override
	public int joinStep04UpdateInfo(JoinStep04VO joinStep04VO) {
		return joinDao.joinStep04UpdateInfo(joinStep04VO);
	}

	@Override
	public int insertMyProfile(AttachmentVO attachmentVO) {
		return joinDao.insertMyProfile(attachmentVO);
	}
	
	@Override
	public int insertInterestTag(JoinStep05VO joinStep05VO) {
		return joinDao.insertInterestTag(joinStep05VO);
	}
	
	@Override
	public int updateIntroduce(JoinStep05VO joinStep05VO) {
		return joinDao.updateIntroduce(joinStep05VO);
	}
	
	
	
	
}
