<template>
     <v-card
     class="mx-auto my-5 px-5 pb-5" max-width="1000"
     >
          <v-card-title class="text-justify px-0">
               {{ $t('TITLE.MOST_POPULAR_TRAILERS') }}
          </v-card-title>
          <video>https://www.youtube.com/watch?v=KKzmOh4SuBc</video>
          <iframe height="" width="" src="https://www.youtube.com/watch?v=KKzmOh4SuBc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <LazyYoutubeVideo url="https://www.youtube.com/watch?v=KKzmOh4SuBc"/> -->
     </v-card>
</template>