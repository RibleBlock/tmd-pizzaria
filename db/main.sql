CREATE DATABASE pizzaria;
CREATE TABLE clientes (

    id_cliente INT PRIMARY KEY AUTO,
    nome_cliente VARCHAR(20),
    sobrenome_cliente VARCHAR(20),
    email_cliente VARCHAR(40),
    senha_cliente VARCHAR(60),

    cidade_cliente VARCHAR(20),
    estado_cliente VARCHAR(2),

);

CREATE TABLE telefone (

    id_telefone INT PRIMARY KEY AUTO,
    id_cliente FROM clientes,
    numero_telefone INT
);