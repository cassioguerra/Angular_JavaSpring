package com.cassio.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cassio.crudspring.model.Course;

@Repository
public interface CourserRepository extends JpaRepository<Course , Long > {
    
}
