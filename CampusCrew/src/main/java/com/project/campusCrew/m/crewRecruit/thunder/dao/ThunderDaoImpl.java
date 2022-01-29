package com.project.campusCrew.m.crewRecruit.thunder.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.campusCrew.m.crewRecruit.thunder.vo.ThunderStep01VO;

@Service
public class ThunderDaoImpl implements ThunderDao {

	@Autowired
	private SqlSession sqlsession;
	
	@Override
	public int insertCrewType(ThunderStep01VO thunderStep01VO) {
		return sqlsession.insert("thunder.insertCrewType", thunderStep01VO);
	}
	
	
}
