package com.example.demo.classpro.project.controll;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.classpro.project.module.Signmodule;
import com.example.demo.classpro.project.repository.Signrepository;

@RestController
@CrossOrigin("http://localhost:3005")
@RequestMapping("/signdata")
public class Signcontroll {
  
	@Autowired
	private Signrepository repo;
	
	@PostMapping("/Signmodule")
	String newSignmodule(@RequestBody Signmodule d)
	{
		String signmodule= d.getName();
		Signmodule m=repo.findByName(signmodule);
		if(m==null) {
			repo.save(d);
			return "added";	
		}
		else {
			return "user already exists";
		}
		
	}
	@GetMapping
	List<Signmodule>getSignmodule(){
		return repo.findAll();
	}
	
	@PostMapping("/login/{mname}/{pass}")
	public String login(@PathVariable String mname,@PathVariable String pass)
	{
		Signmodule ll=repo.findByName(mname);
		if(ll==null)
		{
			return "invalid username";
		}else {
	           if(ll.getPassword().equals(pass)) {
	        	   
	        	 return "success";  
	           }
	           else {
	        	  return "invalidpassword"; 
	           }
		}
	}}
