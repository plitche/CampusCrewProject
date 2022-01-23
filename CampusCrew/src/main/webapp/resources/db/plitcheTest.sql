-- 회원 정보
INSERT INTO tbCrewMemberInfo VALUES ('admin', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);

INSERT INTO tbCrewMemberInfo VALUES ('Plitche1', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);
INSERT INTO tbCrewMemberInfo VALUES ('Plitche2', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);
INSERT INTO tbCrewMemberInfo VALUES ('Plitche3', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);
INSERT INTO tbCrewMemberInfo VALUES ('Plitche4', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);

INSERT INTO tbCrewMemberInfo VALUES ('Plitche5', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);
INSERT INTO tbCrewMemberInfo VALUES ('Plitche6', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);
INSERT INTO tbCrewMemberInfo VALUES ('Plitche7', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);
INSERT INTO tbCrewMemberInfo VALUES ('Plitche8', 'plitche', '플리체', '서울 마포구', '010-7721-3032', 30,  'INFJ', 10, 20, '안녕하세요. 잘부탁드립니다.', 'kysu728@naver.com', '남', 'plitche.github.io', 'github.com/plitche', SYSDATE, SYSDATE, 0);

-- 장기 크루 정보
INSERT INTO tbCrewType VALUES (tbCrewType_Seq.nextval, NULL, '취미', '댄스', '브레이크댄스');

-- 크루 채널 정보
INSERT INTO tbCrewChannel VALUES ('크루채널1', 'Plitche1', 1, '브레이크댄스 그룹1이에요.', NULL, NULL);
INSERT INTO tbCrewChannel VALUES ('크루채널2', 'Plitche5', 1, '브레이크댄스 그룹2이에요.', NULL, NULL);

-- 크루배틀 정보
INSERT INTO tbCrewBattle VALUES (tbCrewBattle_Seq.nextval, 'Plitche1', 1, '우리끼리 댄스배틀1', '그냥 놀자', 2, '2021.02.01 1시', '2021.02.07 1시', '우리끼리 놀기 심심한데 같이 놀아요.', SYSDATE);

INSERT INTO tbManagerBattle VALUES (tbManagerBattle_Seq.nextval, 'admin', 1, '댄스 배틀1', '누가 최강자인지?', 4, '2021.12.31 3시', '2022.01.15 3시', '댄스 배틀할꺼에요!!', SYSDATE);
INSERT INTO tbManagerBattle VALUES (tbManagerBattle_Seq.nextval, 'admin', 1, '댄스 배틀2', '우리가 더 쎄', 2, '2022.01.01 12시', '2022.01.02 12시', '댄스 배틀할꺼에요!!', SYSDATE);

-- 참가자 정보 insert
INSERT INTO tbBattleApplyCrewList VALUES (tbBattleApplyCrewList_Seq.nextval, '크루채널1', 'Plitche5', 1, 3, SYSDATE);
INSERT INTO tbBattleApplyCrewList VALUES (tbBattleApplyCrewList_Seq.nextval, '크루채널1', 'Plitche5', 1, 4, SYSDATE);
INSERT INTO tbBattleApplyCrewList VALUES (tbBattleApplyCrewList_Seq.nextval, '크루채널1', 'Plitche6', 1, 3, SYSDATE);
INSERT INTO tbBattleApplyCrewList VALUES (tbBattleApplyCrewList_Seq.nextval, '크루채널1', 'Plitche7', 1, 3, SYSDATE);



-- 필터 정보 insert
INSERT INTO tbFilterTab VALUES (tbFilterTab_Seq.nextVal, '투데이', 1, SYSDATE);
INSERT INTO tbFilterTab VALUES (tbFilterTab_Seq.nextVal, '내주변', 1, SYSDATE);
INSERT INTO tbFilterTab VALUES (tbFilterTab_Seq.nextVal, '단기크루', 1, SYSDATE);
INSERT INTO tbFilterTab VALUES (tbFilterTab_Seq.nextVal, '장기크루', 1, SYSDATE);
INSERT INTO tbFilterTab VALUES (tbFilterTab_Seq.nextVal, '크루활동', 1, SYSDATE);



select * from tbCrewChannel

select * from tbCrewBattle
select * from tbBattleApplyCrewList

select 1 
from dual 
where sysdate < to_char(sysdate, 'YYYYMMDD')

		SELECT b.*
		FROM (
			SELECT a.*, ROWNUM rn
			FROM (
				SELECT *
				FROM tbCrewBattle cb
				inner join tbBattleApplyCrewList ap
				on cb.nCrewBattleSeq = ap.nCrewMeetNo
				where ap.nCrewMeetCategory = 3
				
				UNION ALL
				
				SELECT *
				FROM tbManagerBattle mb
				inner join tbBattleApplyCrewList ap
				on mb.nManagerBattleSeq = ap.nCrewMeetNo
				where ap.nCrewMeetCategory = 4
				) a
			) b

			
			
		SELECT *
		FROM tbCrewBattle cb
		WHERE cb.nCrewBattleSeq =1 
		AND cb.vcCrewBattleLimit > (
														SELECT COUNT(*) AS applyCount
														FROM tbBattleApplyCrewList ba
														WHERE ba.nCrewMeetCategory = 3
														AND ba.nBattleApplySeq = 1
													)
													
													
		SELECT
						(SELECT COUNT(*) 
						FROM tbBattleApplyCrewList ba
						WHERE ba.nCrewMeetCategory = 3
						AND ba.nBattleApplySeq = 1) AS applyCount
		FROM tbCrewBattle cb
		WHERE cb.nCrewBattleSeq = 1 
		
		
		SELECT b.*
		FROM (
			SELECT a.*, ROWNUM rn
			FROM (
				SELECT
				vcCrewBattleTitle
				, vcCrewBattleLimit
				, (
					SELECT COUNT(*)
					FROM tbBattleApplyCrewList ba
					WHERE ba.nCrewMeetCategory = 3
					AND ba.nBattleApplySeq = cb.nCrewBattleSeq
				) AS applyCount
				, '크루활동' as tableInfo
				FROM tbCrewBattle cb
				 
				UNION ALL
				
				SELECT   
				vcManagerBattleTitle
				, vcManagerBattleLimit
				, (
					SELECT COUNT(*)
					FROM tbBattleApplyCrewList ba
					WHERE ba.nCrewMeetCategory = 4
					AND ba.nBattleApplySeq = mb.nManagerBattleSeq
				) AS applyCount
				, '크루활동' as tableInfo
				FROM tbManagerBattle mb
			) a
		) b
		WHERE b.rn <= 30
		
		
		
		
		
		
		