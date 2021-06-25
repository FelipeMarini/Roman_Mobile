USE Roman_Projects
GO

INSERT INTO TiposUsuarios (tituloTipoUsuario)
VALUES		('admnistrador'),
			('professor')
GO

INSERT INTO Equipes (tituloEquipe)
VALUES		('Admnistra��o'),
			('Desenvolvimento'),
			('Redes'),
			('Multim�dias')
GO

INSERT INTO Usuarios (idTipoUsuario,idEquipe,nomeUsuario,email,senha)
VALUES		(1, 1, 'Felipe', 'felipe@adm.com', 'felipe123'),
			(1, 1, 'Tsukamoto', 'tsuka@adm.com', 'tsuka456'),
			(2, 2, 'Saulo', 'saulo@email.com', 'saulo123'),
			(2, 3, 'Caique', 'caique@email.com', 'caique456'),
			(2, 4, 'Odirlei', 'odirlei@email.com', 'odirlei789')
GO

INSERT INTO Temas (descricaoTema)
VALUES		('Front End'),
			('Back End'),
			('Banco de Dados'),
			('DevOps')
GO

INSERT INTO Projetos (idTema,idUsuario,descricaoProjeto)
VALUES		(1, 1, 'Desenvolvendo uma aplica��o com React JS'),
			(1, 2, 'Desenvolvendo um mobile app com React Native'),
			(2, 3, 'Autentica��o e Autoriza��o com JWT'),
			(2, 4, 'Orienta��o a Objetos com a linguagem C#'),
			(3, 5, 'Aprendendo a linguagem SQL'),
			(3, 3, 'Como utilizar Joins no SQL Server para visualiza��o de tabelas'),
			(4, 4, 'Como melhorar sua aplica��o com propriedades da nuvem'),
			(4, 5, 'Entendendo o Microsoft Azure')