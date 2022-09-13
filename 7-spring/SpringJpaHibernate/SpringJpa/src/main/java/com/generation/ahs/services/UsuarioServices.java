package com.generation.ahs.services;

import org.springframework.stereotype.Service;

import com.generation.ahs.models.UsuarioModelo;
import com.generation.ahs.repositories.UsuarioRepositories;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;


@Service 
public class UsuarioServices {
	@Autowired
	UsuarioRepositories usuariorepository;
	
	public ArrayList<UsuarioModelo> obtenerusuario(){
		return (ArrayList<UsuarioModelo>)usuariorepository.findAll();
		
	}
	
	
	public UsuarioModelo guardarUsuario(UsuarioModelo usuario){
        return usuariorepository.save(usuario);
    }


}
