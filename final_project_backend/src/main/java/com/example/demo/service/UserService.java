package com.example.demo.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Advertisement;
import com.example.demo.model.Company;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@Service
public class UserService {

	@Autowired
	UserRepository ur;
	
	public boolean saveUser(User user) {
		User exist = ur.findByEmailId(user.getEmailId());
		User exist1 = ur.findByUsername(user.getUsername());
		if(exist == null && exist1 == null) {
			ur.save(user);
			return true;
		} else {
			return false;
		}
	}
	
	public User getPass(String username) {
		User user = ur.findByUsername(username);
		if(user != null) {
			return user;
		}else {
			return null;
		}
	}
	
	public Optional<User> viewUser(int id) {
		return ur.findById(id);
	}
//	public User putData(int id, User user) {
//		User exist = ur.findById(id).orElse(null);
//		if(exist != null) {
//			if(user.getUserId()!=0) {
//				exist.setUserId(user.getUserId());
//			}
//			if(user.getName()!=null) {
//				exist.setName(user.getName());
//			}
//			if(user.getEmailId()!=null) {
//				exist.setEmailId(user.getEmailId());
//			}
//			if(user.getUsername()!=null) {
//				exist.setUsername(user.getUsername());
//			}
//			if(user.getPassword()!=null) {
//				exist.setPassword(user.getPassword());
//			}
//			exist.setCompany(user.getCompany());
//			exist.setAdl(user.getAdl());
//			return ur.save(exist);
//		}else {
//			return null;
//		}
//	}



	public User putData(int id, User user) {
		User exist = ur.findById(id).orElse(null);

        if (exist != null) {
            if (user.getUserId() != 0) {
                exist.setUserId(user.getUserId());
            }
            if (user.getName() != null) {
                exist.setName(user.getName());
            }
            if (user.getEmailId() != null) {
                exist.setEmailId(user.getEmailId());
            }
            if (user.getUsername() != null) {
                exist.setUsername(user.getUsername());
            }
            if (user.getPassword() != null) {
                exist.setPassword(user.getPassword());
            }

            if (user.getCompany() != null) {
                if (exist.getCompany() == null) {
                    exist.setCompany(user.getCompany());
                } else {
                    Company existingCompany = exist.getCompany();
                    Company updatedCompany = user.getCompany();
                    
                    if (updatedCompany.getCompanyName() != null) {
                        existingCompany.setCompanyName(updatedCompany.getCompanyName());
                    }
                    if (updatedCompany.getRequest() != null) {
                        existingCompany.setRequest(updatedCompany.getRequest());
                    }
                    if (updatedCompany.getTagline() != null) {
                        existingCompany.setTagline(updatedCompany.getTagline());
                    }
                    if (updatedCompany.getContactNo() != 0) {
                        existingCompany.setContactNo(updatedCompany.getContactNo());
                    }
                    if (updatedCompany.getCompanyRevenue() != 0) {
                        existingCompany.setCompanyRevenue(updatedCompany.getCompanyRevenue());
                    }
                    
                }
            }

            if (user.getAdl() != null) {
                List<Advertisement> existingAdl = exist.getAdl();

                if (existingAdl == null) {
                    exist.setAdl(user.getAdl());
                } else {
                    existingAdl.clear();
                    existingAdl.addAll(user.getAdl());
                }
            }

            return ur.save(exist);
        } else {
            return null;
        }
	}
	
	public boolean deleteAds(int id) {
		try {
			ur.deleteAd(id);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
}
