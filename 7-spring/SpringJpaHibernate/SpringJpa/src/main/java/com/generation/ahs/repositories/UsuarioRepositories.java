package com.generation.ahs.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.generation.ahs.models.UsuarioModelo;

@Repository
public interface UsuarioRepositories extends CrudRepository <UsuarioModelo, Long> {

	ArrayList<UsuarioModelo> findByPrioridad(Integer prioridad);
	
	//public abstract ArrayList<UsuarioModelo> findByPriority(Integer prioridad);

}
