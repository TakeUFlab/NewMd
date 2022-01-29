<template>
  <header>
    <div class="logo">New MD</div>
    <nav>
      <router-link to="/login">Login</router-link>
    </nav>
  </header>
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Cookies from 'js-cookie';
const router = useRouter();

let userId = Cookies.get('userId');
if (userId == undefined) {
  router.push('/');
} else {
  
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans TC", sans-serif;
}

header {
  background-color: #ffffff;
  border-bottom: #cccccc solid 0.5px;
  padding: 10px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header > .logo {
  color: #0091ff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1.5px;
}

header > nav > a {
  background-color: #0091ff;
  padding: 2px 10px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 300;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
}

body {
  background-color: #f8f9fd;
}
</style>
