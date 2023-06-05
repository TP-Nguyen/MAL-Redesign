<script setup lang="ts">
import RankingList from "./ranking/RankingList.vue";
import MainSlider from "./slider/MainSlider.vue";
import SeasonSlider from "./slider/SliderGroupSeason.vue";
import Slider from "./slider/SliderGroup.vue";
import Trailer from "./video/Trailer.vue";
import Review from "./reviews/Review.vue"

</script>
<template>
  <h1>{{ msg }}</h1>
  <div>
    <MainSlider type="" />
  </div>
  <div class="d-flex my-5">
    <!-- Top ranking Anime -->
    <RankingList type="airing" />
    <RankingList type="upcoming" class="mx-5" />
    <RankingList type="bypopularity" />
  </div>
  <SeasonSlider year="2023" season="spring" />
  <Slider title="MANGA_STORE" url="manga/ranking?ranking_type=favorite" />
  <Slider title="LATEST_UPDATE" url="manga/ranking?ranking_type=all" />
  <Trailer />
  <Review url="anime?q=kimetsu"/>
</template>

<script lang="ts">
export default {
     props: {
          msg: String
     }
}
</script>