package com.project.resignation.vo.joinStepVO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * 
 * 작성자 : 나정호
 * 설명    : 회원가입 시 필요한 4번째 스텝의 param
 * 
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JoinStep04VO {
	
	// 첫단계에서 받은 이메일정보
	private String email;
	// 주소
	private String address;
	// 링크1
	private String link1;
	// 링크2
	private String link2;

}
