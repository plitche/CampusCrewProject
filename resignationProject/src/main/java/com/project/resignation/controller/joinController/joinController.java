package com.project.resignation.controller.joinController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.project.resignation.vo.joinStep1VO.JoinStep1VO;

@Controller
@RequestMapping(value="/join")
public class joinController {

	public String joinStep1(Model model, JoinStep1VO joinStep1VO) {
		
		
		
		//model.addAttribute(attributeName, attributeValue);
		return "";
	}
	
}
