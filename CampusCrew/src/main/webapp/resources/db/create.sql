-- 댓글
CREATE SEQUENCE tbComment_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 크루 모임 유형
CREATE SEQUENCE tbCrewType_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 참가 희망자 리스트(장기크루, 크루배틀)
CREATE SEQUENCE tbApplyMemberList_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 참가 확정자 리스트(단기크루, 장기크루, 크루배틀)
CREATE SEQUENCE tbConfirmMemberList_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 대화목록리스트
CREATE SEQUENCE tbMessengerList_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 대화메신저
CREATE SEQUENCE tbMessenger_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 대화참가자리스트
CREATE SEQUENCE tbMessengerMember_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 공유 수
CREATE SEQUENCE tbShare_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 좋아요/싫어요
CREATE SEQUENCE tbGoodBad_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 조회수
CREATE SEQUENCE tbHit_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 첨부파일
CREATE SEQUENCE tbImage_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 위치
CREATE SEQUENCE tbLocation_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 공지
CREATE SEQUENCE tbNotice_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;

-- 태그 시퀀스
CREATE SEQUENCE tbTag_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 관심크루 시퀀스
CREATE SEQUENCE tbInterestCrew_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 메너배지 시퀀스
CREATE SEQUENCE tbMannerBadge_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 첨부파일 시퀀스
CREATE SEQUENCE tbAttachment_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루소속명단 시퀀스
CREATE SEQUENCE tbCrewMemberList_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 챌린지피드 스퀀스
CREATE SEQUENCE tbChallengeFeed_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루원 팔로워 스퀀스
CREATE SEQUENCE tbCrewMemberFollower_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루채널 팔로워 스퀀스
CREATE SEQUENCE tbCrewChannelFollower_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루배틀 지원크루 리스트 스퀀스
CREATE SEQUENCE tbBattleApplyCrewList_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루배틀 확정크루 리스트 스퀀스
CREATE SEQUENCE tbBattleConfirmCrewList_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 유저평가 스퀀스
CREATE SEQUENCE tbUserEvaluation_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루평가 스퀀스
CREATE SEQUENCE tbCrewEvaluation_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루채널 스퀀스
CREATE SEQUENCE tbCrewChannel_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루배틀모임 시퀀스
CREATE SEQUENCE tbCrewBattle_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 관리자생성배틀모임 시퀀스
CREATE SEQUENCE tbManagerBattle_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 장기크루 시퀀스
CREATE SEQUENCE tbLongCrew_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 원데이크루 시퀀스
CREATE SEQUENCE tbOneDayCrew_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;
-- 크루원정보 시퀀스
CREATE SEQUENCE tbCrewMemberInfo_Seq
START WITH 1
INCREMENT BY 1
NOCACHE;



﻿-- 크루원정보
CREATE TABLE tbCrewMemberInfo (
	vcCrewMemberId	                VARCHAR(50)			PRIMARY KEY,
	vcCrewMemberPw	                VARCHAR(50)	    	NULL,
	vcCrewMemberNick	            VARCHAR(50)			NULL,
	vcCrewMemberAddress	        	VARCHAR(100)		NULL,
	vcCrewMemberPhone	        	VARCHAR(100)		NULL,
	vcCrewMemberAge	            	VARCHAR(100)		NULL,
	vcCrewMemberMBTI	            VARCHAR(100)		NULL,
	vcCrewMemberFreeTime1	    	VARCHAR(100)		NULL,
	vcCrewMemberFreeTime2   		VARCHAR(100)		NULL,
	vcCrewMemberIntroduce	   	 	VARCHAR(100)		NULL,
	vcCrewMemberEmail           	VARCHAR(100)		NULL,
	vcCrewMemberGender	        	VARCHAR(100)		NULL,
	vcCrewMemberSite1              	VARCHAR(100)		NULL,
    vcCrewMemberSite2           	VARCHAR(100)		NULL,
	dtCrewMemberJoinDate       		DATE 		        NULL,
	dtCrewMemberLastLogin      		DATE		        NULL,
	nCrewMemberStatus	            NUMBER              NULL
);

