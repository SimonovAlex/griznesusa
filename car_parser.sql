-- MySQL dump 10.10
--
-- Host: localhost    Database: car_parser
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car_lots`
--

DROP TABLE IF EXISTS `car_lots`;
CREATE TABLE `car_lots` (
  `id` int(11) auto_increment,
  `wave` int(11),
  `lotNumber` int(11),
  `mark` varchar(255),
  `model` varchar(255),
  `year` int(11),
  `marketValue` int(11),
  `odometer` int(11),
  `engine` varchar(255),
  `numberOfCylinders` int(11),
  `currency` varchar(255),
  `price` int(11),
  `carImage` varchar(255),
  `transmission` varchar(255),
  `body_type` varchar(255),
  `driveUnit` varchar(255),
  `fuelType` varchar(255),
  `status` varchar(255),
  `auction` varchar(255),
  PRIMARY KEY (`id`)
)/*! engine=InnoDB */;

--
-- Dumping data for table `car_lots`
--


/*!40000 ALTER TABLE `car_lots` DISABLE KEYS */;
LOCK TABLES `car_lots` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `car_lots` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

