package com.project.resignation.vo.joinStepVO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * 
 * 작성자 : 나정호
 * 설명    : 회원가입 시 필요한 5번째 스텝의 param
 * 
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JoinStep05VO {

	// step01에서 가입된 이메일정보
	private String email;
	// 소개내용
	private String introduce;
	// 흥미분야1
	private String field1;
	// 흥미분야2
	private String field2;
	// 흥미분야3
	private String field3;
	// 흥미분야4
	private String field4;
	// 흥미분야5
	private String field5;


	
}
