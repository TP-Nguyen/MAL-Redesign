
<script setup lang="ts">
import Homepage from "./components/Homepage.vue";
import SideBar from "./components/navigation/SideBar.vue";
import Topbar from "./components/navigation/TopBar.vue";
import FooterBar from "./components/navigation/FooterBar.vue"
</script>
<template>
    <Homepage msg="You did it!" />
    <SideBar />
    <Topbar />
    <FooterBar/>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
</style>