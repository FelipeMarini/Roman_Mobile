USE Roman_Projects
GO

SELECT * FROM TiposUsuarios

SELECT * FROM Equipes

SELECT * FROM Usuarios

SELECT * FROM Temas

SELECT * FROM Projetos

-- seleciona os dados dos usu�rios mostrando o tipo de usu�rio 
-- e a equipe da qual o usu�rio faz parte
SELECT nomeUsuario AS [Nome de Usu�rio], tituloTipousuario AS T�tulo, 
tituloEquipe AS Equipe, email AS Email
FROM Usuarios AS U
INNER JOIN TiposUsuarios AS T
ON U.idTipoUsuario = T.idTipoUsuario
INNER JOIN Equipes E
ON U.idEquipe = E.idEquipe


-- seleciona os dados dos projetos, mostrando o t�tulo do tema de cada projeto
-- assim como o nome do usu�rio que cadastrou o projeto no Roman mobile app
SELECT idProjeto [N�mero do Projeto], descricaoTema Tema, nomeUsuario [Nome de Usu�rio],
descricaoProjeto [Descri��o do Projeto] 
FROM Projetos P
INNER JOIN Temas T
ON P.idTema = T.idTema
INNER JOIN Usuarios U
ON P.idUsuario = U.idUsuario
