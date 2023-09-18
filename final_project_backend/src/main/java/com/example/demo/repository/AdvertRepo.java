package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Advertisement;

public interface AdvertRepo extends JpaRepository<Advertisement,Integer>{
	
}