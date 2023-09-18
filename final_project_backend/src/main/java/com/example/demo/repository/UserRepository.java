package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.model.User;

import jakarta.transaction.Transactional;

public interface UserRepository extends JpaRepository<User, Integer> {
	 User findByUsername(String username);
	 User findByEmailId(String emailId);
		@Modifying
		@Transactional
		@Query(value = "delete from advertisement where user_id = :value",nativeQuery = true)
		public Integer deleteAd(@Param("value") int value);
}
