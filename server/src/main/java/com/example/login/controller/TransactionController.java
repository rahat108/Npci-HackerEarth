package com.example.login.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.login.exception.ResourceNotFoundException;
import com.example.login.model.Transaction;
import com.example.login.model.User;
import com.example.login.payload.TransactionService;
import com.example.login.repository.UserRepository;

@RestController

@RequestMapping("/api")
public class TransactionController {

	int a=0;
	@Autowired
	private TransactionService service;
	
	@Autowired
    private UserRepository userRepository;
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@PostMapping("/accessHome/{username}")
	public ResponseEntity<Long> saveTransaction(@RequestBody Transaction transaction ,@PathVariable(value = "username") String username)
	{
		User u = userRepository.findByUsername(username).orElseThrow(() -> new ResourceNotFoundException("User", "username", username));
		if((u.getAmount()-transaction.getAmount())>=0)
		{
			u.setAmount(u.getAmount()-transaction.getAmount());
			userRepository.save(u);
			service.saveTransaction(transaction);
		}
		return new ResponseEntity<Long>(HttpStatus.OK);
	}
	
	
	@GetMapping("/accessHome/{username}")
	public @ResponseBody
	List<Transaction> findAllBysendername(@PathVariable(value = "username") String username) {
	    List<Transaction> li = service.findAllBysendername(username);
	    return li;
	}
	
}
