-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2023 at 06:33 PM
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
-- Database: `nodepl04`
--

-- --------------------------------------------------------

--
-- Table structure for table `aluno`
--

CREATE TABLE `aluno` (
  `Id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `BirthDate` date DEFAULT NULL,
  `Class` enum('A','B') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `aluno`
--

INSERT INTO `aluno` (`Id`, `Name`, `BirthDate`, `Class`) VALUES
(1, 'Justiano Justo', '2000-05-15', 'A'),
(2, 'Armando Bilha', '2001-09-22', 'B'),
(3, 'Michael Johnson', '1999-07-10', 'A'),
(4, 'Tarzan Taborda', '2002-03-03', 'B'),
(5, 'Nárcio Arsénio', '2003-11-28', 'A'),
(6, 'Tiago Borges', '1994-05-23', 'A'),
(7, 'Filipe Cunha', '1995-02-02', 'B'),
(8, 'Gaspar Borges', '2002-03-01', 'B'),
(9, 'Hélder Almeida', '1996-03-08', 'B'),
(10, 'José Teixeira', '2000-09-01', 'A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aluno`
--
ALTER TABLE `aluno`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
