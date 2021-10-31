package com.project.resignation.controller.joinController;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.project.resignation.service.JoinService;
import com.project.resignation.vo.attachmentVO.AttachmentVO;
import com.project.resignation.vo.joinStepVO.JoinStep01VO;
import com.project.resignation.vo.joinStepVO.JoinStep03VO;
import com.project.resignation.vo.joinStepVO.JoinStep04VO;

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
	public Map<String, Object> joinStep03(@RequestBody JoinStep03VO joinStep03VO, Model model) throws Exception {
		
		Map<String, Object> joinStep3ResultData = new HashMap<String, Object>();
		
		
		
		// step03에서 추가적인 정보를 업데이트한다.
		int updateResult1 = joinService.joinStep03UpdateInfo(joinStep03VO);
		
		// step03의 정보업데이트가 성공하면
		if (updateResult1 > 0) {
			joinStep3ResultData.put("success", "Y");
		// step03의 정보업데이트가 실패하면
		} else {
			joinStep3ResultData.put("success", "N");
		}
		
		return joinStep3ResultData;
		
	}
	
	@RequestMapping(value="/step04",
			method=RequestMethod.POST
			)
	@ResponseBody
	public Map<String, Object> joinStep04(
			 @RequestParam(value = "myprofile") MultipartFile myprofile
		     , @RequestParam(value = "address", required = false) String address
		     , @RequestParam(value = "link1", required = false) String link1
		     , @RequestParam(value = "link2", required = false) String link2
		     , @RequestParam(value = "email", required = false) String email
			, JoinStep04VO joinStep04VO
			, Model model
			, MultipartHttpServletRequest multipartRequest
			) throws Exception {
		
		Map<String, Object> joinStep4ResultData = new HashMap<String, Object>();
		
		joinStep04VO.setAddress(address);
		joinStep04VO.setEmail(email);
		joinStep04VO.setLink1(link1);
		joinStep04VO.setLink2(link2);
		
		
		// step04에서 추가적인 정보를 업데이트한다.(이메일, 주소, 링크1, 링크2)
		int updateResult2 = joinService.joinStep04UpdateInfo(joinStep04VO);
		
		// 프로젝트 : 0, 스터디 : 1, 토론 : 2, 아이디어 : 3, 프로필 : 4
		// 저장할 파일타입은 프로필이므로 4
		int fileType = 4;
		
		// 이메일, 주소, 링크1, 링크2 가 삽입되었을 시만 프로필사진 삽입
		if (updateResult2 > 0) {
			// 파일을 첨부했으면
			if (myprofile != null && !myprofile.isEmpty()) {
				String originFilename = myprofile.getOriginalFilename();
				String extension = originFilename.substring(originFilename.lastIndexOf(".") + 1);
				String filename = originFilename.substring(0, originFilename.lastIndexOf("."));
				String uploadFilename = filename + "_" + System.currentTimeMillis() + "." + extension;
				String realPath = multipartRequest.getServletContext().getRealPath("resources/storage");
				File dir = new File(realPath);
				if (!dir.exists()) {
					dir.mkdirs();
				}
				File uploadFile = new File(realPath, uploadFilename);
				try {
					myprofile.transferTo(uploadFile);
				} catch (Exception e) {
					e.printStackTrace();
				}
				
				AttachmentVO attachmentVO = new AttachmentVO();
				attachmentVO.setEmail(email);
				attachmentVO.setFileType(fileType);
				attachmentVO.setUploadFilename(uploadFilename);
				attachmentVO.setOriginFilename(originFilename);
				attachmentVO.setRealPath(realPath);
				joinService.insertMyProfile(attachmentVO);
				joinStep4ResultData.put("result", "Y");
			// 파일이 첨부되지 않았으면
			} else {
				AttachmentVO attachmentVO = new AttachmentVO();
				attachmentVO.setEmail(email);
				attachmentVO.setFileType(fileType);
				attachmentVO.setUploadFilename("첨부없음");
				attachmentVO.setOriginFilename("첨부없음");
				attachmentVO.setRealPath("");
				joinService.insertMyProfile(attachmentVO);
				joinStep4ResultData.put("result", "Y");
			}
			// 모든 삽입이 완료 되었을 시에 "Y"
		// 이메일, 주소, 링크1, 링크2 가 삽입되지 않았다면
		} else {
			// 삽입실패 시 "N"
			joinStep4ResultData.put("result", "N");
		}
		
		return joinStep4ResultData;
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
