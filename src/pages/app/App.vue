<template>
  <v-app class="app">
    <Header/>

    <v-content>
      <transition name="fade" mode="out-in">
        <router-view class="view"/>
      </transition>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script src="./App.js"></script>
<style src="./App.scss" lang="scss"/>
