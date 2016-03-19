-- MySQL dump 10.13  Distrib 5.7.11, for osx10.9 (x86_64)
--
-- Host: localhost    Database: travel
-- ------------------------------------------------------
-- Server version	5.7.11

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
-- Table structure for table `destinations`
--

DROP TABLE IF EXISTS `destinations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `destinations` (
  `place_id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`place_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destinations`
--

LOCK TABLES `destinations` WRITE;
/*!40000 ALTER TABLE `destinations` DISABLE KEYS */;
INSERT INTO `destinations` VALUES (13,'16th ave, Mosaic Steps, San Francisco','Mosaic Staircase','https://c1.staticflickr.com/3/2918/14300590697_a88421df8b.jpg'),(15,'1746 Ocean Front Walk, Santa Monica','Muscle Park','http://www.santamonica.com/wp-content/uploads/2015/04/Muscle-Beach_SondraStocker-1900.jpg'),(16,'10th ave, New York, NY 10001','Highline Urban Trailhead','https://farm9.staticflickr.com/8160/7627791820_5992c2640f_b.jpg'),(18,'123 Main St. Townville, ST 12388','Monica Gallery','http://www.tylershields.com/images/gallery/art_gallery.jpg'),(28,'Yellowstone, Wyoming','Lot of Bisons','http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2015/05/yellowstone_wyoming-449x300.jpg'),(29,'Seattle','Space Needle','http://purpleroofs.com/gay-travel-blog/wp-content/uploads/2012/10/pacific-science-museum-03-550x412.jpg');
/*!40000 ALTER TABLE `destinations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notes` (
  `note_id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) DEFAULT NULL,
  `comment` text,
  PRIMARY KEY (`note_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (1,1,'Visit local gallery'),(21,23,'Eat a lot of Food'),(22,23,'Go to Gym 123'),(23,23,'Sleep'),(24,23,'Swimming'),(27,23,'Pet tiger'),(28,23,'Pet Cat'),(29,23,'Go hiking'),(31,23,'Running'),(37,24,'Hiking'),(38,24,'Bird watching'),(42,18,'Go Shopping'),(52,16,'hiking'),(55,13,'Day 1: City Sightseeing 10:00-11:30am');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `places` (
  `place_id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`place_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
INSERT INTO `places` VALUES (1,'123 Main St. Townville, ST 12345','Home of Metallica',NULL),(2,'10th ave, New York, NY 10001','Highline Urban trailhead',NULL),(3,'16th ave, Mosaic Steps, San Francisco','A staircase designed by local artists',NULL),(4,NULL,NULL,'http://www.tylershields.com/images/gallery/art_gallery.jpg'),(5,'123 Main St. Townville, ST 12345','Home of Metallica','http://www.tylershields.com/images/gallery/art_gallery.jpg'),(6,'123 Main St. Townville, ST 12345','Home of Metallica','http://www.tylershields.com/images/gallery/art_gallery.jpg');
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-19 17:46:24
