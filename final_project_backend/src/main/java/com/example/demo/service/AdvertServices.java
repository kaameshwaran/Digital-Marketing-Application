package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Advertisement;
import com.example.demo.repository.AdvertRepo;

@Service
public class AdvertServices{
	
	@Autowired
	public AdvertRepo ar;
	
	public Advertisement postData(Advertisement ad) {
		return ar.save(ad);
	}
	
	public List<Advertisement> postAllData(List<Advertisement> ad){
		return ar.saveAll(ad);
	}
	
	public Optional<Advertisement> viewData(int adId){
		return ar.findById(adId);
	}
	public List<Advertisement> viewAllData(){
		return ar.findAll();
	}
	public boolean deleteData(int adId) {
		try {
			ar.deleteById(adId);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
}