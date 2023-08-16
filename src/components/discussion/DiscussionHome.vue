<template>
     <v-sheet width="470" class="text-left">
          <v-row no-gutters class="review-title">
               <v-col>{{ $t('PSEUDODATA.DISCUSSION.' + type + '.TITLE') }}</v-col> 
               
          </v-row>
          <v-row no-gutters class="review-text">
               <v-col>{{ $t('DISCUSSION.BY') }} {{ $t('PSEUDODATA.DISCUSSION.' + type + '.AUTHOR') }}</v-col> 
          </v-row>
          <v-row no-gutters class="review-text">
               <v-col >{{ $t('PSEUDODATA.DISCUSSION.' + type + '.REPLIES') }} {{ $t('DISCUSSION.REPLIES') }}</v-col>
          </v-row>
     </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Data } from '../../model/Data'
export default defineComponent({
  name: 'DiskussionHome',
  props: {
          type: String,
     }
})
</script>