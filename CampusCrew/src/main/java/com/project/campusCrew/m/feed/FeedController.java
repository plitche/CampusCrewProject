package com.project.campusCrew.m.feed;

import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 
 * @author 나정호 
 * @describe 모바일 피드 컨트롤러
 *
 */

@Controller
@RequestMapping(value="/m")
public class FeedController {

	private static Logger log = LoggerFactory.getLogger(FeedController.class);
	
	@RequestMapping(value="/feed", method = RequestMethod.GET) 
	public String feedMain(Locale locale, Model model) throws Exception {
		
		String path = "/campusCrew";
		String developer = "나정호/권용수/이해림";
		
		model.addAttribute("path", path );
		model.addAttribute("developer", developer );
		
		log.info("피드 화면");
		
		return "m/feed/feed";
	}
	
	
	
}
