package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Advertisement{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int adId;
	private String product;
	private String adType;
	private String adDuration;
	private String adPlatform;
	private String membership;
	
	public Advertisement() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Advertisement(int adId, String product, String adType, String adDuration, String adPlatform,
			String membership) {
		super();
		this.adId = adId;
		this.product = product;
		this.adType = adType;
		this.adDuration = adDuration;
		this.adPlatform = adPlatform;
		this.membership = membership;
	}

	public int getAdId() {
		return adId;
	}

	public void setAdId(int adId) {
		this.adId = adId;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getAdType() {
		return adType;
	}

	public void setAdType(String adType) {
		this.adType = adType;
	}

	public String getAdDuration() {
		return adDuration;
	}

	public void setAdDuration(String adDuration) {
		this.adDuration = adDuration;
	}

	public String getAdPlatform() {
		return adPlatform;
	}

	public void setAdPlatform(String adPlatform) {
		this.adPlatform = adPlatform;
	}

	public String getMembership() {
		return membership;
	}

	public void setMembership(String membership) {
		this.membership = membership;
	}
	
}