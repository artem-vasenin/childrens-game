<template>
  <v-app-bar app color="teal" dark class="header">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/robot.png"
        transition="scale-transition"
        width="100"
      />

      <span class="ml-2">Уроки с Робо-Умником</span>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >
      <span class="mr-2">Latest Release</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script src="./Header.js"></script>
<style src="./Header.scss" lang="scss"/>
