<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
<template>
     <nav class="bg-gray-800">
          <div id="searchBar">

          </div>
          <div id="searchFilter">

          </div>
          <div class="userAccount">
               img

               username @click to user
          </div>
     </nav>
</template>