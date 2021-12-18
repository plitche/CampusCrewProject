-- 크루원정보
CREATE TABLE tbCrewMemberInfo (
	vcCrewMemberId	                VARCHAR(50)		PRIMARY KEY,
	vcCrewMemberPw	                VARCHAR(50)	    NULL,
	vcCrewMemberNick	            VARCHAR(50)		NULL,
	vcCrewMemberAddress	        VARCHAR(100)		NULL,
	vcCrewMemberPhone	        VARCHAR(100)		NULL,
	vcCrewMemberAge	            VARCHAR(100)		NULL,
	vcCrewMemberMBTI	            VARCHAR(100)		NULL,
	vcCrewMemberFreeTime1	    VARCHAR(100)		NULL,
	vcCrewMemberFreeTime2   	VARCHAR(100)		NULL,
	vcCrewMemberIntroduce	    VARCHAR(100)		NULL,
	vcCrewMemberEmail           	VARCHAR(100)		NULL,
	vcCrewMemberGender	        VARCHAR(100)		NULL,
	vcCrewMemberSite1              VARCHAR(100)		NULL,
    vcCrewMemberSite2           	VARCHAR(100)		NULL,
	vcCrewMemberJoinDate       DATE 		                NULL,
	vcCrewMemberLastLogin      DATE		                NULL,
	vcCrewMemberStatus	        NUMBER                NULL
);

--원데이크루모임
CREATE TABLE tbOneDayCrew (
	iOneDayNo	                        NUMBER		            PRIMARY KEY,
	vcCrewMemberId              VARCHAR(50)		        REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	vcOneDayName	                VARCHAR(100)		    NULL,
	nOneDayLimit                    	NUMBER		            NULL,
	vcOneDayGoal	                VARCHAR(100)		    NULL,
	vcOneDayMeetLoc	            VARCHAR(300)		    NULL,
    vcOneDayMeetIntroduce  VARCHAR(1000)		    NULL,
	vcOneDayMeetCreate       DATE		                    NULL,
	vcOneDayMeetDate          VARCHAR(50)		    NULL,
	nOneDayMeetCreateCnt   NUMBER		            NULL
);

-- 태그
CREATE TABLE tbTag (
	iCrewMeetTypeNo	            NUMBER		              PRIMARY KEY,
	nCrewMeetNo	                NUMBER		              NOT NULL,
	nCrewMeetCategory1	        NUMBER		              NOT NULL,
	nCrewMeetCategory2	    NUMBER		              NOT NULL,
	Tag1	                                    VARCHAR(30)		      NOT NULL,
	Tag2	                                VARCHAR(30)		      NULL,
	Tag3	                                VARCHAR(30)		      NULL,
	Tag4	                                VARCHAR(30)		      NULL,
	Tag5	                                VARCHAR(30)		      NULL
);

-- 장기크루모임
CREATE TABLE tbLongCrew (
	iLongCrewNo	                        NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	vcLongCrewName	                VARCHAR(50)		NOT NULL,
	vcLongCrewLimit	                VARCHAR(50)		NOT NULL,
	vcLongCrewGoal	                VARCHAR(50)		NOT NULL,
	vcLongCrewMeetLoc	            VARCHAR(100)		NULL,
	vcLongCrewIntroduce	        VARCHAR(1000)		NULL,
	vcLongCrewCreate	                DATE		                NOT NULL,
	vcLongCrewMeetDate	        VARCHAR(50)		NULL,
	vcLongCrewMeetCreateCnt  NUMBER		        NULL
);

--크루 채널
CREATE TABLE tbCrewChannel (
	vcCrewChannelName	        VARCHAR(50)		PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	vcCrewChannelIntroduce	    VARCHAR(1000)		NULL,
	vcCrewChannelLink1              VARCHAR(100)		NULL,
	vcCrewChannelLink2	            VARCHAR(100)		NULL,
	nTagSeq                                  NUMBER		        NULL
);

