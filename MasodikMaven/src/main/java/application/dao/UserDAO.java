package application.dao;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import application.model.User;

@Repository
public class UserDAO extends JdbcDaoSupport  {

    @Autowired
    DataSource dataSource;

    @PostConstruct
    private void initialize(){
        setDataSource(dataSource);
    }

    public void insertUser(User user) {
        String sql = "INSERT INTO user(name) VALUES (?)";
        getJdbcTemplate().update(sql, new Object[]{
                user.getName()
        });
    }

    public List<User> listUsers(){
        String sql = "SELECT * FROM user";
        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);

        List<User> result = new ArrayList<User>();
        for(Map<String, Object> row:rows){
            User user = new User();
            user.setId((Integer)row.get("id"));
            user.setName((String)row.get("name"));
            result.add(user);
        }

        return result;
    }

    public User getUserbyID(int id){
        String sql = "SELECT * FROM user WHERE id="+id;
        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);

        List<User> result = new ArrayList<User>();
        for(Map<String, Object> row:rows){
            User user = new User();
            user.setId((Integer)row.get("id"));
            user.setName((String)row.get("name"));
            result.add(user);
        }

        return result.get(0);
    }

    public void deleteUser(int id){
        String sql = "DELETE FROM user WHERE id="+id;
        getJdbcTemplate().update(sql);
    }

    public void updateUser(int id, String name){
        String sql = "UPDATE user SET name='"+name+"' WHERE id="+id;
        getJdbcTemplate().update(sql);
    }

}