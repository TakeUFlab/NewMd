<template>
    <div class="dashboard">
        <input type="checkbox" id="active" style="display: none;">
        <div class="options">
            <label for="active" class="menu">
                <box-icon name="menu" color="#ffffff"></box-icon>
            </label>
            <div class="name">{{ name.slice(0, 1) }}</div>
            <ul>
                <li>
                    <router-link to="/~/timetable">
                        <box-icon name="calendar" color="#ffffff"></box-icon>
                    </router-link>
                    <p>即時課表</p>
                </li>
                <li>
                    <router-link to="/~/Infos">
                        <box-icon name="info-circle" color="#ffffff"></box-icon>
                    </router-link>
                    <p>即時資訊中心</p>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Cookies from 'js-cookie';
import { getIndex } from '../../function/getIndex';
import { useStore } from 'vuex';
import 'boxicons';
const store = useStore();
const cookie = Cookies.get('CookieCode')
const name = ref('');
getIndex(cookie)
    .then(data => {
        store.state.indexData = data;
        if (Cookies.get('name') == undefined) {
            Cookies.set('name', data[1].text);
            name.value = data[1].text;
        } else {
            name.value = Cookies.get('name');
        }
    }).catch(data => {
        console.log('get index data error', data);
    });

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
    height: calc(100vh - 56px);
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
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
    color: #fff;
    margin-left: 10px;
    font-size: 1rem;
    background-color: #189bff;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 0.3s;
    opacity: 0;
}

.options > ul > li > a:hover + p {
    margin-top: -10px;
    opacity: 1;
}
.menu {
    position: fixed;
    top: 62px;
    left: 7px;
    background-color: #189bff;
    padding: 3px 4px 0px 4px;
    border-radius: 4px;
    line-height: 18px;
    margin-bottom: 10px;
    cursor: pointer;
    display: none;
}

.menu > box-icon {
    margin-top: 1px;
}

box-icon {
    width: 28px;
    height: 28px;
}

@media screen and (max-width: 480px) {
    .options {
        padding-top: 50px;
        left: -100%;
        transition: .3s ease-in-out;
    }
    .menu {
        display: inline;
    }
    #active:checked~.options {
        left: 0px;
    }
}
</style>