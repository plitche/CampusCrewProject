-- 회원 insert
INSERT INTO tbMember VALUES ('plitche', 'plitche', '권용수', '플리체', '서울시 마포구', '010-7721-3032', '30', 'INFJ', '8시', '10시', '잘부탁드립니다.', '남자', NULL, NULL);

-- 스터디 insert
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '뷰js', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '리액트', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '레디스', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '엘라스틱서치', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '톰켓', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, 'nginx', '공부합시다' );
INSERT INTO tbStudy VALUES (tbStudy_Seq.nextVal, 'plitche', '서울', '오후 6시~8시', SYSDATE, SYSDATE, SYSDATE,  0, 0, '서버', '공부합시다' );
