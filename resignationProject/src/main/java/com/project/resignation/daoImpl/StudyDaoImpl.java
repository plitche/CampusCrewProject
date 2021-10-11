package com.project.resignation.daoImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.resignation.dao.StudyDao;

@Service
public class StudyDaoImpl implements StudyDao {
	
	@Autowired
	SqlSession sqlsession;
	
	@Override
	public List<Object> goStudyMain() {
		return sqlsession.selectList("Study.getStudyInfoList");
	}
}
