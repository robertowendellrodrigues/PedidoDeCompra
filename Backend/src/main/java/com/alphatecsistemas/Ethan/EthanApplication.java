package com.alphatecsistemas.Ethan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EthanApplication {

	public static void main(String[] args) {
		SpringApplication.run(EthanApplication.class, args);
		int ano = 2022;
		int anonascimento = 1975;
		
		
		System.out.println("Sua idade é de:" + (ano-anonascimento));
	}

}
