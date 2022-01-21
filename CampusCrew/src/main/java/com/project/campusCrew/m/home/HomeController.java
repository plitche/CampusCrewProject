package com.project.campusCrew.m.home;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.campusCrew.m.home.service.HomeService;

/**
 * 
 * @author 나정호 
 * @describe 모바일 홈 컨트롤러
 *
 */

@Controller
@RequestMapping(value="/m")
public class HomeController {

	private static Logger log = LoggerFactory.getLogger(HomeController.class);

	@Autowired
	HomeService homeService;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String homeMain(Locale locale, Model model) throws Exception {
		
		String path = "/campusCrew";
		String developer = "나정호/권용수/이해림";
		
		model.addAttribute("path", path );
		model.addAttribute("developer", developer );
		
		log.info("홈 화면");
		
		return "m/home/home";
	}
	
	/**
	 * @author 권용수 
	 * @describe 모바일 홈 필터 텝 가져오기 ajax
	 */
	@RequestMapping(value="getFilterTabList", method=RequestMethod.GET, produces="application/json; charset=utf-8")
	public @ResponseBody Map<String, Object> getFilterTabList() {
		List<Map<String, Object>> filterTabList = homeService.getFIlterTabList(); 
		
		Map<String, Object> returnMap = new HashMap<>();
		if (filterTabList.size() != 0 || filterTabList != null) {
			returnMap.put("filterTabList", filterTabList);
		}
		return returnMap;
	}
	
	/**
	 * @author 권용수 
	 * @describe 모바일 홈 리스트 가져오기 ajax
	 */
	@RequestMapping(value="getHomeCrewList", method=RequestMethod.GET, produces="application/json; charset=utf-8")
	public @ResponseBody Map<String, Object> getHomeCrewList(@RequestParam(value="filterName") String filterName) {
		List<Map<String, Object>> homeCrewList = homeService.getHomeCrewList(filterName);
		Map<String, Object> returnMap = new HashMap<>();
		returnMap.put("homeCrewList", homeCrewList);
		
		return returnMap;
	}
	
}
