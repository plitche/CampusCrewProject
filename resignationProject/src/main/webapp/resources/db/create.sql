-- SEQUENCE들

-- 토론 시퀀스
CREATE SEQUENCE tbDiscussion_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 아이디어투표 시퀀스
CREATE SEQUENCE tbIdeaVoting_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 프로젝트 시퀀스
CREATE SEQUENCE tbProject_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 스터디 시퀀스
CREATE SEQUENCE tbStudy_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 일정시퀀스
CREATE SEQUENCE tbSchedule_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 프로젝트/스터디 필요참가자 스퀀스
CREATE SEQUENCE tbNeedParticipants_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 참가 희망자 스퀀스
CREATE SEQUENCE tbApplyParticipants_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 대화목록 리스크 시퀀스
CREATE SEQUENCE tbMessengerList_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 대화참가자리스크 스퀀스
CREATE SEQUENCE tbMessengerParticipants_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 대화내용 스퀀스
CREATE SEQUENCE tbMessenger_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 댓글 시퀀스
CREATE SEQUENCE tbComment_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 대댓글 시퀀스
CREATE SEQUENCE tbSubComment_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 주직무 시퀀스
CREATE SEQUENCE tbMainJob_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 부직무 시퀀스
CREATE SEQUENCE tbSubJob_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 태그 시퀀스
CREATE SEQUENCE tbTag_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 프로젝트/스터디 찜리스트 시퀀스
CREATE SEQUENCE tbSavedList_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 첨부파일 시퀀스
CREATE SEQUENCE tbAttachment_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 공유수 시퀀스
CREATE SEQUENCE tbShare_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 좋아요/싫어요 시퀀스
CREATE SEQUENCE tbGoodBad_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 조회수 시퀀스
CREATE SEQUENCE tbHit_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- CREATE TABLE --

-- 유저
CREATE TABLE tbMember (
	vcMemberId 			 	VARCHAR(50) 		PRIMARY KEY,
	vcMemberPw 			 	VARCHAR(30) 		NOT NULL,
	vcMemberName 		 	VARCHAR(30) 		NULL,
	vcMemberNicname	 	VARCHAR(50) 		NULL,
	vcMemberAddress	 	VARCHAR(50) 		NULL,
	vcMemberPhone 		 	VARCHAR(30) 		NULL,
	vcMemberAge 			 	VARCHAR(10) 		NULL,
	vcMemberMBTI 		 	VARCHAR(20) 		NULL,
	vcMemberTime1 		 	VARCHAR(40) 		NULL,
	vcMemberTime2 		 	VARCHAR(40) 		NULL,
	vcMemberIntroduce   	VARCHAR(2000) 	NULL,
	vcMemberGender		 	VARCHAR(10) 		NULL,
	vcMemberLink1 		 	VARCHAR(30) 		NULL,
	vcMemberLink2 		 	VARCHAR(30) 		NULL
);

-- 프로젝트
CREATE TABLE tbProject (
	iProjectNo 					NUMBER 				PRIMARY KEY,
	vcProjectMakerId			VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	vcLocation					VARCHAR(50) 			NULL,
	vcTime						VARCHAR(50)			NULL,
	dtStartDate					DATE						NOT NULL,
	dtEndDate					DATE						NOT NULL,
	dtRegDate					DATE						NOT NULL,
	nProcess						NUMBER					NOT NULL,
	nStatus						NUMBER					NOT NULL,
	vcSubject					VARCHAR(50)			NOT NULL,
	vcTitle						VARCHAR(100)			NOT NULL,			
	vcContent					VARCHAR(1000)			NOT NULL
);

-- 스터디
CREATE TABLE tbStudy (
	iStudyNo					NUMBER					PRIMARY KEY,
	vcStudyMakerId			VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	vcLocation					VARCHAR(50) 			NULL,
	vcTime						VARCHAR(50)			NULL,
	dtStartDate					DATE						NOT NULL,
	dtEndDate					DATE						NOT NULL,
	dtRegDate					DATE						NOT NULL,
	nProcess						NUMBER					NOT NULL,
	nStatus						NUMBER					NOT NULL,
	vcSubject					VARCHAR(50)			NOT NULL,
	vcTitle						VARCHAR(100)			NOT NULL,
	vcContent					VARCHAR(1000)			NOT NULL
);

