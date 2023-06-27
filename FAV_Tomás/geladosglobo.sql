-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27-Jun-2023 às 17:40
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `geladosglobo`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `armazem`
--

CREATE TABLE `armazem` (
  `Id` int(11) NOT NULL,
  `Nome` varchar(255) DEFAULT NULL,
  `Localidade` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `armazem`
--

INSERT INTO `armazem` (`Id`, `Nome`, `Localidade`) VALUES
(1, 'Armazem 01', 'Valongo');

-- --------------------------------------------------------

--
-- Estrutura da tabela `gelado`
--

CREATE TABLE `gelado` (
  `Id` int(11) NOT NULL,
  `Descricao` varchar(255) DEFAULT NULL,
  `Valor` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `gelado`
--

INSERT INTO `gelado` (`Id`, `Descricao`, `Valor`) VALUES
(3, 'Conegel', 2.15),
(4, 'Solero', 2.35),
(5, 'Magnum', 2.25),
(6, 'Cornetto', 1.25),
(7, 'Epá', 1.00),
(8, 'Calipo', 1.10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `stock`
--

CREATE TABLE `stock` (
  `Id` int(11) NOT NULL,
  `GeladoId` int(11) DEFAULT NULL,
  `ArmazemId` int(11) DEFAULT NULL,
  `UnidadesInicial` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `stock`
--

INSERT INTO `stock` (`Id`, `GeladoId`, `ArmazemId`, `UnidadesInicial`) VALUES
(3, 3, 1, 150),
(4, 4, 1, 100),
(5, 5, 1, 80),
(6, 6, 1, 40),
(7, 7, 1, 80),
(8, 8, 1, 90);

-- --------------------------------------------------------

--
-- Estrutura da tabela `venda`
--

CREATE TABLE `venda` (
  `Id` int(11) NOT NULL,
  `GeladoId` int(11) DEFAULT NULL,
  `Quantidade` int(11) DEFAULT NULL,
  `DataVenda` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `venda`
--

INSERT INTO `venda` (`Id`, `GeladoId`, `Quantidade`, `DataVenda`) VALUES
(4, 3, 10, '2023-06-22'),
(5, 4, 20, '2023-05-12'),
(6, 5, 30, '2023-04-07'),
(7, 6, 30, '2023-04-23'),
(8, 7, 20, '2023-04-23'),
(9, 8, 10, '2023-03-20');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `armazem`
--
ALTER TABLE `armazem`
  ADD PRIMARY KEY (`Id`);

--
-- Índices para tabela `gelado`
--
ALTER TABLE `gelado`
  ADD PRIMARY KEY (`Id`);

--
-- Índices para tabela `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `GeladoId` (`GeladoId`),
  ADD KEY `ArmazemId` (`ArmazemId`);

--
-- Índices para tabela `venda`
--
ALTER TABLE `venda`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `GeladoId` (`GeladoId`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `armazem`
--
ALTER TABLE `armazem`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `gelado`
--
ALTER TABLE `gelado`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `stock`
--
ALTER TABLE `stock`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `venda`
--
ALTER TABLE `venda`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`GeladoId`) REFERENCES `gelado` (`Id`),
  ADD CONSTRAINT `stock_ibfk_2` FOREIGN KEY (`ArmazemId`) REFERENCES `armazem` (`Id`);

--
-- Limitadores para a tabela `venda`
--
ALTER TABLE `venda`
  ADD CONSTRAINT `venda_ibfk_1` FOREIGN KEY (`GeladoId`) REFERENCES `gelado` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
