package com.project.campusCrew.m.crewRecruit.thunder.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.campusCrew.m.crewRecruit.thunder.service.ThunderService;
import com.project.campusCrew.m.crewRecruit.thunder.vo.ThunderStep01VO;

@Controller
@RequestMapping(value="/thunder")
public class ThunderController {

	@Autowired
	private ThunderService thunderService;
	
	@RequestMapping(value="/step01"
							   ,method=RequestMethod.POST
							   ,produces="application/json; charset=UTF-8"
							  )
	@ResponseBody
	public Map<String, Object> thunderStep1(@RequestBody ThunderStep01VO thunderStep01VO, Model model) {
		
		Map<String, Object> thunderStep01Result = new HashMap<String, Object>();
		
		System.out.println(thunderStep01VO.getCrewType());
		
		int insertResult = thunderService.insertCrewType(thunderStep01VO);
		
		// 삽입 성공
		if (insertResult > 0) {
			thunderStep01Result.put("results", "Y");
		// 삽입 실패
		} else {
			thunderStep01Result.put("results", "F");
		}
		
		return thunderStep01Result;
	}
	
}
