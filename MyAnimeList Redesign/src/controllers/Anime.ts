import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import { Anime } from '../interfaces/Anime';
import { APIConfig } from '../api/APIconfig'

// getting anime list
const getAnimeList = async (req: Request, res: Response, next: NextFunction) => {
    // get some anime
    let result: AxiosResponse = await axios.get(APIConfig.URL+`/anime`);
    let anime: [Anime] = result.data;
    return res.status(200).json({
        message: anime
    });
};

// getting a single anime
const getAnimeDetail = async (req: Request, res: Response, next: NextFunction) => {
    // get the anime id from the req
    let anime_id: string = req.params.anime_id;
    // get the anime
    let result: AxiosResponse = await axios.get(APIConfig.URL+`/anime/${anime_id}`);
    let anime: Anime = result.data;
    return res.status(200).json({
        message: anime
    });
};

// getting a anime ranking
const getAnimeRanking = async (req: Request, res: Response, next: NextFunction) => {
    // get the Anime id from the req
    let type: string = req.params.id;
    // get the Anime
    let result: AxiosResponse = await axios.get(APIConfig.URL+`/anime/ranking?ranking_type${type}`);
    let anime: Anime = result.data;
    return res.status(200).json({
        message: anime
    });
};

// getting a anime season
const getAnimeSeason = async (req: Request, res: Response, next: NextFunction) => {
    // get the anime id from the req
    let year: string = req.params.year;
    let season: string = req.params.season;
    // get the anime
    let result: AxiosResponse = await axios.get(APIConfig.URL+`/anime/season/${year}/${season}`);
    let anime: Anime = result.data;
    return res.status(200).json({
        message: anime
    });
};


export default { getAnimeList, getAnimeDetail, getAnimeRanking, getAnimeSeason};