const db = require('../config/db');

class UsersDao {

    async getUsers(){
        let results = await db.query(`SELECT * FROM public.USER`).
        catch(console.log);
        return results.rows;
    };

    async getOneUser(email){
        let result = await db.query('SELECT * FROM public.USER WHERE email = $1',[email])
            .catch(console.log);
        return result.rows[0];
    };

    async getOneUserById(id){
        let result = await db.query('SELECT * FROM public.USER WHERE id = $1',[id])
            .catch(console.log);
        return result.rows[0];
    };

    async createUser(name, phone, email, password, city, street_housenumber, zipcode, floor_doornumber){
        await db.query('INSERT INTO public.USER (name, phone, email, password, city, street_housenumber, permission, zipcode, floor_doornumber) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
                                                [name, phone, email, password, city, street_housenumber, "user" , zipcode, floor_doornumber])
            .catch(console.log);
        return;
    };

    async updateUser(id, name, phone, email, password, city, street_housenumber, permission, zipcode, floor_doornumber){
        await db.query(`UPDATE public.USER SET name = $1, phone = $2, email = $3, password = $4, city = $5, street_housenumber = $6,
                        permission = $7, zipcode = $8, floor_doornumber = $9 WHERE id = $10`,
            [name, phone, email, password, city, street_housenumber, permission, zipcode, floor_doornumber, parseInt(id)])
            .catch(console.log);

        return;
    };


    async updateUserNoPassword(id, name, phone, email, city, street_housenumber, permission, zipcode, floor_doornumber){
        await db.query(`UPDATE public.USER SET name = $1, phone = $2, email = $3, city = $4, street_housenumber = $5,
                        permission = $6, zipcode = $7, floor_doornumber = $8 WHERE id = $9`,
                        [name, phone, email, city, street_housenumber, permission, zipcode, floor_doornumber, parseInt(id)])
            .catch(console.log);

        return;
    };

    async deleteUser(id){
        await db.query(`DELETE FROM public.USER WHERE id=$1`,[parseInt(id)])
            .catch(console.log);

        return;
    };

}

module.exports = UsersDao;