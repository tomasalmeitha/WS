-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 13-Jun-2023 às 20:05
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `nodepl06`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clube`
--

CREATE TABLE `clube` (
  `Id` int(11) NOT NULL,
  `NomeClube` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `clube`
--

INSERT INTO `clube` (`Id`, `NomeClube`) VALUES
(1, 'Blackburn'),
(2, 'Arsenal'),
(3, 'Liverpool');

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogador`
--

CREATE TABLE `jogador` (
  `Id` int(11) NOT NULL,
  `NomeJogador` varchar(100) DEFAULT NULL,
  `Clube` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `jogador`
--

INSERT INTO `jogador` (`Id`, `NomeJogador`, `Clube`) VALUES
(1, 'Félix Bilha', 3),
(2, 'Tristão Aço', 2),
(3, 'Badjoras Fixe', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `resultado`
--

CREATE TABLE `resultado` (
  `Id` int(11) NOT NULL,
  `HomeClub` int(11) DEFAULT NULL,
  `AwayClub` int(11) DEFAULT NULL,
  `Score` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `resultado`
--

INSERT INTO `resultado` (`Id`, `HomeClub`, `AwayClub`, `Score`) VALUES
(1, 1, 1, '1'),
(2, 2, 3, '0'),
(3, 1, 3, '1');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clube`
--
ALTER TABLE `clube`
  ADD PRIMARY KEY (`Id`);

--
-- Índices para tabela `jogador`
--
ALTER TABLE `jogador`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Clube` (`Clube`);

--
-- Índices para tabela `resultado`
--
ALTER TABLE `resultado`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `HomeClub` (`HomeClub`),
  ADD KEY `AwayClub` (`AwayClub`);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `jogador`
--
ALTER TABLE `jogador`
  ADD CONSTRAINT `jogador_ibfk_1` FOREIGN KEY (`Clube`) REFERENCES `clube` (`Id`);

--
-- Limitadores para a tabela `resultado`
--
ALTER TABLE `resultado`
  ADD CONSTRAINT `resultado_ibfk_1` FOREIGN KEY (`HomeClub`) REFERENCES `clube` (`Id`),
  ADD CONSTRAINT `resultado_ibfk_2` FOREIGN KEY (`AwayClub`) REFERENCES `clube` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
