package com.example.login.payload;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.login.exception.TransactionNotFound;
import com.example.login.model.Transaction;
import com.example.login.repository.TransactionRepository;


@Service
public class TransactionImpl implements TransactionService {

	@Autowired
	private TransactionRepository repo;

	@Override
	public List<Transaction> findAllBysendername(String username) {
		List<Transaction> li = repo.findAllBysendername(username);
		List<Transaction> tr = null;
		if(!li.isEmpty()) {
			tr=li;
		}
		else
		{
			throw new TransactionNotFound("No Transaction Done");
		}
		return tr;
	}
	
	@Override
	public Long saveTransaction(Transaction t) {
		Long id = repo.save(t).getTid();
		return id;
	}

}
