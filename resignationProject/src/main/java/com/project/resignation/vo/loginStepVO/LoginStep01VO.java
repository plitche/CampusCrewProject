package com.project.resignation.vo.loginStepVO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * 
 * 작성자 : 나정호
 * 설명    : 로그인 시 필요한 첫번째 스텝의 param
 * 
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginStep01VO {

	// 이메일 / 네이버 이메일도 같이
	private String email;
	// 비밀번호
	private String pw;
	// 받는 이메일
	private String vcMemberId;
	// 받는 비밀번호
	private String vcMemberPw;
	// 받는 닉네임
	private String vcMemberNickname;
	// 받는 주소
	private String vcMemberAddress;
	// 받는 MBTI
	private String vcMemberMbti;
	// 받는 시간1
	private String vcMemberTime1;
	// 받는 시간2
	private String vcMemberTime2;
	// 받는 소개
	private String vcMemberIntroduce;
	// 받는 링크1
	private String vcMemberLink1;
	// 받는 링크2
	private String vcMemberLink2;
	// 필요한 프로필 사진(저장된 파일명_
	private String vcFilename;
	
	
	// LoginType 지정 --> 1 : 일반회원가입으로 로그인한 타입 / 2 : 네이버로그인한 타입
	private String loginType;
}
