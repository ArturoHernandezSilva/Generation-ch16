package com.generation.ahs.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import com.generation.ahs.models.UsuarioModelo;
import com.generation.ahs.services.UsuarioServices;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE,
        RequestMethod.PUT })

public class UsuarioController {
	@Autowired
	UsuarioServices usuarioservices;
	@GetMapping()
	public ArrayList<UsuarioModelo> obtenerUsuarios(){
        return usuarioservices.obtenerusuario();
	}
	@PostMapping()
	public UsuarioModelo guardarUsuario(@RequestBody UsuarioModelo usuario){
        return this.usuarioservices.guardarUsuario(usuario);
    }

	
	@GetMapping( path = "/{id}")
	public Optional<UsuarioModelo> obtenerUsuarioPorId(@PathVariable("id") Long id) {
        return this.usuarioservices.obtenerPorId(id);
    }
	
	
	@GetMapping("/query")
	public ArrayList<UsuarioModelo> obtenerUsuarioPorPrioridad(@RequestParam("prioridad") Integer prioridad){
        return this.usuarioservices.obtenerPorPrioridad(prioridad);
    }


	@DeleteMapping( path = "/{id}")
	public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.usuarioservices.eliminarUsuario(id);
        if (ok){
            return "Se eliminó el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id" + id;
        }
    }
	
	
	



	

	
}
