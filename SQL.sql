create database Test;

use  Test;

create table tblDepartamento(
    intId int primary key,
    strNombre varchar(100)
);

create table tblCiudad(
    intId int primary key,
    strNombre varchar(50),
    intEstado int,
    intIdDepartamento int
);
alter table tblCiudad add foreign key (intIdDepartamento) references tblDepartamento(intId);
create table tblAerolinea(
    intId int auto_increment primary key,
    strNombre varchar(50),
    intIdCiudad int
);
alter table tblAerolinea add foreign key (intIdCiudad) references tblCiudad(intId);

create table tblVuelo(
    intId int auto_increment primary key,
    strOrigen varchar(50),
    strDestino varchar(50),
    strPrecio varchar(50),
    strHora varchar(50),
    intIdAerolinea int,
    N_Asientos int,
    intEstado int
);
alter table tblVuelo add foreign key (intIdAerolinea) references tblAerolinea(intId);

create table tblUsuario(
    intId int auto_increment primary key,
    strCedula varchar(100),
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
alter table tblReservas add foreign key(intIdUser) references tblUsuario(intId);


Delimiter $$
create procedure SP_Registro(in strCedulaIn varchar(50),in strNombreIn varchar(50),in strApellidoIn varchar(50),
in strUsuarioIn varchar(50),
in strClaveIn varchar(50),in dtFechaNacimientoIn date)
begin

    insert into tblUsuario(strCedula,strNombre,strApellido,strUsuario,strClave,dtFechaNacimiento)
    values (strCedulaIn,strNombreIn,strApellidoIn,strUsuarioIn,strClaveIn,dtFechaNacimientoIn);

end
$$

DELIMITER $$
create procedure SP_Login(in strUsuario varchar(50),in strClave varchar(50))
begin
    declare blnLogin bool default true;
    
    if isnull((select strCedula as 'Bln' from tblUsuario where tblUsuario.strUsuario=strUsuario and 
    tblUsuario.strClave=strClave)) then
		set blnLogin=false;
		select blnLogin;
    else
		select blnLogin,tblUsuario.* from tblUsuario where tblUsuario.strUsuario=strUsuario and 
    tblUsuario.strClave=strClave;
    end if;

end
$$

DELIMITER $$
    create procedure SP_CrearAerolinea(in strNombreIN varchar(50),in intIdCiudadIN int)
    begin

        insert into tblAerolinea(strNombre,intIdCiudad) values(strNombreIN,intIdCiudadIN);

    end
$$


DELIMITER $$
    create procedure SP_CrearVuelo(
          in strOrigenIN varchar(50),
          in strDestinoIN varchar(50),
          in strPrecioIN varchar(50),
          in intIdAerolineaIN int,
          in N_AsientosIN int,
          in intEstadoIN int,
          in strHoraIN varchar(50))
    begin

        insert into tblVuelo(strOrigen,strDestino,strPrecio,intIdAerolinea,N_Asientos,
        intEstado,strHora) values(strOrigenIN,strDestinoIN,strPrecioIN,intIdAerolineaIN,N_AsientosIN,
        intEstadoIN,strHoraIN);

    end
$$


DELIMITER $$
    create procedure SP_Flight()
    begin

             select tblVuelo.*,tblAerolinea.strNombre from tblVuelo
        inner join tblAerolinea on tblVuelo.intidaerolinea=tblAerolinea.intId;


    end
$$

DELIMITER $$
    create procedure SP_FlightPorCosto()
    begin

            select tblVuelo.*,tblAerolinea.strNombre from tblVuelo
        inner join tblAerolinea on tblVuelo.intidaerolinea=tblAerolinea.intId order by tblVuelo.strPrecio asc;


    end
$$

DELIMITER $$
    create procedure SP_ReservarVuelo(in intIdVueloIN int,in intIdUserIN int)
    begin

   insert into tblReservas(dtFechaReserva,intIdVuelo,intIdUser) values(now(),intIdVueloIN,intIdUserIN);

    end
$$

DELIMITER $$
    create procedure SP_VuelosUsuario(in intIdUsuario int)
    begin

     select tblVuelo.intId as 'intIdVuelo',tblVuelo.strOrigen,tblVuelo.strDestino,
        tblVuelo.strPrecio,tblReservas.dtFechaReserva,tblReservas.intId as 'intIdReserva',tblVuelo.strHora,tblAerolinea.strNombre from tblReservas
        inner join tblVuelo on tblVuelo.intId=tblReservas.intIdVuelo
        inner join tblAerolinea on tblAerolinea.intId=tblVuelo.intIdAerolinea
        where tblReservas.intIdUser=intIdUsuario;
    end
$$

DELIMITER $$
    create procedure SP_BorrarReserva(in intIdReserva int)
    begin

     delete from tblReservas where intId=intIdReserva;
    end
$$

DELIMITER $$
    create procedure SP_GetCiudadDepartamento()
    begin
        SET @counter = 0;
         select (@counter := @counter + 1) AS 'id', concat(UPPER(tblCiudad.strNombre),'-',tblDepartamento.strNombre) as 'value' from tblDepartamento
        inner join tblCiudad on tblDepartamento.intId=tblCiudad.intIdDepartamento;

    end
$$

 DELimiter $$
 create procedure SP_BuscarLugar(in strOrigen varchar(100),in strDestino varchar(100))
 begin
 select tblVuelo.*,tblAerolinea.strNombre from tblVuelo
        inner join tblAerolinea on tblVuelo.intidaerolinea=tblAerolinea.intId
        where tblVuelo.strOrigen like CONCAT('%', strOrigen , '%') and 
        tblVuelo.strDestino like CONCAT('%', strDestino , '%')
        ;
        end
        $$