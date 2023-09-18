package com.example.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Company{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int companyId;
	private String companyName;
	private String request;
	private String tagline;
	private long contactNo;
	private long companyRevenue;
	
	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Company(int companyId, String companyName, String request, String tagline,
			long contactNo,long companyRevenue) {
		super();
		this.companyId = companyId;
		this.companyName = companyName;
		this.request = request;
		this.tagline = tagline;
		this.contactNo = contactNo;
		this.companyRevenue = companyRevenue;
	}
	public int getId() {
		return companyId;
	}
	public void setId(int companyId) {
		this.companyId = companyId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getRequest() {
		return request;
	}
	public void setRequest(String request) {
		this.request = request;
	}
	public String getTagline() {
		return tagline;
	}
	public void setTagline(String tagline) {
		this.tagline = tagline;
	}
	public long getContactNo() {
		return contactNo;
	}
	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}
	public long getCompanyRevenue() {
		return companyRevenue;
	}
	public void setCompanyRevenue(long companyRevenue) {
		this.companyRevenue = companyRevenue;
	}
}