-- 토론
CREATE TABLE tbDiscussion (
	iDiscussNo					NUMBER					PRIMARY KEY,
	vcDiscussMakerId			VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	vcDiscussTheme			VARCHAR(100)		NOT NULL,
	vcDiscussTitle				VARCHAR(150)		NOT NULL,
	dtStartDate					DATE						NOT NULL,
	dtEndDate					DATE						NOT NULL,
	dtRegDate					DATE						NOT NULL,
	vcDiscussContent			VARCHAR(1000)		NOT NULL,
	vcDiscussChanger			VARCHAR(30)			NOT NULL,
	vcDiscussChangeDate	DATE						NOT NULL,
	nStatus						NUMBER					NOT NULL
);

-- 아이디어 투표
CREATE TABLE tbIdeaVoting (
	iIdeaNo						NUMBER					PRIMARY KEY,
	vcIdeaMakerId				VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	vcIdeaTheme				VARCHAR(50)			NOT NULL,
	vcIdeaTitle					VARCHAR(100)		NOT NULL,
	vcIdeaContent				VARCHAR(1500)		NOT NULL,
	dtStartDate					DATE						NOT NULL,
	dtEndDate					DATE						NOT NULL,
	dtRegDate					DATE						NOT NULL,
	vcIdeaChanger				VARCHAR(30)			NOT NULL,
	vcIdeaChangeDate		DATE						NOT NULL,
	nStatus						NUMBER					NOT NULL
);

-- 주직무
CREATE TABLE tbMainJob (
	iMainJobNo					NUMBER					PRIMARY KEY,
	vcMainJobId				VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	vcMainJob					VARCHAR(30)			NOT NULL,
	vcMainJobLevel			VARCHAR(20)			NOT NULL,
	vcMainJobField1			VARCHAR(30)			NOT NULL,
	vcMainJobField2			VARCHAR(30)			NULL,
	vcMainJobField3			VARCHAR(30)			NULL
);

-- 부직무
CREATE TABLE tbSubJob (
	iSubJobNo					NUMBER					PRIMARY KEY,
	vcSubJobId					VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	vcSubJob					VARCHAR(50)			NOT NULL,
	vcSubJobLevel				VARCHAR(20)			NOT NULL,
	vcSubJobField1				VARCHAR(30)			NOT NULL,
	vcSubJobField2				VARCHAR(30)			NULL,
	vcSubJobField3				VARCHAR(30)			NULL
);

-- 흥미분야
CREATE TABLE tbInterestField (
	vcInterestId					VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	vcField1						VARCHAR(30)			NOT NULL,
	vcField2						VARCHAR(30)			NULL,
	vcField3						VARCHAR(30)			NULL,
	vcField4						VARCHAR(30)			NULL,
	vcField5						VARCHAR(30)			NULL
);

-- 프로젝트/스터디 찜리스트
CREATE TABLE tbSavedList (
	vcSavedListId				VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	nPostReferNo				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL
);

-- 댓글
CREATE TABLE tbComment (
	iCommentNo				NUMBER					PRIMARY KEY,
	vcCommentId				VARCHAR(50) 			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	vcCommentContent		VARCHAR(1500)		NULL,
	dtCommentCreated		DATE						NOT NULL,
	dtCommentUpdated		DATE						NOT NULL
);

-- 대댓글
CREATE TABLE tbSubComment (
	iSubCommentNo			NUMBER					PRIMARY KEY,
	nCommentNo				NUMBER					REFERENCES tbComment(iCommentNo) ON DELETE CASCADE NOT NULL,
	vcSubCommentId			VARCHAR(50)			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	vcSubCommentContent	VARCHAR(1000)		NULL,
	dtSubCommentCreated	DATE						NOT NULL,
	dtSubCommentUpdated	DATE						NOT NULL
);

