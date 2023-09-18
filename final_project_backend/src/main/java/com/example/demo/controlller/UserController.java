package com.example.demo.controlller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.User;
import com.example.demo.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserService us;
	
	@PostMapping("/register")
	public boolean registerUser(@RequestBody User user) {
	    	return us.saveUser(user);
	}
	
	@GetMapping("/login")
	public User loginUser(@RequestParam String username) {
		try {
			return us.getPass(username);
		}catch(Exception e) {
			return null;
		}
	}
	@PutMapping("/updateUser")
	public String updateUser(@RequestBody User user) {
		int id = user.getUserId();
		try {
			us.putData(id, user);
			return "success";
		}catch(Exception e) {
			return "failure";
		}
	}
	@GetMapping("/viewUser")
	public Optional<User> findUser(@RequestParam int id) {
		return us.viewUser(id);
	}
	@DeleteMapping("/deleteAd")
	public String deleteAdvert(@RequestParam int id) {
		if(us.deleteAds(id)) {
			return "Canceled Successfully";
		}
			return "Couldn't Cancel";
	}
}
