import { config } from 'dotenv';

config({ path: `.env.dev` });

export const databaseConfig = {
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
}
export const expressConfig = {
    port: process.env.EXPRESS_PORT
};

export const frontendLink = {
    link: process.env.FRONTEND_LINK
}