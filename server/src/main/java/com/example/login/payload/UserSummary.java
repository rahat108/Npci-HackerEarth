package com.example.login.payload;

public class UserSummary {
    private Long id;
    private String username;
    private String name;
	private int amount;

    public UserSummary(Long id, String username, String name,int amount) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.amount=amount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

	public void setName(String name) {
        this.name = name;
    }

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}
}