--원데이크루모임
CREATE TABLE tbOneDayCrew (
	nOneDaySeq	                    NUMBER		        PRIMARY KEY,
	vcCrewMemberId              	VARCHAR(50)		    REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                   	NUMBER              REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
    vcCrewChannelName        		VARCHAR(50)       	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcOneDayName	                VARCHAR(100)		NULL,
	nOneDayLimit                   	NUMBER		        NULL,
	vcOneDayGoal	                VARCHAR(100)		NULL,
	vcOneDayMeetLoc	            	VARCHAR(300)		NULL,
    vcOneDayMeetIntroduce  			VARCHAR(1000)		NULL,
	dtOneDayMeetCreate       		DATE		        NULL,
	dtOneDayMeetDate          		DATE                NULL,
	nOneDayMeetCreateCnt   			NUMBER		        NULL
);

-- 태그
CREATE TABLE tbTag (
	nCrewMeetTypeSeq	        	NUMBER		        PRIMARY KEY,
    vcCrewMemberId              	VARCHAR(50)		    REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                	NUMBER		        NOT NULL,
	nCrewMainCategory	        	NUMBER		        NOT NULL,
	nCrewSubCategory	        	NUMBER		        NOT NULL,
	Tag1	                    	VARCHAR(30)		   	NOT NULL,
	Tag2	                    	VARCHAR(30)		   	NULL,
	Tag3	                    	VARCHAR(30)		    NULL,
	Tag4	                    	VARCHAR(30)		    NULL,
	Tag5	                    	VARCHAR(30)		    NULL
);

-- 장기크루모임
CREATE TABLE tbLongCrew (
	nLongCrewSeq	                NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                    NUMBER              REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
    vcCrewChannelName            	VARCHAR(50)       	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcLongCrewName	                VARCHAR(50)			NOT NULL,
	vcLongCrewLimit	                VARCHAR(50)			NOT NULL,
	vcLongCrewGoal	                VARCHAR(50)			NOT NULL,
	vcLongCrewMeetLoc	            VARCHAR(100)		NULL,
	vcLongCrewIntroduce	        	VARCHAR(1000)		NULL,
	dtLongCrewCreate	            DATE		        NOT NULL,
	dtLongCrewMeetDate	        	DATE                NULL,
	nLongCrewMeetCreateCnt   		NUMBER		        NULL
);

--크루 채널
CREATE TABLE tbCrewChannel (
	vcCrewChannelName	        	VARCHAR(50)			PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                    NUMBER		        REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
	vcCrewChannelIntroduce	    	VARCHAR(1000)		NULL,
	vcCrewChannelLink1              VARCHAR(100)		NULL,
	vcCrewChannelLink2	            VARCHAR(100)		NULL
);

-- 크루배틀모임
CREATE TABLE tbCrewBattle (
	nCrewBattleSeq                  NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    vcCrewChannelName            	VARCHAR(50)       	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                    NUMBER              REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
	vcCrewBattleTitle	            VARCHAR(50)			NOT NULL,
	vcCrewBattleChallenge          	VARCHAR(500)		NOT NULL,
	vcCrewBattleLimit	           	VARCHAR(10)		    NOT NULL,
	vcCrewBattleSchedule1          	VARCHAR(50)			NULL,
	vcCrewBattleSchedule2	        VARCHAR(50)			NULL,
	vcCrewBattleContent	            VARCHAR(1000)		NULL,
	dtCrewBattleCreate	            DATE		        NOT NULL
);

-- 관리자생성배틀
CREATE TABLE tbManagerBattle (
	nManagerBattleSeq	            NUMBER		        PRIMARY KEY,
    vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    vcCrewChannelName            	VARCHAR(50)      	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                    NUMBER              REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcManagerBattleTitle	        VARCHAR(100)		NOT NULL,
	vcManagerBattleChallenge		VARCHAR(50)			NOT NULL,
	vcManagerBattleLimit	        VARCHAR(50)			NOT NULL,
	vcManagerBattleSchedule1		VARCHAR(20)			NULL,
	vcManagerBattleSchedule2		VARCHAR(20)			NULL,
	vcManagerBattleContent	    	VARCHAR(1000)		NULL,
	dtManagerBattleCreate	        DATE		        NULL
);

