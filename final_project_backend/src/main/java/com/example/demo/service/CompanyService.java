package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Company;
import com.example.demo.repository.CompanyRepo;

@Service
public class CompanyService{
	
	@Autowired
	CompanyRepo cr;
	
	public Company saveData(Company company){
		return cr.save(company);
	}
	
	public List<Company> getAllData(){
		return cr.findAll();
	}
	public Optional<Company> getData(int id) {
		return cr.findById(id);
	}
	public Company putData(int id, Company company) {
		Company exist = cr.findById(id).orElse(null);
		if(exist != null) {
			if(company.getId()!=0) {
				exist.setId(company.getId());
			}
			if(company.getCompanyName()!= null) {
				exist.setCompanyName(company.getCompanyName());
			}
			if(company.getRequest()!= null) {
				exist.setRequest(company.getRequest());
			}
			if(company.getTagline()!= null) {
				exist.setTagline(company.getTagline());
			}
			if(company.getContactNo()!= 0) {
				exist.setContactNo(company.getContactNo());
			}
			return cr.save(exist);
		}else {
			return null;
		}
	}
	public boolean deleteData(int id) {
	    try {
	        Optional<Company> company = cr.findById(id);
	        if (company.isPresent()) {
	            cr.deleteById(id);
	            return true;
	        } else {
	            return false;
	        }
	    } catch (Exception e) {
	        return false;
	    }
	}
	public boolean deleteAds(int id) {
		try {
			cr.deleteAd(id);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
}