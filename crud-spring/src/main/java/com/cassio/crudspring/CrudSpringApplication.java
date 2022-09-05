package com.cassio.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.cassio.crudspring.model.Course;
import com.cassio.crudspring.repository.CourserRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

@Bean
CommandLineRunner initDatabase( CourserRepository courserRepository){
	return args -> {
courserRepository.deleteAll();
  Course c = new Course();
  c.setNome("Spring");
  c.setTipo("back-end");

  courserRepository.save(c);
	};
}

}
