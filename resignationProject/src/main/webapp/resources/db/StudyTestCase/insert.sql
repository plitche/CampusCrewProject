alter sequence tbStudy_Seq increment by -32
select tbStudy_Seq.nextval from dual


-- 회원 insert
select * from tbMember
delete from tbMember
INSERT INTO tbMember VALUES ('plitche', 'plitche', '권용수', '플리체', '서울시 마포구', '010-7721-3032', '30', 'INFJ', '8시', '10시', '잘부탁드립니다.', '남자', NULL, NULL);
INSERT INTO tbMember VALUES ('ferdy', 'ferdy', '권용수1', '펄디', '서울시 마포구', '010-7721-3031', '30', 'INFJ', '8시', '10시', '잘부탁드립니다', '남자', NULL, NULL);

-- 스터디 insert
select * from tbStudy
delete from tbStudy
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '뷰js', '뷰js 공부해용!', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '리액트', '리액트 공부해용!', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '레디스', '레디스 공부해용!', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '엘라스틱서치', '엘라스틱서치 공부해용!', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '톰켓', '톰켓 공부해용!', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, 'nginx', 'nginx', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '서버', '서버 공부해용!', '공부합시다' );

-- 스터디 필요 참가자 insert (nPostReferType 1=스터디)
select * from tbNeedParticipants
delete from tbNeedParticipants
INSERT INTO tbNeedParticipants VALUES (1, 'ferdy', 1, 1, SYSDATE, '마케팅');
INSERT INTO tbNeedParticipants VALUES (2, 'ferdy', 1, 1, SYSDATE, '프론트엔드');
INSERT INTO tbNeedParticipants VALUES (3, NULL, 1, 1, SYSDATE, '프론트엔드');
INSERT INTO tbNeedParticipants VALUES (4, NULL, 1, 1, SYSDATE, '백엔드');
INSERT INTO tbNeedParticipants VALUES (5, NULL, 1, 1, SYSDATE, '백엔드');

-- 스터디 조회수 insert
select * from tbHit
delete from tbHit
INSERT INTO tbHit VALUES (tbShare_Seq.nextVal, 1, 1, 120);


-- 스터디 참가 희망자 insert

update TBNEEDPARTICIPANTS set vcNeedParticipantsId = 'ferdy' where iNeedParticipantsNo = 1



select * from tbMember

		SELECT vcPosition, Count(*)
		FROM tbNeedParticipants
		WHERE nPostReferNo = 7
			and nPostReferType = 1
			and vcNeedParticipantsId IS NULL
		GROUP BY vcPosition
		ORDER BY vcPosition

		SELECT vcPosition, Count(*)
		FROM tbNeedParticipants
		WHERE nPostReferNo = 1
			and nPostReferType = 1
		GROUP BY vcPosition
		ORDER BY vcPosition

		SELECT *
		FROM tbStudy s join tbMember m
			on s.vcStudyMakerId = m.vcMemberId
			join tbHit h
			on s.iStudyNo = h.nPostReferNo
		WHERE h.nPostReferType = 1
			and s.iStudyNo = 7

		SELECT *
		FROM tbStudy s join tbMember m
			on s.vcStudyMakerId = m.vcMemberId 
		ORDER BY s.dtRegDate DESC
		and istudyNo 

		SELECT *
		FROM tbStudy s join tbMember m
			on s.vcStudyMakerId = m.vcMemberId
			join tbHit h
			on s.iStudyNo = h.nPostReferNo
		WHERE h.nPostReferType = 1
			and s.iStudyNo = 1

