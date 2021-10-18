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
public class JoinStep01VO {

	// 이메일
	private String email;
	// 비밀번호
	private String pw;
	// 나이
	private String age;
	// 받는 이메일
	private String vcMemberId;
	// 받는 비밀번호
	private String vcMemberPw;
	// 받는 나이
	private String vcMemberAge;
	
}
