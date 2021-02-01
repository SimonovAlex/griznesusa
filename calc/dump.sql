-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: calc_db
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acceptseller`
--

DROP TABLE IF EXISTS `acceptseller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `acceptseller` (
  `seller` varchar(255) NOT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acceptseller`
--

LOCK TABLES `acceptseller` WRITE;
/*!40000 ALTER TABLE `acceptseller` DISABLE KEYS */;
INSERT INTO `acceptseller` VALUES ('Aaa Missouri','Ralf'),('Aaa Rhode Island','Ralf'),('Aaa So California','Ralf'),('Aaa Texas','Ralf'),('fff','Ralf'),('Aaa Missouri','expert'),('Aaa Rhode Island','expert'),('Aaa So California','expert'),('Aaa Texas','expert'),('fff','expert');
/*!40000 ALTER TABLE `acceptseller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `citiesfordelivery`
--

DROP TABLE IF EXISTS `citiesfordelivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `citiesfordelivery` (
  `city` varchar(255) NOT NULL,
  `cost` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citiesfordelivery`
--

LOCK TABLES `citiesfordelivery` WRITE;
/*!40000 ALTER TABLE `citiesfordelivery` DISABLE KEYS */;
INSERT INTO `citiesfordelivery` VALUES ('Odessa',40,'Ralf'),('Kiev',150,'Ralf'),('Odessa',40,'expert'),('Kiev',150,'expert');
/*!40000 ALTER TABLE `citiesfordelivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `copartbetsinrealtime`
--

DROP TABLE IF EXISTS `copartbetsinrealtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `copartbetsinrealtime` (
  `min` float NOT NULL,
  `max` float NOT NULL,
  `bet` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `copartbetsinrealtime`
--

LOCK TABLES `copartbetsinrealtime` WRITE;
/*!40000 ALTER TABLE `copartbetsinrealtime` DISABLE KEYS */;
INSERT INTO `copartbetsinrealtime` VALUES (0,49.99,0,'Ralf'),(50,199.99,48,'Ralf'),(200,399.99,179,'Ralf'),(0,49.99,0,'expert'),(50,199.99,48,'expert'),(200,399.99,179,'expert');
/*!40000 ALTER TABLE `copartbetsinrealtime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `copartcitiesandports`
--

DROP TABLE IF EXISTS `copartcitiesandports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `copartcitiesandports` (
  `city` varchar(255) NOT NULL,
  `savannah` int(11) NOT NULL,
  `ca` int(11) NOT NULL,
  `ny` int(11) NOT NULL,
  `tx` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `copartcitiesandports`
--

LOCK TABLES `copartcitiesandports` WRITE;
/*!40000 ALTER TABLE `copartcitiesandports` DISABLE KEYS */;
INSERT INTO `copartcitiesandports` VALUES ('ABILENE - TX',555,-1,-1,1412,'Ralf'),('ALBANY - NY',-1,-1,1212,-1,'Ralf'),('ALTOONA - PA',-1,1612,-1,1470,'Ralf'),('qwe - ewq',-1,-1,333,777,'Ralf'),('ABILENE - TX',555,-1,-1,1412,'expert'),('ALBANY - NY',-1,-1,1212,-1,'expert'),('ALTOONA - PA',-1,1612,-1,1470,'expert'),('qwe - ewq',-1,-1,333,777,'expert');
/*!40000 ALTER TABLE `copartcitiesandports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `copartfinalbetrange`
--

DROP TABLE IF EXISTS `copartfinalbetrange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `copartfinalbetrange` (
  `min` float NOT NULL,
  `max` float NOT NULL,
  `fee_amount` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `feeAmountInPercent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `copartfinalbetrange`
--

LOCK TABLES `copartfinalbetrange` WRITE;
/*!40000 ALTER TABLE `copartfinalbetrange` DISABLE KEYS */;
INSERT INTO `copartfinalbetrange` VALUES (0.01,49.99,1,'Ralf',0),(50,99.99,25,'Ralf',0),(100,199.99,79,'Ralf',0),(0.01,49.99,1,'expert',0),(50,99.99,25,'expert',0),(100,199.99,79,'expert',0);
/*!40000 ALTER TABLE `copartfinalbetrange` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iaaibetsinrealtime`
--

DROP TABLE IF EXISTS `iaaibetsinrealtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `iaaibetsinrealtime` (
  `min` float NOT NULL,
  `max` float NOT NULL,
  `bet` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iaaibetsinrealtime`
--

LOCK TABLES `iaaibetsinrealtime` WRITE;
/*!40000 ALTER TABLE `iaaibetsinrealtime` DISABLE KEYS */;
INSERT INTO `iaaibetsinrealtime` VALUES (0,99.99,0,'Ralf'),(100,199.99,56,'Ralf'),(300,399.99,322,'Ralf'),(0,99.99,0,'expert'),(100,199.99,56,'expert'),(300,399.99,322,'expert');
/*!40000 ALTER TABLE `iaaibetsinrealtime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iaaicitiesandports`
--

DROP TABLE IF EXISTS `iaaicitiesandports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `iaaicitiesandports` (
  `city` varchar(255) NOT NULL,
  `savannah` int(11) NOT NULL,
  `ca` int(11) NOT NULL,
  `ny` int(11) NOT NULL,
  `tx` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iaaicitiesandports`
--

LOCK TABLES `iaaicitiesandports` WRITE;
/*!40000 ALTER TABLE `iaaicitiesandports` DISABLE KEYS */;
INSERT INTO `iaaicitiesandports` VALUES ('ABILENE - TX',-1,-1,-1,1412,'Ralf'),('ACE-PERRIS - CA',-1,-1,1212,-1,'Ralf'),('ACRON CANTON - OH',-1,1612,-1,1470,'Ralf'),('ABILENE - TX',-1,-1,-1,1412,'expert'),('ACE-PERRIS - CA',-1,-1,1212,-1,'expert'),('ACRON CANTON - OH',-1,1612,-1,1470,'expert');
/*!40000 ALTER TABLE `iaaicitiesandports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iaaifinalbetrange`
--

DROP TABLE IF EXISTS `iaaifinalbetrange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `iaaifinalbetrange` (
  `min` float NOT NULL,
  `max` float NOT NULL,
  `fee_amount` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL,
  `feeAmountInPercent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iaaifinalbetrange`
--

LOCK TABLES `iaaifinalbetrange` WRITE;
/*!40000 ALTER TABLE `iaaifinalbetrange` DISABLE KEYS */;
INSERT INTO `iaaifinalbetrange` VALUES (0.01,49.99,1,'Ralf',4),(50,199.99,1,'Ralf',5),(200,399.99,1,'Ralf',6),(0.01,49.99,1,'expert',4),(50,199.99,1,'expert',5),(200,399.99,1,'expert',6);
/*!40000 ALTER TABLE `iaaifinalbetrange` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settings`
--

DROP TABLE IF EXISTS `settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `settings` (
  `certificate_constant` int(11) NOT NULL,
  `port_odessa` int(11) NOT NULL,
  `griznes` int(11) NOT NULL,
  `copart_constant` int(11) NOT NULL,
  `IAAI_constant` int(11) NOT NULL,
  `SUV_const` int(11) NOT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settings`
--

LOCK TABLES `settings` WRITE;
/*!40000 ALTER TABLE `settings` DISABLE KEYS */;
INSERT INTO `settings` VALUES (225,8000,1666,79,104,86,'Ralf'),(225,8000,1666,79,104,86,'expert');
/*!40000 ALTER TABLE `settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Ralf','$2b$10$te//5RvD1hwo.2aulECO.uAi8LfcPe8bzqToa/9en9oVpbXLKJNzS','admin'),('expert','$2b$10$ewP.545zfpIRPySMr/2jGe3HthXrVZIZXiq1/dwvKlbQnuEKhphA.','worker');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-18 16:13:21
