package com.example.demo.controlller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Advertisement;
import com.example.demo.service.AdvertServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class AdvertController{
	
	@Autowired
	AdvertServices as;
	
	@PostMapping("/submitAd")
	public String submitAd(@RequestBody Advertisement ad) {
		try {
			as.postData(ad);
			return "submited Successfully";
		}catch(Exception e) {
			return "Couldn't submit Data";
		}
	}
	@PostMapping("/submitAllAd")	
	public String submitAllAd(@RequestBody List<Advertisement> ad) {
		try {
			as.postAllData(ad);
			return "submited Successfully";
		}catch(Exception e) {
			return "Couldn't submit Data";
		}
	}
	@GetMapping("/ViewById")
	public Optional<Advertisement> view(@RequestParam(value = "id") int adId){
		try {
			return as.viewData(adId);	
		}catch(Exception e) {
			return null;
		}
	}
	@GetMapping("/viewAd")
	public List<Advertisement> view(){
		return as.viewAllData();
	}
	@DeleteMapping("/delete")
	public String delete(@RequestParam(value = "id") int Adid) {
		try {
			as.deleteData(Adid);
			return "Cancelled Successfully";
		}catch(Exception e) {
			return "Couldn't cancel now";
		}
	}
}