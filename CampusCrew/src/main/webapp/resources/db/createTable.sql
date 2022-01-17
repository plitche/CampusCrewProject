-- 총 테이블의 개수는 30개 - 2021.12.18일 기준
-- 추가로 생성돌 가능성 (O)
-- ON DELETE CASCADE 추가로 고려해야 함


CREATE TABLE tbCrewMemberInfo (
	vcCrewMemberId						VARCHAR(50)		PRIMARY KEY,
	vcCrewMemberPw	                VARCHAR(50)	    NULL,
	vcCrewMemberNick	            	VARCHAR(50)		NULL,
	vcCrewMemberAddress	        	VARCHAR(100)		NULL,
	vcCrewMemberPhone	        	VARCHAR(100)		NULL,
	vcCrewMemberAge	            	VARCHAR(100)		NULL,
	vcCrewMemberMBTI	            VARCHAR(100)		NULL,
	vcCrewMemberFreeTime1	    	VARCHAR(100)		NULL,
	vcCrewMemberFreeTime2   		VARCHAR(100)		NULL,
	vcCrewMemberIntroduce	   	 	VARCHAR(100)		NULL,
	vcCrewMemberEmail           		VARCHAR(100)		NULL,
	vcCrewMemberGender	        	VARCHAR(100)		NULL,
	vcCrewMemberSite1              	VARCHAR(100)		NULL,
    vcCrewMemberSite2           		VARCHAR(100)		NULL,
	dtCrewMemberJoinDate       		DATE 		        	NULL,
	dtCrewMemberLastLogin      		DATE		        		NULL,
	nCrewMemberStatus	        	NUMBER       			NULL
);


CREATE TABLE tbCrewType (
	nCrewTypeSeq						NUMBER				PRIMARY KEY,
	vcCrewChannelName				VARCHAR(50)		NULL,
	vcCrewTypeCategory				VARCHAR(100)		NOT NULL,
	vcCrewTypeField						VARCHAR(100)		NOT NULL,
	vcCrewTypeDetail					VARCHAR(100)		NOT NULL
);


CREATE TABLE tbCrewChannel (
	vcCrewChannelName	       		VARCHAR(50)		PRIMARY KEY,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                   	 	NUMBER		        REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
	vcCrewChannelIntroduce	   		VARCHAR(1000)		NULL,
	vcCrewChannelLink1            	VARCHAR(100)		NULL,
	vcCrewChannelLink2	        	VARCHAR(100)		NULL
);


CREATE TABLE tbTag (
	nCrewMeetTypeSeq	        		NUMBER		        PRIMARY KEY,
    vcCrewMemberId              		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                		NUMBER		        NOT NULL,
	nCrewMainCategory	        		NUMBER		        NOT NULL,
	nCrewSubCategory	        		NUMBER		        NOT NULL,
	Tag1	                    				VARCHAR(30)		NOT NULL,
	Tag2	                    				VARCHAR(30)		NULL,
	Tag3	                    				VARCHAR(30)		NULL,
	Tag4	                    				VARCHAR(30)		NULL,
	Tag5	                    				VARCHAR(30)		NULL
);


CREATE TABLE tbOneDayCrew (
	nOneDaySeq	                    	NUMBER		        PRIMARY KEY,
	vcCrewMemberId   	           		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                   		NUMBER              	REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
    vcCrewChannelName        		VARCHAR(50)       	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcOneDayName	                	VARCHAR(100)		NULL,
	nOneDayLimit                   		NUMBER		        NULL,
	vcOneDayGoal	                	VARCHAR(100)		NULL,
	vcOneDayMeetLoc	            	VARCHAR(300)		NULL,
    vcOneDayMeetIntroduce  			VARCHAR(1000)		NULL,
	dtOneDayMeetCreate       		DATE		        		NULL,
	dtOneDayMeetDate          		DATE                		NULL,
	nOneDayMeetCreateCnt   		NUMBER		        NULL
);


CREATE TABLE tbLongCrew (
	nLongCrewSeq	                	NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                   		NUMBER              	REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
    vcCrewChannelName            	VARCHAR(50)       	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcLongCrewName	                VARCHAR(50)		NOT NULL,
	vcLongCrewLimit	                	VARCHAR(50)		NOT NULL,
	vcLongCrewGoal	                	VARCHAR(50)		NOT NULL,
	vcLongCrewMeetLoc	            VARCHAR(100)		NULL,
	vcLongCrewIntroduce	        	VARCHAR(1000)		NULL,
	dtLongCrewCreate	            	DATE		        		NOT NULL,
	dtLongCrewMeetDate	        	DATE                		NULL,
	nLongCrewMeetCreateCnt   		NUMBER		        NULL
);


