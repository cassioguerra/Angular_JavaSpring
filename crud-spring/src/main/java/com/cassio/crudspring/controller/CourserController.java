package com.cassio.crudspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cassio.crudspring.model.Course;
import com.cassio.crudspring.repository.CourserRepository;


@RestController
@RequestMapping("/api/courses")
public class CourserController {
    
    @Autowired
    private CourserRepository courserRepository;

    @GetMapping
    public List<Course> list() {
        return courserRepository.findAll();
    }

    // lista or id 
    // @PathVariable: para informa que tem um ainformação no caminho de url;
    //ResponseEntity: é uma entidade de resposta do spring  para retorno o curso;
     @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable Long id){
        return courserRepository.findById(id)
        // retorno ok se encontra o id 
                .map(recordFound -> ResponseEntity.ok().body(recordFound))
                // condição de se não
                .orElse(ResponseEntity.notFound().build());
    }

    // PARA SALVAR  O PRODUTO
   // @RequestMapping(method = RequestMethod.POST) (para declara a criação de outra forma )

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED) // para colocara status para não manusear nem manusear 
    public Course create(@RequestBody Course course){
       return courserRepository.save(course);
      // return  ResponseEntity.status(HttpStatus.CREATED)
      // .body(courserRepository.save(course))
    }
    
// para editar
  

}
