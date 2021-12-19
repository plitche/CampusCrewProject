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
