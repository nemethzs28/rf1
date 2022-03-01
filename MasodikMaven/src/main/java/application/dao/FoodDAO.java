package application.dao;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import application.model.Food;

@Repository
public class FoodDAO extends JdbcDaoSupport  {

    @Autowired
    DataSource dataSource;

    @PostConstruct
    private void initialize(){
        setDataSource(dataSource);
    }

    public void insertFood(Food food) {
        String sql = "INSERT INTO food(name) VALUES (?)";
        getJdbcTemplate().update(sql, new Object[]{
                food.getName()
        });
    }

    public List<Food> listFoods(){
        String sql = "SELECT * FROM food";
        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);

        List<Food> result = new ArrayList<Food>();
        for(Map<String, Object> row:rows){
            Food food = new Food();
            food.setId((Integer)row.get("id"));
            food.setName((String)row.get("name"));
            result.add(food);
        }

        return result;
    }

    public Food getFoodbyID(int id){
        String sql = "SELECT * FROM food WHERE id="+id;
        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);

        List<Food> result = new ArrayList<Food>();
        for(Map<String, Object> row:rows){
            Food food = new Food();
            food.setId((Integer)row.get("id"));
            food.setName((String)row.get("name"));
            result.add(food);
        }

        return result.get(0);
    }

    public void deleteFood(int id){
        String sql = "DELETE FROM food WHERE id="+id;
        getJdbcTemplate().update(sql);
    }

    public void updateFood(int id, String name){
        String sql = "UPDATE food SET name='"+name+"' WHERE id="+id;
        getJdbcTemplate().update(sql);
    }

}