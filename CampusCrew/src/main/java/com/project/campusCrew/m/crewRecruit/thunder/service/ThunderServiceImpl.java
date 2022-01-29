package com.project.campusCrew.m.crewRecruit.thunder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.campusCrew.m.crewRecruit.thunder.dao.ThunderDao;
import com.project.campusCrew.m.crewRecruit.thunder.vo.ThunderStep01VO;

@Service
public class ThunderServiceImpl implements ThunderService {

	@Autowired
	ThunderDao thunderDao;
	
	@Override
	public int insertCrewType(ThunderStep01VO thunderStep01VO) {
		return thunderDao.insertCrewType(thunderStep01VO);
	}
	
	
	
}
