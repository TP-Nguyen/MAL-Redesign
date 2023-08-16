<script setup lang="ts">
import RankingList from "./ranking/RankingList.vue";
import MainSlider from "./slider/MainSlider.vue";
import SeasonSlider from "./slider/SliderGroupSeason.vue";
import Slider from "./slider/SliderGroup.vue";
import Trailer from "./video/Trailer.vue";
import NewsArticle from "./homepage/NewsArticle.vue";
import Discussion from "./homepage/Discussion.vue";
import Review from "./homepage/Review.vue"
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
  <Slider title="LATEST_UPDATE" url="manga/ranking?ranking_type=all" />
  <Slider title="MANGA_STORE" url="manga/ranking?ranking_type=favorite" />
  <!-- <Trailer/> -->
  <NewsArticle title="ANIME_MANGA_NEWS" type="NEWS"/>
  <NewsArticle title="FEATURED_ARTICLES" type="ARTICLES"/>
  <Discussion/>
  <Review/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Homepage'
})
</script>