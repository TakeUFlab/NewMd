<template>
    <div class="dashboard">
        <input type="checkbox" id="active" style="display: none;" />
        <div class="options">
            <label for="active" class="menu">
                <box-icon name="menu" color="#ffffff"></box-icon>
            </label>
            <div class="name">
                <div class="avatar">{{ name.slice(0, 1) }}</div>
                <p>{{ name }}</p>
            </div>
            <ul>
                <li>
                    <router-link to="/~/timetable">
                        <box-icon name="calendar" color="#ffffff"></box-icon>
                        <p>即時課表</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/~/Infos">
                        <box-icon name="info-circle" color="#ffffff"></box-icon>
                        <p>即時資訊中心</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Cookies from 'js-cookie';
import { getIndex } from '../../function/getIndex';
import { useStore } from 'vuex';
import { Login } from '../../function/Login';
import 'boxicons';
const store = useStore();
const name = ref('');
let cookie = '';
const account = {
    userID: Cookies.get('userId'),
    userPsd: Cookies.get('userPsd')
}
Login(account.userID, account.userPsd)
    .then(data => {
        cookie = data.cookie;
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
    });



</script>

<style>
a {
    text-decoration: none;
    color: #ffffff;
}
.dashboard {
    margin-top: 56px;
    display: flex;
    flex-direction: row;
}
.options {
    position: fixed;
    height: calc(100vh - 56px);
    padding: 10px 0 0 0;
    background-color: #0091ff;
    width: 200px;
    display: flex;
    flex-direction: column;
    cursor: default;
    overflow: hidden;
    transition: 0.2s cubic-bezier(0.76, -0.11, 0.45, 1.05);
}
.options > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
}
.options > ul > li {
    line-height: 12px;
    padding: 0;
}
.options > ul > li > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    margin: 0 5px 0 3px;
    border-radius: 2px;
}
.options > ul > li > a:hover {
    background-color: #f0eeee85;
}
.options > ul > li > a > box-icon {
    margin-right: 20px;
}
.options > label {
    margin: 3px 0 3px 15px;
    display: inline;
    padding: 0;
    line-height: 12px;
    padding: 3px;
    border-radius: 5px;
    width: 34px;
    cursor: pointer;
    background-color: #0091ff;
    transition: 0.3s;
}
.options > label:hover {
    background-color: #f0eeee85;
}
.options > .name {
    display: flex;
    align-items: center;
    margin: 15px 0 15px 10px;
}
.options > .name > .avatar {
    background-color: #0051ff;
    color: #ffffff;
    padding: 5px;
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
    text-align: center;
    border-radius: 50%;
    margin-right: 15px;
}

.options > .name > p {
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: 700;
}

#active:checked ~  .options {
    height: 60px;
    width: 50px;
    background-color: transparent;
}

#active:checked ~ .options.options > label:hover {
    background-color: #0091ff;
}

#active:checked ~ .home {
    margin-left: 0;
    width: 100vw;
}

#active:checked ~ .timetable {
    margin-left: 0;
    width: 100vw;
}

#active:checked ~ .information {
    margin-left: 0;
    width: 100vw;
}

box-icon {
    width: 28px;
    height: 28px;
}

@media screen and (max-width: 1025px) {
    .options {
        width: 50px;
        height: 60px;
        align-items: center;
        background-color: transparent;
        transition: 0.5s cubic-bezier(0.76, -0.11, 0.45, 1.05);
    }
    .options > ul > li > a {
        padding: 8px;
        margin: 0 5px 0 6px;
    }
    .options > ul > li > a > box-icon {
        margin-right: 0;
    }
    .options > ul > li > a > p {
        display: none;
    }
    .options > .name {
        margin: 15px 0;
    }
    .options > .name > p {
        display: none;
    }
    .options > .name > .avatar {
        margin-right: 0;
    }
    .options > label {
        margin: 3px 0 3px 0;
    }
    .options > label:hover {
        background-color: #0091ff;
    }
    #active:checked ~ .options {
        background-color: #0091ff52;
        height: calc(100vh - 56px);
    }
    #active:checked ~ .options > label {
        margin: 0;
    }
}
</style>