package com.example.demo.controlller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.model.Company;
import com.example.demo.service.CompanyService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class CompanyController{
	
	@Autowired
	CompanyService cs;
	
	@PostMapping("/submit")
	public Company addData(@RequestBody Company company) {
		try {
			return cs.saveData(company);
		}catch(Exception e) {
			return null;
		}
	}
	@GetMapping("/view")
	public List<Company> view(){
		return cs.getAllData();
	}
	@GetMapping("/viewByCompanyId")
	public Optional<Company> viewById(@RequestParam int id){
		try {
			return cs.getData(id);
		}catch (Exception e) {
			return null;
		}
	}
	@PutMapping("/update")
	public String putData(@RequestBody Company company) {
	    int id = company.getId();
	    try {
	        cs.putData(id, company);
	        return "Updated Successfully";
	    } catch (Exception e) {
	        return "Couldn't Update Data " + e.getMessage();
	    }
	}
	@DeleteMapping("/cancel")
	public String deleteData(@RequestParam int id) {
			if(cs.deleteData(id))
				return "Canceled Successfully";
			else {
				return "Couldn't Cancel";
			}
		
	}
//	@DeleteMapping("/deleteAds")
//	public String deleteAdvert(@RequestParam int id) {
//		if(cs.deleteAds(id)) {
//			return "Canceled Successfully";
//		}
//			return "Couldn't Cancel";
//	}
}