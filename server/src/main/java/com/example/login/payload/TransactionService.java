package com.example.login.payload;
import java.util.List;

import com.example.login.model.Transaction;
public interface TransactionService {

	Long saveTransaction(Transaction t);
	
	List<Transaction> findAllBysendername(String username);
}
