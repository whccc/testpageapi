create database Test;

use  Test;

create table tblDepartamento(
    intId int auto_increment primary key,
    strNombre varchar(50)
);

create table tblAerolinea(
    intId int auto_increment primary key,
    strNombre varchar(50),
    intIdDepartamento int
);
alter table tblAerolinea add foreign key (intIdDepartamento) references tblDepartamento(intId);

create table tblVuelo(
    intId int auto_increment primary key,
    strOrigen varchar(50),
    strDestino varchar(50),
    strPrecio varchar(50),
    intIdAerolinea int,
    N_Asientos int,
    intEstado int
);
alter table tblVuelo add foreign key (intIdAerolinea) references tblAerolinea(intId);

create table tlbUsuario(
    intId int auto_increment primary key,
    strNombre varchar(100),
    strApellido varchar(100),
    strUsuario varchar(100),
    strClave varchar(100),
    dtFechaNacimiento date
);


create table tblReservas(
    intId int auto_increment primary key,
    dtFechaReserva date,
    tmHora varchar(50),
    intIdVuelo int,
    intIdUser int
);

alter table tblReservas add foreign key(intIdVuelo) references tblVuelo(intId);
alter table tblReservas add foreign key(intIdUser) references tlbUsuario(intId);
