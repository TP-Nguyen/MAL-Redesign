<script setup lang="ts">

import RankingList from './ranking/rankingList.vue';
defineProps<{ msg: string }>()
// async getallData(): void {
//     //   try {
//     //   let res = await this.axios.get("/anime/918"
//     //  );
//     //   console.log(res.data);
//     // } catch (e) {
//     //   console.error(e);
//     // }
// }
</script>

<template>
  <h1>{{ msg }}</h1>
<RankingList type="airing" />
</template>