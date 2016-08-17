use yimi;
drop table if exists users;

create table users(
    id int primary key auto_increment,
    username char(100) not null,password varChar(100) not null,email varChar(100) not null,identity_id varChar(100)
)ENGINE=INNODB;
