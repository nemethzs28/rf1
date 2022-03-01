package application.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Food implements Serializable{

    private static final long serialVersionUID = 2L;

    long id;
    long restaurantID;
    String name;
    String category;
    List<String> allergens;
    String description;
    long price;

    public Food(long id, long restaurantID, String name, String category, String description, long price) {
        this.id = id;
        this.restaurantID = restaurantID;
        this.name = name;
        this.category = category;
        this.allergens = new ArrayList<String>();
        this.description = description;
        this.price = price;
    }

    public Food() {
	}

	public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getRestaurantID() {
        return restaurantID;
    }

    public void setRestaurantID(int restaurantID) {
        this.restaurantID = restaurantID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String[] getAllergens() {
        String [] err = new String[allergens.size()];
        for (int i = 0; i < allergens.size(); i++) {
        	err[i] = allergens.get(i);
        }
        return err;
    }

    public void setAllergen(int index, String allergen) {
        allergens.set(index, allergen);
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }
    
    public void addAllergen(String allergen) {
    	this.allergens.add(allergen);
    }
    
    @Override
    public String toString() {
    	String s =  "Food id= " + id + ", name= " + name + ", restaurant id= " + restaurantID + 
    			", category= " + category + ", description= " + description + ", price= " +
    			price + ", allergens= [";
    	for (int i = 0; i < allergens.size(); i++) {
    		if (i == allergens.size() - 1) {
    			s += allergens.get(i) + "]";
    		}
    		s += allergens.get(i) + ", ";
    	}
    	return s;
    }
}
