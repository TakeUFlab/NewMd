<template>
    <div class="dashboard">
        <div class="options">
            <div class="name">{{ name.slice(0, 1) }}</div>
            <ul>
                <li>
                    <router-link to="/~/timetable">
                        <box-icon name="calendar" color="#ffffff"></box-icon>
                    </router-link>
                    <p>即時課表</p>
                </li>
                <li>
                    <a href="#">
                        <box-icon name="info-circle" color="#ffffff"></box-icon>
                    </a>
                    <p>即時資訊中心</p>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'boxicons';

const name = ref('葉柏辰');
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: row;
}
.mobileOptions {
    display: none;
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
.options > .name {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 10px;
    background-color: #0077ff;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: default;
}
.options > label {
    font-weight: 500;
    margin-bottom: 10px;
    background-color: #0077ff;
    padding: 6px 5px 0px 5px;
    border-radius: 50%;
    cursor: default;
}

.options > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 0 0 4px;
}

.options > ul > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 200px;
}

.options > ul > li > a:hover {
    background-color: #0077ff;
}

.options > ul > li > a {
    color: #fff;
    text-decoration: none;
    border-radius: 50%;
    margin-bottom: 10px;
    padding: 6px 6px 0 6px;
}

.options > ul > li > p {
    margin-top: -30px;
    color: #fff;
    margin-left: 10px;
    font-size: 1rem;
    background-color: #189bff;
    padding: 5px 10px;
    border-radius: 5px;
    opacity: 0;
    transition: 0.3s;
}

.options > ul > li > a:hover + p {
    margin-top: -10px;
    opacity: 1;
}

box-icon {
    width: 28px;
    height: 28px;
}

@media screen and (max-width: 480px) {
    .options{
        background-color: transparent;
    }
    .options > ul > li > a {
        background-color: #0077ff;
    }
}
</style>