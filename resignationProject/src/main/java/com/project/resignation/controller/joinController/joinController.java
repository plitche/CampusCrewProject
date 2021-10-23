package com.project.resignation.controller.joinController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.project.resignation.service.JoinService;
import com.project.resignation.vo.joinStepVO.JoinStep01VO;
import com.project.resignation.vo.joinStepVO.JoinStep02VO;

@Controller
@RequestMapping(value="/join")
public class joinController {

	@Autowired
	JoinService joinService;
	
	@RequestMapping(value="/step01",
							   method=RequestMethod.POST,
							   produces="application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> joinStep01(@RequestBody JoinStep01VO joinStep01VO, Model model) throws Exception {
		
		Map<String, Object> joinStep1ResultData = new HashMap<String, Object>();
		
		// 가입하려는 이메일이 존재하는지 체크
		JoinStep01VO checkResult = joinService.checkMember(joinStep01VO);
		
		// 아이디가 존재하면 
		if (checkResult != null) {
			joinStep1ResultData.put("success", "N");
		// 아이디가 존재하지 않으면 회원가입시켜준다.
		} else {
			int insertResult = joinService.insertMemberInfo(joinStep01VO);
			// 회원가입이 성공하면
			if (insertResult > 0) {
				joinStep1ResultData.put("success", "Y");
			} else {
				joinStep1ResultData.put("success", "F");
			}
		}
		
		return joinStep1ResultData;
		
	}
	
	/* 
	 * 
	 * step02 같은 경우는 데이터를 주고 받는 단계가 아니라
	 * 필요정보수집 절차 설명 단계이기에 데이터를 주고 받을 일이 없다.
	 * step02 없다고 이상하다고 생각하지 말 것.
	 * 
	 */
	
	@RequestMapping(value="/step03",
							  method=RequestMethod.POST,
							  produces="application/json; charset=UTF-8")
	@ResponseBody
	public Map<String, Object> joinStep02(@RequestBody JoinStep02VO joinStep02VO, Model model) throws Exception {
		
		Map<String, Object> joinStep2ResultData = new HashMap<String, Object>();
		
		
		
		// step02에서 추가적인 정보를 업데이트한다.
		int updateResult = joinService.joinStep02UpdateInfo(joinStep02VO);
		
		// step02의 정보업데이트가 성공하면
		if (updateResult > 0) {
			joinStep2ResultData.put("success", "Y");
		// step02의 정보업데이트가 실패하면
		} else {
			joinStep2ResultData.put("success", "N");
		}
		
		return joinStep2ResultData;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
