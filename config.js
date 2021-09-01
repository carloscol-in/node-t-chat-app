const config = {
    db_url: `${process.env.MONGO_DB_HOST}://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_REMAIN}`,
    port: process.env.API_SERVER_PORT || 3000,
    host: process.env.API_SERVER_HOST || 'http://localhost',
    public_route: process.env.API_SERVER_PUBLIC_ROUTE || '/app'
};

module.exports = config;