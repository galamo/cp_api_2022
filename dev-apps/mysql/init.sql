CREATE SCHEMA `shopping-app` ;


CREATE TABLE `shopping-app`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));


INSERT INTO `shopping-app`.`users` (`user_name`, `first_name`, `last_name`, `password`) VALUES ('ziv@ziv.com', 'ziv', 'ziva', 'e10adc3949ba59abbe56e057f20f883e'),('ziv@ziv.com1', 'ziv1', 'ziva1', 'e10adc3949ba59abbe56e057f20f883e'),('ziv@ziv.com2', 'ziv2', 'ziva2', 'e10adc3949ba59abbe56e057f20f883e');
