package com.project.resignation.commonUtil;

import java.util.HashMap;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.project.resignation.vo.loginStepVO.LoginStep01VO;

public class JsonParser {
	JSONParser jsonParser = new JSONParser();

	public LoginStep01VO changeJson(String string) throws Exception {

		HashMap<String, Object> map = new HashMap<>();
		JSONParser jsonParser = new JSONParser();
		LoginStep01VO vo = new LoginStep01VO();

		JSONObject jsonObject = (JSONObject) jsonParser.parse(string);

		jsonObject = (JSONObject) jsonObject.get("response");

		map.put("userEmail", jsonObject.get("email"));
		map.put("userId", jsonObject.get("id"));
		map.put("userNickname", jsonObject.get("nickname"));
		map.put("userProfileImage", jsonObject.get("profile_image"));
		map.put("userAge", jsonObject.get("age"));
		map.put("userMobile", jsonObject.get("mobile"));
		map.put("userMobileE164", jsonObject.get("mobile_e164"));
		map.put("userName", jsonObject.get("name"));
		map.put("userBirthday", jsonObject.get("birthday"));
		map.put("userBirthyear", jsonObject.get("birthyear"));

		vo.setEmail(map.get("userEmail").toString());							// 받는 이메일은 멤버 아이디에 넣기
		vo.setVcMemberNickname(map.get("userNickname").toString()); 			// 받는 닉네임은 닉네임에 넣기
		vo.setVcFilename(map.get("userProfileImage").toString()); 					// 받는 프로필명은 파일명에 넣기

		return vo;
	}
}
