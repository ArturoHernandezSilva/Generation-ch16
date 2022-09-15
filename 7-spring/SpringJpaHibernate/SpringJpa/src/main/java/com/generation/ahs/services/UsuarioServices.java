package com.generation.ahs.services;

import org.springframework.stereotype.Service;

import com.generation.ahs.models.UsuarioModelo;
import com.generation.ahs.repositories.UsuarioRepositories;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Optional;


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
	
	public Optional<UsuarioModelo> obtenerPorId(Long id){
        return usuariorepository.findById(id);
    }
	
	
	public ArrayList<UsuarioModelo>  obtenerPorPrioridad(Integer prioridad) {
        return usuariorepository.findByPrioridad(prioridad);
    }
	
	
	
	public boolean eliminarUsuario(Long id) {
        try{
            usuariorepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

	


	


}
