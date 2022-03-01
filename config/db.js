const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'ridygjqylbrayl',
    host: 'ec2-54-229-68-88.eu-west-1.compute.amazonaws.com',
    database: 'd5fd3i11un04ef',
    password: 'ec629487f59f2158c32294eca0010ee1dc8d9342bda3284f7a138cddffbd00a8',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;