-- 챌린지피드
CREATE TABLE tbChallengeFeed (
	nChallengeFeedSeq               NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL,
	vcChallengeFeedCreate	        VARCHAR(50)			NOT NULL
);

-- 첨부파일
CREATE TABLE tbAttachment (
	nAttachmentSeq	                NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMainCategory              	NUMBER		        NOT NULL,
	nCrewSubCategory	            NUMBER		        NOT NULL,
	vcFilename	                    VARCHAR(50)			NOT NULL,
	vcOrgFilename	                VARCHAR(100)		NULL,
	vcFilePath	                    VARCHAR(100)		NULL
);

-- 관심크루모임
CREATE TABLE tbInterestCrewMeet (
	nInterestCrewSeq                NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)	    	REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory              	NUMBER		        NOT NULL,
	dtCrewMeetCreate	            DATE		        NULL
);

-- 유저평가
CREATE TABLE tbUserEvaluation (
	nUserEvaluationSeq              NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId2	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nMannerBadgeSeq                	NUMBER              REFERENCES tbMannerBadge(nMannerBadgeSeq) ON DELETE CASCADE NOT NULL,
	vcScore	                        VARCHAR(10)		    NULL,
	vcReview	                    VARCHAR(300)		NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL
);

-- 크루평가
CREATE TABLE tbCrewEvaluation (
	nCrewEvaluationSeq              NUMBER		        PRIMARY KEY,
    vcCrewChannelName	        	VARCHAR(50)			REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nMannerBadgeSeq                	NUMBER              REFERENCES tbMannerBadge(nMannerBadgeSeq) ON DELETE CASCADE NOT NULL,
	vcScore	                        VARCHAR(10)		    NULL,
	vcReview	                    VARCHAR(300)		NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL
);

--매너평가배지
CREATE TABLE tbMannerBadge (
	nMannerBadgeSeq	                NUMBER		        PRIMARY KEY,
	vcGoodManner	                NUMBER		        NULL,
	vcGoodAttitude	                NUMBER		        NULL,
	vcKind	                        NUMBER		        NULL,
	vcMoodMaker	                    NUMBER		        NULL,
	vcLikeLeader	                NUMBER		        NULL,
	vcLively	                    NUMBER		        NULL,
	vcGoodEnergy	                NUMBER		        NULL,
	vcMeetAgain	                    NUMBER		        NULL,
	vcKeepPromise	                NUMBER		        NULL
);

-- 크루원 팔로워
CREATE TABLE tbCrewMemberFollower (
	nCrewMemberFollowerSeq			NUMBER		        NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId2	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	dtFollowTime	                DATE		        NULL
);

-- 크루채널 팔로워
CREATE TABLE tbCrewChannelFollower (
	nCrewChannelFollowerSeq			NUMBER		        NOT NULL,
    vcCrewChannelName            	VARCHAR(50)       	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	dtFollowTime	                DATE		        NULL
);

-- 크루소속명단
CREATE TABLE tbCrewMemberList (
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcCrewChannelName	        	VARCHAR(50)			REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewChannelDate	            DATE		        NOT NULL
);

-- 배틀참가 희망크루리스트
CREATE TABLE tbBattleApplyCrewList (
	nBattleApplySeq	               	NUMBER		        PRIMARY KEY,
	vcCrewChannelName            	VARCHAR(50)			REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL,
    dtRegDate                       DATE                NOT NULL        
);

-- 배틀참가 확정크루리스트
CREATE TABLE tbBattleConfirmCrewList (
	nBattleConfirmSeq	            NUMBER		        PRIMARY KEY,
	vcCrewChannelName            	VARCHAR(50)			REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL,
    dtRegDate                       DATE                NOT NULL   
);

