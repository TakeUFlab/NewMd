<template>
    <div class="dashboard">
        <div class="options">
            <div class="name">{{ name.slice(0, 1) }}</div>
            <ul>
                <li>
                    <router-link to="/~/timetable">
                        <ion-icon name="calendar-outline"></ion-icon>
                    </router-link>
                    <p>即時課表</p>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="information-circle-outline"></ion-icon>
                    </a>
                    <p>即時資料查詢</p>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const avatar: string = 'https://asp.mingdao.edu.tw/php/std/stu_photo/31935263.jpg';
const name = ref('葉柏辰')
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: row;
}

.options {
    position: fixed;
    top: 56px;
    background-color: #189bff;
    width: 50px;
    height: calc(100vh - 56px);
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.name {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 10px;
    background-color: #0077ff;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: default;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 0 0 4px;
}

ul > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 200px;
}

ul > li > a:hover > ion-icon {
    background-color: #0077ff;
}

ul > li > a:hover + p {
    display: block;
}

ul > li > a {
    color: #fff;
    text-decoration: none;
}

ul > li > p {
    color: #fff;
    margin-left: 10px;
    font-size: 1rem;
    background-color: #189bff;
    padding: 5px 10px;
    border-radius: 5px;
    display: none;
    transition: 0.3s;
}

ion-icon {
    padding: 8px;
    border-radius: 50%;
    font-size: 25px;
    position: relative;
    top: 2px;
}
</style>