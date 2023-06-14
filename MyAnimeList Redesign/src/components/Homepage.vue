<script setup lang="ts">
import RankingList from "./ranking/RankingList.vue";
import MainSlider from "./slider/MainSlider.vue";
import SeasonSlider from "./slider/SliderGroupSeason.vue";
import Slider from "./slider/SliderGroup.vue";
import Trailer from "./video/Trailer.vue";
import AnimeMangaNews from "./news/AnimeMangaNews.vue";
import Discussion from "./discussion/DiscussionMain.vue";
import Articles from "./articles/ArticlesMain.vue";
import Review from "./reviews/Review.vue"
const props = defineProps({
  msg: String
})

</script>

<template>
  <MainSlider type="" />
  <div class="d-flex my-5">
    <!-- Top ranking Anime -->
    <RankingList type="airing" />
    <RankingList type="upcoming" class="mx-5" />
    <RankingList type="bypopularity" />
  </div>
  <SeasonSlider year="2023" season="spring" />
  <Slider title="MANGA_STORE" url="manga/ranking?ranking_type=favorite" />
  <Slider title="LATEST_UPDATE" url="manga/ranking?ranking_type=all" />
  <Trailer/>
  <AnimeMangaNews/>
  <Discussion/>
  <Articles/>
  <Review/>
</template>