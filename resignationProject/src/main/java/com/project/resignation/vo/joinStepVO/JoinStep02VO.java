package com.project.resignation.vo.joinStepVO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * 
 * 작성자 : 나정호
 * 설명    : 회원가입 시 필요한 첫번째 스텝의 param
 * 
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JoinStep02VO {
	
	// step01에서 가입된 이메일정보
	private String email;
	// 나이
	private String age;
	// MBTI
	private String mbti;
	// 여유로운 시간1
	private String possibleTime1;
	// 여유로운 시간2
	private String possibleTime2;

}
