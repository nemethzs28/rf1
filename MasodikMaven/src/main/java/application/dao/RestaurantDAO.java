package application.dao;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import application.model.Restaurant;

@Repository
public class RestaurantDAO extends JdbcDaoSupport  {
	
	@Autowired 
	DataSource dataSource;
	
	@PostConstruct
	private void initialize(){
		setDataSource(dataSource);
	}
	
	public void insertRestaurant(Restaurant restaurant) {
		String sql = "INSERT INTO restaurant(name) VALUES (?)";
		getJdbcTemplate().update(sql, new Object[]{
				restaurant.getName()
		});
	}
	
	public List<Restaurant> listRestaurants(){
		String sql = "SELECT * FROM restaurant";
		List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
		
		List<Restaurant> result = new ArrayList<Restaurant>();
		for(Map<String, Object> row:rows){
			Restaurant restaurant = new Restaurant();
			restaurant.setId((Integer)row.get("id"));
			restaurant.setName((String)row.get("name"));
			result.add(restaurant);
		}
		
		return result;
	}
	
	public Restaurant getRestaurantbyID(int id){
		String sql = "SELECT * FROM restaurant WHERE id="+id;
		List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
		
		List<Restaurant> result = new ArrayList<Restaurant>();
		for(Map<String, Object> row:rows){
			Restaurant restaurant = new Restaurant();
			restaurant.setId((Integer)row.get("id"));
			restaurant.setName((String)row.get("name"));
			result.add(restaurant);
		}
		
		return result.get(0);
	}
	
	public void deleteRestaurant(int id){
		String sql = "DELETE FROM restaurant WHERE id="+id;
		getJdbcTemplate().update(sql);	
	}
	
	public void updateRestaurant(int id, String name){
		String sql = "UPDATE restaurant SET name='"+name+"' WHERE id="+id;
		getJdbcTemplate().update(sql);	
	}
	
}