-- 크루배틀모임
CREATE TABLE tbCrewBattle (
	iCrewBattleNo                       	NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	vcCrewBattleTitle	                VARCHAR(50)		NOT NULL,
	vcCrewBattleChallenge          VARCHAR(500)		NOT NULL,
	vcCrewBattleLimit	                VARCHAR(10)		    NOT NULL,
	vcCrewBattleSchedule1          VARCHAR(50)		NULL,
	vcCrewBattleSchedule2	        VARCHAR(50)		NULL,
	vcCrewBattleContent	            VARCHAR(1000)		NULL,
	vcCrewBattleCreate	            DATE		                NOT NULL
);

-- 관리자생성배틀
CREATE TABLE tbManagerBattle (
	iManagerBattleNo	                NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	vcManagerBattleTitle	            VARCHAR(100)		NOT NULL,
	vcManagerBattleChallenge	VARCHAR(50)		NOT NULL,
	vcManagerBattleLimit	        VARCHAR(50)		NOT NULL,
	vcManagerBattleSchedule1	VARCHAR(20)		NULL,
	vcManagerBattleSchedule2	VARCHAR(20)		NULL,
	vcManagerBattleContent	    VARCHAR(1000)		NULL,
	vcManagerBattleCreate	        DATE		                NULL
);

-- 챌린지피드
CREATE TABLE tbChallengeFeed (
	iChallengeFeedNo               	NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL,
	vcChallengeFeedCreate	        VARCHAR(50)		NOT NULL
);

-- 첨부파일
CREATE TABLE tbAttachment (
	iAttachmentNo	                    NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory1	            NUMBER		        NOT NULL,
	nCrewMeetCategory2	        NUMBER		        NOT NULL,
	vcFilename	                            VARCHAR(50)		NOT NULL,
	vcOrgFilename	                    VARCHAR(100)		NULL,
	vcFilePath	                            VARCHAR(100)		NULL
);

-- 관심크루모임
CREATE TABLE tbInterestCrew (
	iInterestCrew                          NUMBER		            PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)	    REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory              NUMBER		        NOT NULL,
	vcCrewMeetCreate	                DATE		                NULL
);

-- 유저평가
CREATE TABLE tbUserEvaluation (
	iUserEvaluationNo                  NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	vcCrewMemberId2	                VARCHAR(50)		NOT NULL,
	vcScore	                                VARCHAR(10)		    NULL,
	vcReview	                                VARCHAR(300)		NULL,
	nCrewMeetNo	                    NUMBER		        NOT NULL,
	nCrewMeetCategory	            NUMBER		        NOT NULL
);

--매너평가배지
CREATE TABLE tbMannerBadge (
	iMannerBadgeNo	                NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	vcCrewMemberId2	                VARCHAR(50)		NOT NULL,
	vcGoodManner	                    NUMBER		        NULL,
	vcGoodAttitude	                    NUMBER		        NULL,
	vcKind	                                    NUMBER		        NULL,
	vcMoodMaker	                    NUMBER		        NULL,
	vcLikeLeader	                        NUMBER		        NULL,
	vcLively	                                NUMBER		        NULL,
	vcGoodEnergy	                    NUMBER		        NULL,
	vcMeetAgain	                        NUMBER		        NULL,
	vcKeepPromise	                    NUMBER		        NULL
);

-- 팔로워
CREATE TABLE tbFollower (
	iFollowerNo	                            NUMBER		        NOT NULL,
	vcCrewMemberId	                VARCHAR(50)		NOT NULL,
	vcCrewMemberId2	                VARCHAR(50)		NOT NULL,
	FollowTime	                            DATE		                NULL
);

-- 크루소속명단
CREATE TABLE tbCrewMemberList (
	vcCrewMemberId	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	vcCrewChannelName	        VARCHAR(50)		REFERENCES tbCrewChannel(vcCrewChannelName) NOT NULL,
	vcCrewChannelDate	            DATE		                NULL
);

