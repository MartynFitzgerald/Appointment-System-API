/*=============================================================================
| Project Title:  Appointment System
|     Component:  DB
|
|    File Name:  Appointment-System-DB.sql  
|  Description:  This SQL file creates the schema of the database storing 
|                any data that's needed to run the appointment system.
*===========================================================================*/

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

DROP SCHEMA IF EXISTS `appointment_system` ;

CREATE SCHEMA IF NOT EXISTS `appointment_system` DEFAULT CHARACTER SET utf8 ;
USE `appointment_system` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` CHAR(38) NOT NULL,
  `first_name` VARCHAR(256) NULL,
  `last_name` VARCHAR(256) NULL,
  `email_address` VARCHAR(256) NOT NULL UNIQUE,
  `password` VARCHAR(256) NULL,
  `phone_number` VARCHAR(256) NULL,
  ` last_updated_at` DATETIME NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `branch` (
  `id` CHAR(38) NOT NULL,
  `name` VARCHAR(256) NULL,
  `address` VARCHAR(256) NULL,
  `latitude` FLOAT NOT NULL,
  `longitude` FLOAT NOT NULL,
  `last_updated_at` DATETIME NULL,
  PRIMARY KEY (`id`, `latitude`, `longitude`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `staff` (
  `user_id` CHAR(38) NOT NULL,
  `branch_id` CHAR(38) NOT NULL,
  `api_key` CHAR(38) NOT NULL,
  `api_usage` INT(11) NOT NULL,
  `permission_level` INT(11) NOT NULL,
  PRIMARY KEY (`user_id`, `branch_id`),
  CONSTRAINT `fk_staff_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`),
  CONSTRAINT `fk_staff_branch1`
    FOREIGN KEY (`branch_id`)
    REFERENCES `branch` (`id`)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `appointments` (
  `id` CHAR(38) NOT NULL,
  `end` DATETIME NOT NULL,
  `start` DATETIME NOT NULL,
  `last_updated_at` DATETIME NULL,
  `staff_user_id` CHAR(38) NOT NULL,
  `staff_branch_id` CHAR(38) NOT NULL,
  `user_id` CHAR(38) NULL,
  PRIMARY KEY (`id`, `staff_user_id`, `staff_branch_id`, `end`, `start`),
  CONSTRAINT `fk_appointments_staff1`
    FOREIGN KEY (`staff_user_id` , `staff_branch_id`)
    REFERENCES `staff` (`user_id` , `branch_id`),
  CONSTRAINT `fk_appointments_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
)ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
