package application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import application.dao.RestaurantDAO;
import application.model.Restaurant;

@Controller
public class RestaurantController {

    @Autowired
    private RestaurantDAO restaurantDAO;

    @GetMapping(value = "/")
    public String listRestaurants(Model model) {
        model.addAttribute("restaurants", restaurantDAO.listRestaurants());

        return "index";
    }

    @PostMapping(value = "/add")
    public String addRestaurant(@RequestParam("name") String name) {
        Restaurant restaurant = new Restaurant(name);
        restaurantDAO.insertRestaurant(restaurant);

        return "redirect:/";
    }
    @PostMapping(value = "/delete/{id}")
    public String deleteRestaurant(@PathVariable("id") int id) {
        restaurantDAO.deleteRestaurant(id);

        return "redirect:/";
    }

    @GetMapping(value = "/edit/{id}")
    public String editRestaurant(@PathVariable("id") int id, Model model) {
        Restaurant restaurant = restaurantDAO.getRestaurantbyID(id);
        model.addAttribute("restaurant", restaurant);

        return "update-restaurant";
    }

    @PostMapping(value = "/update/{id}")
    public String updateRestaurant(@PathVariable("id") int id, @RequestParam("name") String name) {
        restaurantDAO.updateRestaurant(id, name);

        return "redirect:/";
    }

}