-- 크루배틀참여팀리스트
CREATE TABLE tbCrewBattleParticipant (
	vcCrewChannelName	        VARCHAR(50)		REFERENCES tbCrewChannel(vcCrewChannelName) NOT NULL,
	iCrewBattleNo               	        NUMBER		        REFERENCES tbCrewBattle(iCrewBattleNo) NOT NULL,
	nCrewBattleCategory	            NUMBER		        NOT NULL
);


-- 12. 댓글
CREATE TABLE tbComment (
	nCommentSeq			NUMBER				PRIMARY KEY, 
	vcCrewMemberId			VARCHAR(50)		PREFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	dtRegDate					DATE						NOT NULL,
	nCrewMainCategory		NUMBER				NOT NULL,
	nCrewSubCategory		NUMBER				NOT NULL, 
	vcContent					VARCHAR(2000) 	NOT NULL
);	

-- 13. 모임유형
CREATE TABLE tbCrewType (
	nCrewTypeSeq			NUMBER				PRIMARY KEY,
	vcCrewChannelName	VARCAHR(50)			NULL,
	vcCrewTypeCategory	VARCHAR(100)		NOT NULL,
	vcCrewTypeField			VARCHAR(100)		NOT NULL,
	vcCrewTypeDetail		VARCHAR(100)		NOT NULL
);

-- 14. 참가 희망자 리스트(장기크루)
CREATE TABLE tbApplyMemberList (
	nCrewApplySeq			NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 15. 참가 확정자 리스트(단기크루, 장기크루)
CREATE TABLE tbConfirmMemberList (
	nCrewConfirmSeq		NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		PEFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 16. 대화목록리스트
CREATE TABLE tbMessengerList (
	nMngListSeq				NUMBER				PRIMARY KEY,
	nCrewMainCategory	NUMBER				NOT NULL,
	nCrewSubCategory		NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 17. 대화메신저
CREATE TABLE tbMessenger (
	nMngSeq				NUMBER				PRIMARY KEY,
	vcFromMemberID		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	-- vcToMemberID			VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nMngListSeq				NUMBER				REFERENCES tbMessengerList(iMngListSeq) ON DELETE CASCADE NOT NULL,
	vcMngContent			VARCHAR(1000)		NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 18. 대화참가자리스트
CREATE TABLE tbMessengerMembers (
	nMngMemberSeq		NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nMngListSeq				NUMBER				REFERENCES tbMessengerList(nMngListSeq) ON DELETE CASCADE NOT NULL,
);

-- 19. 공유 수
CREATE TABLE tbShare (
	nShareSeq				NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 20. 좋아요/싫어요
CREATE TABLE tbGoodBad (
	nGoodBadSeq			NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	nGood					NUMBER				NOT NULL,
	nBad						NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 21. 조회수
CREATE TABLE tbHit (
	nHitSeq					NUMBER				PRIMARY KEY,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	nHitCnt					NUMBER				NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 22. 첨부파일 (중복인듯)
CREATE TABLE tbImage (
	nImageSeq				NUMBER				PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	nCrewSubCategory		NUMBER				NOT NULL,
	vcImagePath				VARCHAR(2000)		NOT NULL,
	vcImgaeName			VARCHAR(100)		NOT NULL,
	dtRegDate				DATE					NOT NULL
);

-- 23. 위치
CREATE TABLE tbLocation (
	nLocationSeq			NUMBER				PRIMARY KEY,
	nCrewMeetNo			NUMBER				NOT NULL,
	nCrewMainCategory	NUMBER				NOT NULL,
	vcLocationDetail			VARCHAR(2000)		NOT NULL,
	nLatitude		 			NUMBER				NOT NULL,
	nLongitude				NUMBER				NOT NULL,
);

-- 24. 공지
CREATE TABLE tbNotice (
	nNoticeSeq				NUMBER			PRIMARY KEY,
	vcCrewMemberId		VARCHAR(50)	REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo			NUMBER			NOT NULL,
	nCrewMainCategory	NUMBER			NOT NULL,
	dtRegDate				DATE				NOT NULL
);
