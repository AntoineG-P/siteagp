#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Adherents
#------------------------------------------------------------

CREATE TABLE Adherents(
        CodeAdh    Varchar (50) NOT NULL ,
        NomAdh     Varchar (50) NOT NULL ,
        PrenomAdh  Varchar (50) NOT NULL ,
        AdresseAdh Varchar (50) NOT NULL
	,CONSTRAINT Adherents_PK PRIMARY KEY (CodeAdh)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Rayons
#------------------------------------------------------------

CREATE TABLE Rayons(
        CodeRayon     Varchar (50) NOT NULL ,
        IntituleRayon Varchar (50) NOT NULL
	,CONSTRAINT Rayons_PK PRIMARY KEY (CodeRayon)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Ouvrage
#------------------------------------------------------------

CREATE TABLE Ouvrage(
        CodeOuvrage  Varchar (50) NOT NULL ,
        TitreOuvrage Varchar (50) NOT NULL ,
        CodeRayon    Varchar (50) NOT NULL
	,CONSTRAINT Ouvrage_PK PRIMARY KEY (CodeOuvrage)

	,CONSTRAINT Ouvrage_Rayons_FK FOREIGN KEY (CodeRayon) REFERENCES Rayons(CodeRayon)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Auteur
#------------------------------------------------------------

CREATE TABLE Auteur(
        CodeAuteur Varchar (50) NOT NULL ,
        NomAut     Varchar (50) NOT NULL ,
        PrenomAut  Varchar (50) NOT NULL
	,CONSTRAINT Auteur_PK PRIMARY KEY (CodeAuteur)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Mots
#------------------------------------------------------------

CREATE TABLE Mots(
        CodeMot Varchar (50) NOT NULL ,
        Mot     Varchar (50) NOT NULL
	,CONSTRAINT Mots_PK PRIMARY KEY (CodeMot)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Emprunt
#------------------------------------------------------------

CREATE TABLE Emprunt(
        CodeAdh     Varchar (50) NOT NULL ,
        CodeOuvrage Varchar (50) NOT NULL ,
        DateEmprunt Date NOT NULL
	,CONSTRAINT Emprunt_PK PRIMARY KEY (CodeAdh,CodeOuvrage)

	,CONSTRAINT Emprunt_Adherents_FK FOREIGN KEY (CodeAdh) REFERENCES Adherents(CodeAdh)
	,CONSTRAINT Emprunt_Ouvrage0_FK FOREIGN KEY (CodeOuvrage) REFERENCES Ouvrage(CodeOuvrage)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Index
#------------------------------------------------------------

CREATE TABLE Index(
        CodeMot     Varchar (50) NOT NULL ,
        CodeOuvrage Varchar (50) NOT NULL
	,CONSTRAINT Index_PK PRIMARY KEY (CodeMot,CodeOuvrage)

	,CONSTRAINT Index_Mots_FK FOREIGN KEY (CodeMot) REFERENCES Mots(CodeMot)
	,CONSTRAINT Index_Ouvrage0_FK FOREIGN KEY (CodeOuvrage) REFERENCES Ouvrage(CodeOuvrage)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Auteur de
#------------------------------------------------------------

CREATE TABLE Auteur_de(
        CodeAuteur  Varchar (50) NOT NULL ,
        CodeOuvrage Varchar (50) NOT NULL
	,CONSTRAINT Auteur_de_PK PRIMARY KEY (CodeAuteur,CodeOuvrage)

	,CONSTRAINT Auteur_de_Auteur_FK FOREIGN KEY (CodeAuteur) REFERENCES Auteur(CodeAuteur)
	,CONSTRAINT Auteur_de_Ouvrage0_FK FOREIGN KEY (CodeOuvrage) REFERENCES Ouvrage(CodeOuvrage)
)ENGINE=InnoDB;

