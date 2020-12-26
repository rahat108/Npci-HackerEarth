package com.example.login.exception;

public class TransactionNotFound extends RuntimeException{
	
	
	private static final long serialVersionUID = 188441277822240218L;
	
	public TransactionNotFound() {
		
	}

	public TransactionNotFound(String msg) {
		super(msg);
		
	}
}
