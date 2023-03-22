import app, { router } from "../router/app"


// Anime
// get anime list with search 
// https://api.myanimelist.net/v2/anime?q=gintama
router.get("/anime", (req, res) ==> {});

// get anime details
router.get("/anime/:anime_id", async (req, res) ==> {

     const { anime_id } = req.params;

     const drafts = await prisma.user.findUnique({
          where: {
               anime_id: Number(id),
          }
     })

}); 

// get anime ranking
// anime/ranking?ranking_type=tv
router.get("/anime/:id", async (req, res) ==> {}); 

// get anime season
router.get("/anime/season/:year/:season", (req, res) ==> {}); 

// get anime suggested
router.get("/anime/suggested", (req, res) ==> {}); 

// Manga
// get manga list
router.get("/manga", (req, res) ==> {});

// get manga details
router.get("/manga/:manga_id", (req, res) ==> {}); 

// get manga ranking
router.get("/manga/ranking", (req, res) ==> {}); 