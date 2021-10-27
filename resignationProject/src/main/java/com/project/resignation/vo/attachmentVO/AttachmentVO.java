package com.project.resignation.vo.attachmentVO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
 * 
 * 작성자 : 나정호
 * 설명    : 회원가입 시 필요한 4번째 스텝의 프로필사진 param
 * 
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AttachmentVO {
	
	// 프로필이 저장될 이메일정보
	private String email;
	// 파일타입 (프로젝트 :  0, 스터디 : 1, 토론 : 2, 아이디어 : 3, 프로필 : 4)
	private int fileType;
	// 파일명
	private String uploadFilename;
	// 원본파일명
	private String originFilename;
	// 파일경로
	private String realPath;

}
