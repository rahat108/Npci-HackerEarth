package com.example.login.repository;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.login.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction,String>{

	   
    
	List<Transaction> findAllBysendername(String username);
}
