import axios from "axios";
import * as dotenv from 'dotenv';
dotenv.config();

const aocEndpoint = axios.create({
    baseURL: 'https://adventofcode.com',
    headers: { 
        //'Content-Type': 'application/json',
        'Cookie': process.env.cookies,
     },
});

export async function getAOCInput(year, day) {
    const { data } = await aocEndpoint.get(`/${year}/day/${day}/input`);
    return data;
}