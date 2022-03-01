const db = require('../config/db');

class RestaurantDAO {

    async getRestaurants(){
        let results = await db.query(`SELECT * FROM RESTAURANT`).
        catch(console.log);
        return results.rows;
    };

    async getOneRestaurant(id){
        let result = await db.query('SELECT * FROM RESTAURANT WHERE id = $1',[id])
            .catch(console.log);
        return result.rows[0];
    };

    async createRestaurant(name, image, priceCategory, description, rating){
        await db.query('INSERT INTO RESTAURANT (name, image, priceCategory, description, rating) VALUES ($1, $2, $3, $4, $5)',[name, image, priceCategory, description, rating])
            .catch(console.log);
        return;
    };

    async updateRestaurant(id, name, image, pricecategory, description, rating){
        await db.query(`UPDATE restaurant SET name = $1, image = $2, pricecategory = $3, description = $4, rating = $5 WHERE id = $6`,[name, image, pricecategory, description, rating, parseInt(id)])
            .catch(console.log);

        return;
    };

    async deleteRestaurant(id){
        await db.query(`DELETE FROM RESTAURANT WHERE id=$1`,[parseInt(id)])
            .catch(console.log);

        return;
    };

    async getRestaurantsByFilter(filter){
        let result = await db.query('SELECT * FROM RESTAURANT WHERE LOWER(name) LIKE $1', ['%' + filter + '%'])
            .catch(console.log);
        return result.rows;
    };

    async getRestaurantsBySorting(id){
        let result;
        switch (id){
            case 'priceIncreasing':
                result = await db.query('SELECT * FROM restaurant ORDER BY pricecategory ASC').catch(console.log);
                break;
            case 'priceDecreasing':
                result = await db.query('SELECT * FROM restaurant ORDER BY pricecategory DESC').catch(console.log);
                break;
            case 'rateIncreasing':
                result = await db.query('SELECT * FROM restaurant ORDER BY rating ASC').catch(console.log);
                break;
            case 'rateDecreasing':
                result = await db.query('SELECT * FROM restaurant ORDER BY rating DESC').catch(console.log);
                break;
            case 'nameIncreasing':
                result = await db.query('SELECT * FROM restaurant ORDER BY name ASC').catch(console.log);
                return result.rows;
            case 'nameDecreasing':
                result = await db.query('SELECT * FROM restaurant ORDER BY name DESC').catch(console.log);
                break;
        }
    };
};

module.exports = RestaurantDAO;