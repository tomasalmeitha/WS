-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2023 at 12:48 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodepl06`
--

-- --------------------------------------------------------

--
-- Table structure for table `clube`
--

CREATE TABLE `clube` (
  `Id` int(11) NOT NULL,
  `NomeClube` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clube`
--

INSERT INTO `clube` (`Id`, `NomeClube`) VALUES
(1, 'Blackburn'),
(2, 'Arsenal'),
(3, 'Liverpool');

-- --------------------------------------------------------

--
-- Table structure for table `jogador`
--

CREATE TABLE `jogador` (
  `Id` int(11) NOT NULL,
  `NomeJogador` varchar(100) DEFAULT NULL,
  `Clube` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jogador`
--

INSERT INTO `jogador` (`Id`, `NomeJogador`, `Clube`) VALUES
(1, 'Félix Bilha', 3),
(2, 'Tristão Aço', 2),
(3, 'Badjoras Fixe', 1);

-- --------------------------------------------------------

--
-- Table structure for table `resultado`
--

CREATE TABLE `resultado` (
  `Id` int(11) NOT NULL,
  `HomeClub` int(11) DEFAULT NULL,
  `AwayClub` int(11) DEFAULT NULL,
  `Score` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `resultado`
--

INSERT INTO `resultado` (`Id`, `HomeClub`, `AwayClub`, `Score`) VALUES
(1, 2, 1, '1'),
(2, 1, 2, '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clube`
--
ALTER TABLE `clube`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `jogador`
--
ALTER TABLE `jogador`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Clube` (`Clube`);

--
-- Indexes for table `resultado`
--
ALTER TABLE `resultado`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `HomeClub` (`HomeClub`),
  ADD KEY `AwayClub` (`AwayClub`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jogador`
--
ALTER TABLE `jogador`
  ADD CONSTRAINT `jogador_ibfk_1` FOREIGN KEY (`Clube`) REFERENCES `clube` (`Id`);

--
-- Constraints for table `resultado`
--
ALTER TABLE `resultado`
  ADD CONSTRAINT `resultado_ibfk_1` FOREIGN KEY (`HomeClub`) REFERENCES `clube` (`Id`),
  ADD CONSTRAINT `resultado_ibfk_2` FOREIGN KEY (`AwayClub`) REFERENCES `clube` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
