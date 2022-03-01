package application.model;

import java.io.Serializable;

public class User implements Serializable{

    private static final long serialVersionUID = 3L;

    long id;
    String name;
    int phone;
    String email;
    String username;
    String password;
    String address;
    String permission;
    
    public User() {
    }

    public User(long id, String name, int phone, String email, String username, String password, String address, String permission) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.username = username;
        this.password = password;
        this.address = address;
        this.permission = permission;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }
    
    @Override
    public String toString() {
    	return "User id= " + Long.toString(id) + ", name= " + name + ", phone number= " + 
    			Integer.toString(phone) + ", email= " + email + ", username= " + username + ", password= " + 
    			password + ", address= " + address + ", permission= " + permission;
    }

}
