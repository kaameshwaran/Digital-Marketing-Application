package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.Company;

import jakarta.transaction.Transactional;

public interface CompanyRepo extends JpaRepository<Company,Integer>{
	@Modifying
	@Transactional
	@Query(value = "delete from advertisement where company_id = :value",nativeQuery = true)
	public Integer deleteAd(@Param("value") int value);
}