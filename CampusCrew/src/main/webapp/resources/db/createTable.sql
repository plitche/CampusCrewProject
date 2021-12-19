-- 총 테이블의 개수는 30개 - 2021.12.18일 기준
-- 추가로 생성돌 가능성 (O)
-- ON DELETE CASCADE 추가로 고려해야 함

﻿-- 1.크루원정보
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

-- 2. 모임유형
CREATE TABLE tbCrewType (
	nCrewTypeSeq			NUMBER				PRIMARY KEY,
	vcCrewChannelName	VARCHAR(50)		NULL,
	vcCrewTypeCategory	VARCHAR(100)		NOT NULL,
	vcCrewTypeField			VARCHAR(100)		NOT NULL,
	vcCrewTypeDetail		VARCHAR(100)		NOT NULL
);

-- 3. 크루 채널
CREATE TABLE tbCrewChannel (
	vcCrewChannelName	        	VARCHAR(50)			PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                    NUMBER		        REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
	vcCrewChannelIntroduce	    	VARCHAR(1000)		NULL,
	vcCrewChannelLink1              VARCHAR(100)		NULL,
	vcCrewChannelLink2	            VARCHAR(100)		NULL
);

-- 4. 태그
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

-- 5. 원데이크루모임
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

-- 6. 장기크루모임
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

-- 7. 크루배틀모임
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

-- 8. 관리자생성배틀
CREATE TABLE tbManagerBattle (
	nManagerBattleSeq	            NUMBER		        PRIMARY KEY,
    vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    vcCrewChannelName            	VARCHAR(50)      	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                    NUMBER              REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
	vcManagerBattleTitle	        VARCHAR(100)		NOT NULL,
	vcManagerBattleChallenge		VARCHAR(50)			NOT NULL,
	vcManagerBattleLimit	        VARCHAR(50)			NOT NULL,
	vcManagerBattleSchedule1		VARCHAR(20)			NULL,
	vcManagerBattleSchedule2		VARCHAR(20)			NULL,
	vcManagerBattleContent	    	VARCHAR(1000)		NULL,
	dtManagerBattleCreate	        DATE		        NULL
);

-- 9. 챌린지피드
CREATE TABLE tbChallengeFeed (
	nChallengeFeedSeq               NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL,
	vcChallengeFeedCreate	        VARCHAR(50)			NOT NULL
);

-- 10. 첨부파일
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

-- 11. 관심크루모임
CREATE TABLE tbInterestCrewMeet (
	nInterestCrewSeq                NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)	    	REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory              	NUMBER		        NOT NULL,
	dtCrewMeetCreate	            DATE		        NULL
);

-- 12. 매너평가배지
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

-- 13. 유저평가
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

-- 14. 크루평가
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

-- 15. 크루원 팔로워
CREATE TABLE tbCrewMemberFollower (
	nCrewMemberFollowerSeq			NUMBER		        NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId2	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	dtFollowTime	                DATE		        NULL
);

-- 16. 크루채널 팔로워
CREATE TABLE tbCrewChannelFollower (
	nCrewChannelFollowerSeq			NUMBER		        NOT NULL,
    vcCrewChannelName            	VARCHAR(50)       	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	dtFollowTime	                DATE		        NULL
);

-- 17. 크루소속명단
CREATE TABLE tbCrewMemberList (
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcCrewChannelName	        	VARCHAR(50)			REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewChannelDate	            DATE		        NOT NULL
);

-- 18. 배틀참가 희망크루리스트
CREATE TABLE tbBattleApplyCrewList (
	nBattleApplySeq	               	NUMBER		        PRIMARY KEY,
	vcCrewChannelName            	VARCHAR(50)			REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL,
    dtRegDate                       DATE                NOT NULL        
);

-- 19. 배틀참가 확정크루리스트
CREATE TABLE tbBattleConfirmCrewList (
	nBattleConfirmSeq	            NUMBER		        PRIMARY KEY,
	vcCrewChannelName            	VARCHAR(50)			REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                VARCHAR(50)			REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL,
    dtRegDate                       DATE                NOT NULL   
);

-- 20. 댓글
CREATE TABLE tbComment (
	nCommentSeq			NUMBER				PRIMARY KEY, 
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	dtRegDate				DATE					NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	nCrewSubCategory		NUMBER				NOT NULL, 
	vcContent				VARCHAR(2000) 	NOT NULL
);	

-- 21. 참가 희망자 리스트(장기크루)
CREATE TABLE tbApplyMemberList (
	nCrewApplySeq			NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 22. 참가 확정자 리스트(단기크루, 장기크루)
CREATE TABLE tbConfirmMemberList (
	nCrewConfirmSeq		NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 23. 대화목록리스트
CREATE TABLE tbMessengerList (
	nMngListSeq				NUMBER				PRIMARY KEY,
	nCrewMainCategory	NUMBER				NOT NULL,
	nCrewSubCategory		NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 24. 대화참가자리스트
CREATE TABLE tbMessengerMembers (
	nMngMemberSeq		NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nMngListSeq				NUMBER				REFERENCES tbMessengerList(nMngListSeq) ON DELETE CASCADE NOT NULL
);

-- 25. 대화메신저
CREATE TABLE tbMessenger (
	nMngSeq				NUMBER				PRIMARY KEY,
	vcFromMemberID		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nMngListSeq				NUMBER				REFERENCES tbMessengerList(nMngListSeq) ON DELETE CASCADE NOT NULL,
	vcMngContent			VARCHAR(1000)		NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 26. 공유 수
CREATE TABLE tbShare (
	nShareSeq				NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 27. 좋아요/싫어요
CREATE TABLE tbGoodBad (
	nGoodBadSeq			NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	nGood					NUMBER				NOT NULL,
	nBad						NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 28. 조회수
CREATE TABLE tbHit (
	nHitSeq					NUMBER				PRIMARY KEY,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	nHitCnt					NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 29. 위치
CREATE TABLE tbLocation (
	nLocationSeq			NUMBER				PRIMARY KEY,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	vcLocationDetail			VARCHAR(2000)		NOT NULL,
	nLatitude		 			NUMBER				NOT NULL,
	nLongitude				NUMBER				NOT NULL
);

-- 30. 공지
CREATE TABLE tbNotice (
	nNoticeSeq				NUMBER			PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)	REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER			NOT NULL,
	nCrewMainCategory	NUMBER			NOT NULL,
	dtRegDate				DATE				NOT NULL
);
