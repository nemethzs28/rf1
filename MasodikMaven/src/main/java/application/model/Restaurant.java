package application.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class Restaurant implements Serializable{
	
    private static final long serialVersionUID = 1L;
    
    long id;
    String name;
    String image;
    String priceCategory;
    String description;
    float rating;
    List<Food> foods;


    
    public Restaurant() {
    }

    public Restaurant(long id, String name, String image, String priceCategory, String description, float rating) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.priceCategory = priceCategory;
        this.description = description;
        this.rating = rating;
        this.foods = new ArrayList<Food>();
    }

    public Restaurant(String name) {
        this.name = name;
        this.image = "";
        this.priceCategory = "";
        this.description = "";
        this.rating = 0;
        this.foods = new ArrayList<>();
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImage() {
        return image;
    }

    public String getPriceCategory() {
        return priceCategory;
    }

    public String getDescription() {
        return description;
    }

    public float getRating() {
        return rating;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setPriceCategory(String priceCategory) {
        this.priceCategory = priceCategory;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }
    
    public void addFood(Food food) {
    	foods.add(food);
    }
    
    public void setFood(int index, Food food) {
    	foods.set(index, food);
    }
    
    @Override
    public String toString() {
    	StringBuilder s = new StringBuilder("Restaurant id= " + Long.toString(id) + ", name= " + name + ", image= " + image +
                ", price category= " + priceCategory + ", description= " + description +
                ", rating= " + Float.toString(rating) + ", foods= [");
    	for (int i = 0; i < foods.size(); i++) {
    		if (i == foods.size() - 1) {
    			s.append(foods.get(i).getName()).append("]");
    		}
    		s.append(foods.get(i).getName()).append(", ");
    	}
    	return s.toString();
    }
}