CREATE TABLE tbCrewBattle (
	nCrewBattleSeq                 		NUMBER		        PRIMARY KEY,
	vcCrewMemberId	               		VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                   		NUMBER              	REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
	vcCrewBattleTitle	            		VARCHAR(50)		NOT NULL,
	vcCrewBattleChallenge         	VARCHAR(500)		NOT NULL,
	vcCrewBattleLimit	           		NUMBER				NOT NULL,
	vcCrewBattleSchedule1        		VARCHAR(50)		NULL,
	vcCrewBattleSchedule2	        	VARCHAR(50)		NULL,
	vcCrewBattleContent	        	VARCHAR(1000)		NULL,
	dtCrewBattleCreate	            	DATE		        		NOT NULL
);


CREATE TABLE tbManagerBattle (
	nManagerBattleSeq	            	NUMBER		        PRIMARY KEY,
    vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewTypeSeq                    	NUMBER              	REFERENCES tbCrewType(nCrewTypeSeq) ON DELETE CASCADE NOT NULL,
	vcManagerBattleTitle	        	VARCHAR(100)		NOT NULL,
	vcManagerBattleChallenge		VARCHAR(50)		NOT NULL,
	vcManagerBattleLimit	        	NUMBER				NOT NULL,
	vcManagerBattleSchedule1		VARCHAR(20)		NULL,
	vcManagerBattleSchedule2		VARCHAR(20)		NULL,
	vcManagerBattleContent	    	VARCHAR(1000)		NULL,
	dtManagerBattleCreate	        	DATE		        		NULL
);


CREATE TABLE tbChallengeFeed (
	nChallengeFeedSeq               	NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                    	NUMBER		        NOT NULL,
	nCrewMeetCategory	            	NUMBER		        NOT NULL,
	vcChallengeFeedCreate	        	VARCHAR(50)		NOT NULL
);


CREATE TABLE tbAttachment (
	nAttachmentSeq	                	NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                    	NUMBER		        NOT NULL,
	nCrewMainCategory              	NUMBER		        NOT NULL,
	nCrewSubCategory	            	NUMBER		        NOT NULL,
	vcFilename	                    		VARCHAR(50)		NOT NULL,
	vcOrgFilename	                	VARCHAR(100)		NULL,
	vcFilePath	                    		VARCHAR(100)		NULL
);


CREATE TABLE tbInterestCrewMeet (
	nInterestCrewSeq                		NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                	VARCHAR(50)	    REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	nCrewMeetNo	                    	NUMBER		        NOT NULL,
	nCrewMeetCategory              	NUMBER		        NOT NULL,
	dtCrewMeetCreate	            	DATE		        		NULL
);


CREATE TABLE tbMannerBadge (
	nMannerBadgeSeq	                NUMBER		        PRIMARY KEY,
	vcGoodManner	                	NUMBER		        NULL,
	vcGoodAttitude	                	NUMBER		        NULL,
	vcKind	                        		NUMBER		        NULL,
	vcMoodMaker	                    	NUMBER		        NULL,
	vcLikeLeader	                		NUMBER		        NULL,
	vcLively	                    			NUMBER		        NULL,
	vcGoodEnergy	                		NUMBER		        NULL,
	vcMeetAgain	                    	NUMBER		        NULL,
	vcKeepPromise	                	NUMBER		        NULL
);

CREATE TABLE tbUserEvaluation (
	nUserEvaluationSeq              	NUMBER		        PRIMARY KEY,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId2	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nMannerBadgeSeq                	NUMBER              	REFERENCES tbMannerBadge(nMannerBadgeSeq) ON DELETE CASCADE NOT NULL,
	vcScore	                        		VARCHAR(10)		NULL,
	vcReview	                    		VARCHAR(300)		NULL,
	nCrewMeetNo	                    	NUMBER		        NOT NULL,
	nCrewMeetCategory	            	NUMBER		        NOT NULL
);

CREATE TABLE tbCrewEvaluation (
	nCrewEvaluationSeq              	NUMBER		        PRIMARY KEY,
    vcCrewChannelName	        	VARCHAR(50)		REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nMannerBadgeSeq                	NUMBER              	REFERENCES tbMannerBadge(nMannerBadgeSeq) ON DELETE CASCADE NOT NULL,
	vcScore	                        		VARCHAR(10)		NULL,
	vcReview	                    		VARCHAR(300)		NULL,
	nCrewMeetNo	                    	NUMBER		        NOT NULL,
	nCrewMeetCategory	            	NUMBER		        NOT NULL
);

CREATE TABLE tbCrewMemberFollower (
	nCrewMemberFollowerSeq		NUMBER		        NOT NULL,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId2	                VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	dtFollowTime	                		DATE		       	 		NULL
);

CREATE TABLE tbCrewChannelFollower (
	nCrewChannelFollowerSeq		NUMBER		        NOT NULL,
    vcCrewChannelName            	VARCHAR(50)       	REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	dtFollowTime	                		DATE		        		NULL
);

CREATE TABLE tbCrewMemberList (
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
	vcCrewChannelName	        	VARCHAR(50)		REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewChannelDate	           	 	DATE		        		NOT NULL
);

