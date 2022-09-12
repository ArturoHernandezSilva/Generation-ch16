package com.generation.ahs;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")



public class HolaMundo {
	@GetMapping("/index")

	public String hola () {
		return "index.html";
	}

}
