<template>
     <v-sheet width="470" class="text-left">
          <v-row no-gutters class="review-title">
               <v-col>{{ info.title }} {{ $t('DISCUSSION.DISCUSSION') }}</v-col> 
               <v-col class="text-right review-text">{{ info.replies }} {{ $t('DISCUSSION.REPLIES') }}</v-col>
          </v-row>
          <v-row no-gutters class="review-text">
               <v-col>{{ info.author }}</v-col> <v-col class="text-right">{{  }}</v-col>
          </v-row>
          <v-row no-gutters class="review-text">
               <v-col>{{ info.date }}</v-col> <v-col class="text-right">{{  }}</v-col>
          </v-row>
     </v-sheet>
</template>

<script lang="ts">
export default {
     props: {
          info: {}
     }
}
</script>