CREATE TABLE tbBattleApplyCrewList (
	nBattleApplySeq	               		NUMBER		       	PRIMARY KEY,
	vcCrewChannelName            	VARCHAR(50)		REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewMeetNo	                    	NUMBER		        NOT NULL,
	nCrewMeetCategory	            	NUMBER		        NOT NULL,
    dtRegDate                       		DATE                		NOT NULL        
);

CREATE TABLE tbBattleConfirmCrewList (
	nBattleConfirmSeq	            	NUMBER		        PRIMARY KEY,
	vcCrewChannelName            	VARCHAR(50)		REFERENCES tbCrewChannel(vcCrewChannelName) ON DELETE CASCADE NOT NULL,
	vcCrewMemberId	                	VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) ON DELETE CASCADE NOT NULL,
    nCrewMeetNo	                    	NUMBER		        NOT NULL,
	nCrewMeetCategory	            	NUMBER		        NOT NULL,
    dtRegDate                       		DATE                		NOT NULL   
);

CREATE TABLE tbComment (
	nCommentSeq						NUMBER				PRIMARY KEY, 
	vcCrewMemberId						VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	dtRegDate								DATE						NOT NULL,
	nCrewMainCategory					NUMBER				NOT NULL,
	nCrewSubCategory					NUMBER				NOT NULL, 
	vcContent								VARCHAR(2000) 	NOT NULL
);	

CREATE TABLE tbApplyMemberList (
	nCrewApplySeq						NUMBER				PRIMARY KEY,
	vcCrewMemberId						VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo							NUMBER				NOT NULL,
	nCrewMainCategory					NUMBER				NOT NULL,
	dtRegDate								DATE						NOT NULL
);

CREATE TABLE tbConfirmMemberList (
	nCrewConfirmSeq					NUMBER				PRIMARY KEY,
	vcCrewMemberId						VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo							NUMBER				NOT NULL,
	nCrewMainCategory					NUMBER				NOT NULL,
	dtRegDate								DATE						NOT NULL
);

CREATE TABLE tbMessengerList (
	nMngListSeq							NUMBER				PRIMARY KEY,
	nCrewMainCategory					NUMBER				NOT NULL,
	nCrewSubCategory					NUMBER				NOT NULL,
	dtRegDate								DATE						NOT NULL
);

CREATE TABLE tbMessengerMembers (
	nMngMemberSeq					NUMBER				PRIMARY KEY,
	vcCrewMemberId						VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nMngListSeq							NUMBER				REFERENCES tbMessengerList(nMngListSeq) ON DELETE CASCADE NOT NULL
);

CREATE TABLE tbMessenger (
	nMngSeq								NUMBER				PRIMARY KEY,
	vcFromMemberID					VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nMngListSeq							NUMBER				REFERENCES tbMessengerList(nMngListSeq) ON DELETE CASCADE NOT NULL,
	vcMngContent						VARCHAR(1000)		NOT NULL,
	dtRegDate								DATE						NOT NULL
);

CREATE TABLE tbShare (
	nShareSeq								NUMBER				PRIMARY KEY,
	vcCrewMemberId						VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo							NUMBER				NOT NULL,
	nCrewMainCategory					NUMBER				NOT NULL,
	dtRegDate								DATE						NOT NULL
);

CREATE TABLE tbGoodBad (
	nGoodBadSeq							NUMBER				PRIMARY KEY,
	vcCrewMemberId						VARCHAR(50)		REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo							NUMBER				NOT NULL,
	nCrewMainCategory					NUMBER				NOT NULL,
	nGood									NUMBER				NOT NULL,
	nBad										NUMBER				NOT NULL,
	dtRegDate								DATE						NOT NULL
);

CREATE TABLE tbHit (
	nHitSeq									NUMBER				PRIMARY KEY,
	nCrewMeetNo							NUMBER				NOT NULL,
	nCrewMainCategory					NUMBER				NOT NULL,
	nHitCnt									NUMBER				NOT NULL,
	dtRegDate								DATE						NOT NULL
);

CREATE TABLE tbLocation (
	nLocationSeq							NUMBER				PRIMARY KEY,
	nCrewMeetNo							NUMBER				NOT NULL,
	nCrewMainCategory					NUMBER				NOT NULL,
	vcLocationDetail						VARCHAR(2000)		NOT NULL,
	nLatitude		 						NUMBER				NOT NULL,
	nLongitude								NUMBER				NOT NULL
);

CREATE TABLE tbNotice (
	nNoticeSeq								NUMBER			PRIMARY KEY,
	vcCrewMemberId						VARCHAR(50)	REFERENCES tbCrewMemberInfo(vcCrewMemberId) NOT NULL,
	nCrewMeetNo							NUMBER			NOT NULL,
	nCrewMainCategory					NUMBER			NOT NULL,
	dtRegDate								DATE					NOT NULL
);

CREATE TABLE tbFIlterTab (
	nFilterSeq								NUMBER				PRIMARY KEY,
	vcFilterName							VARCHAR(50)			NOT NULL,
	nStatus									NUMBER				NOT NULL,
	dtRegDate								DATE						NOT NULL
)