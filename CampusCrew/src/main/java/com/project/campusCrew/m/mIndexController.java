package com.project.campusCrew.m;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class mIndexController {

	private static final Logger logger = LoggerFactory.getLogger(mIndexController.class);
	
	@RequestMapping(value = "/m", method = RequestMethod.GET)
	public String home(Locale locale, Model model) throws Exception {
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		System.out.println("잘하자");
		return "m/index";
	}
	
	
}
