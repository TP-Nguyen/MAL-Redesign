/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/Anime';
const router = express.Router();

router.get('/anime', controller.getAnimeList);
router.get('/anime/:anime:id', controller.getAnimeDetail);
router.get('/anime/ranking', controller.getAnimeRanking);
router.get('/anime/season/:year/:season', controller.getAnimeSeason);


export default router;