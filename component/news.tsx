'use client';
import axios from "axios";
import { useEffect } from "react";

const News = () => {
    return (
        useEffect(() => {
            const getData =async () => {
                try{
                    const {data} = await axios.get('http://localhost:8000/api/news');
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            };
    
            getData();
        }, [])
    );
}

export default News;