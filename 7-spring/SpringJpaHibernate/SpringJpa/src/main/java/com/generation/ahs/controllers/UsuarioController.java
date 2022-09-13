package com.generation.ahs.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.ahs.models.UsuarioModelo;
import com.generation.ahs.services.UsuarioServices;

@RestController
@RequestMapping("/usuario")

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

	
}
