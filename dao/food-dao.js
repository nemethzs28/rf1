const db = require('../config/db');

class FoodDAO {

    async getFoods(){
        let results = await db.query(`SELECT * FROM public.food `).
        catch(console.log);
        return results.rows;
    };

    async getFoodbyID(id){
        let results = await db.query(`SELECT * FROM FOOD WHERE id = $1`,[id]).
        catch(console.log);
        return results.rows[0];
    };

    async getFoodsbyRestaurant(restaurantID){
        let results = await db.query(`SELECT * FROM FOOD WHERE restaurantID = $1`,[restaurantID]).
        catch(console.log);
        return results.rows;
    };

    async createFood(allergens, description, price, name, category, restaurantID, img){
        await db.query(`INSERT INTO FOOD (allergens, description, price, name, category, restaurantID, img) VALUES ($1, $2, $3, $4, $5, $6, $7)`,[allergens, description, price, name, category, restaurantID, img])
            .catch(console.log);
        return;
    };

    async updateFood(id, allergens, description, price, name, category, restaurantID, img){
        await db.query(`UPDATE FOOD SET allergens = $1, description = $2, price = $3, name = $4, category = $5, restaurantID = $6, img = $7 WHERE id = $8`,[allergens, description, price, name, category, restaurantID, img, parseInt(id)])
            .catch(console.log);

        return;
    };

    async deleteFood(id){
        await db.query(`DELETE FROM FOOD WHERE id=$1`,[parseInt(id)])
            .catch(console.log);

        return;
    };

};

module.exports = FoodDAO;