-- 프로젝트/스터디 일정
CREATE TABLE tbSchedule (
	iScheduleNo				NUMBER					PRIMARY KEY,
	vcScheduleId				VARCHAR(50)     		REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	nPostReferNo 				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	vcContent					VARCHAR(1000)		NOT NULL,
	dtRegDate					DATE						NOT NULL,
	dtOnDate					DATE						NOT NULL,
	nDonePercent				NUMBER					NOT NULL
);

-- 프로젝트/스터디 필요 참가자 (몇명이 필요한지에 대한 정보?) (id 널 허용해야될것같)
CREATE TABLE tbNeedParticipants (
	iNeedParticipantsNo		NUMBER					PRIMARY KEY,
	vcNeedParticipantsId		VARCHAR(50)			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NULL,
	nPostReferNo 				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	dtParticipateDate			DATE						NOT NULL,
	vcPosition					VARCHAR(50)			NOT NULL
);

-- 참가 희망자
CREATE TABLE tbApplyParticipants (
	iApplyParticipantsNo		NUMBER					PRIMARY KEY,
	vcApplyParticipantsId		VARCHAR(50)			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	nPostReferNo				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	dtParticipateDate			DATE						NOT NULL,
	vcPosition					VARCHAR(50)			NOT NULL
);

-- 대화목록 리스트
CREATE TABLE tbMessengerList (
	iMessListNo					NUMBER					PRIMARY KEY,
	nPostReferNo				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	dtLastUpdateDate			DATE						NOT NULL
);

-- 대화 참가자 리스트
CREATE TABLE tbMessengerParticipants (
	iMessParicipantsNo		NUMBER					PRIMARY KEY,
	vcMessParticiPantsId		VARCHAR(50)			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	nPostReferNo				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL
);

-- 대화 메신저
CREATE TABLE tbMessenger (
	iMessNo						NUMBER					PRIMARY KEY,
	vcMessId						VARCHAR(50)			REFERENCES tbMember(vcMemberId) ON DELETE CASCADE NOT NULL,
	nMessListNo				NUMBER					REFERENCES tbMessengerList(iMessListNo) ON DELETE CASCADE NOT NULL,
	nPostReferNo				NUMBER					NOT NULL,
	vcMessContent			VARCHAR(1000)		NOT NULL,
	dtRegDate					DATE						NOT NULL
);

-- 아이디어 투표 선택지
CREATE TABLE tbDistractor (
	nIdeaVotingNo				NUMBER					REFERENCES tbIdeaVoting(iIdeaNo) ON DELETE CASCADE NOT NULL,
	nDistractorType			NUMBER					NOT NULL,
	vcChoose1					VARCHAR(50)			NOT NULL,
	vcChoose2					VARCHAR(50)			NULL,
	vcChoose3					VARCHAR(50)			NULL,
	vcChoose4					VARCHAR(50)			NULL,
	vcChoose5					VARCHAR(50)			NULL
);

-- 첨부파일
CREATE TABLE tbAttachment (
	iAttachment					NUMBER					PRIMARY KEY,
	nPostReferInfo				VARCHAR(30)			NOT NULL,
	nFileType					NUMBER					NOT NULL,
	vcFileName					VARCHAR(100)		NOT NULL,
	vcOrgFilename				VARCHAR(100)		NOT NULL,
	vcFilePath					VARCHAR(500)		NOT NULL
);

-- 공유 수
CREATE TABLE tbShare (
	iShareNo						NUMBER					PRIMARY KEY,
	nPostReferNo				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	nShareCnt					NUMBER					NOT NULL
);

-- 좋아요/싫어요
CREATE TABLE tbGoodBad (
	iGoodBadNo				NUMBER					PRIMARY KEY,
	nPostReferNo				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	nGood						NUMBER					NOT NULL,
	nBad							NUMBER					NOT NULL
);

-- 조회수
CREATE TABLE tbHit (
	iHitNo						NUMBER					PRIMARY KEY,
	nPostReferNo				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	nHit							NUMBER					NOT NULL
);

-- 태그
CREATE TABLE tbTag (
	iTagNo						NUMBER					PRIMARY KEY,
	nPostReferNo				NUMBER					NOT NULL,
	nPostReferType			NUMBER					NOT NULL,
	vcTag							VARCHAR(50)			NOT NULL
);
