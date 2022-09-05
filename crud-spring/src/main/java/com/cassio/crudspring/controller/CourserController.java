package com.cassio.crudspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cassio.crudspring.model.Course;
import com.cassio.crudspring.repository.CourserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@RestController
@RequestMapping("/api/courses")
public class CourserController {
    
    @Autowired
    private CourserRepository courserRepository;

    @GetMapping
    public List<Course> list() {
        return courserRepository.findAll();
    }
    


}
