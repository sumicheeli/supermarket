package com.example.demo.classpro.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.classpro.project.module.Signmodule;

public interface Signrepository extends JpaRepository<Signmodule, Long>{

	Signmodule findByName(String signmodule);



}
