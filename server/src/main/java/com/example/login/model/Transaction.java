package com.example.login.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Transaction {
	
	@Id
	@GeneratedValue
	private long tid;
	
	private String sendername;
	private long receiver_id;
	private int amount;
	
	public long getTid() {
		return tid;
	}
	public void setTid(long tid) {
		this.tid = tid;
	}
	
	public String getSendername() {
		return sendername;
	}
	public void setSendername(String sendername) {
		this.sendername = sendername;
	}
	public long getReceiver_id() {
		return receiver_id;
	}
	public void setReceiver_id(long receiver_id) {
		this.receiver_id = receiver_id;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}

}
