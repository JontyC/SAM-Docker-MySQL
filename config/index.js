const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .allow(['development', 'production', 'test', 'provision'])
        .default('development'),
    PORT: Joi.number()
        .default(3000),
    DATABASE_HOST: Joi.string().uri({ allowRelative: true }).required()
        .description('Database Host'),
    DATABASE_NAME: Joi.string().required()
        .description('Database Name'),
    DATABASE_USERNAME: Joi.string().required()
        .description('Database Username'),
    DATABASE_PASSWORD: Joi.string().required()
        .description('Database Password'),
    DATABASE_PORT: Joi.number()
        .default(3306)
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    database: {
        host: envVars.DATABASE_HOST,
        port: envVars.DATABASE_PORT,
        name: envVars.DATABASE_NAME,
        username: envVars.DATABASE_USERNAME,
        password: envVars.DATABASE_PASSWORD
    }
};

module.exports = config;
