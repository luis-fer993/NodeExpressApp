CREATE DATABASE IF NOT EXISTS `mysqlApiExpress` /*!40100 DEFAULT CHARACTER SET utf8 */;

use mysqlApiExpress;

CREATE table employee (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    salary int(11) NOT NULL,
    phone varchar(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- insert data

INSERT into employee 
(name, salary, phone) 
values ('John', 10000, '1234567890'),
('Juan', 2000, '192873987'),
('Carlos', 5000, '192987'),
('Jan', 300, '873987'),
('Peri', 2400, '57687')