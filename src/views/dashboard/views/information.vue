<template>
    <div class="information">
        <div class="profile">
            <img :src="userData.avatarUrl" alt="std avatar" />
            <div class="details">
                <h1>{{ userData.name }}</h1>
                <div class="detail">{{ userData.number }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
const stdData = store.state.indexData;
const userData = {
    name: stdData[1].text,
    number: stdData[2].text,
    avatarUrl: stdData[3].imgurl,
}

</script>

<style scoped>
.information {
    margin-left: 50px;
    width: calc(100vw - 50px);
    padding: 10px 15px;
    margin-top: 56px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.profile {
    width: 300px;
    max-width: 100%;
    background-color: #fff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 10px;
    display: flex;
}
.profile > img {
    width: 100px;
    height: auto;
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin-right: 25px;
}

.profile > details {
    display: flex;
    flex-direction: column;
}

.information > .profile > .details > .detail:nth-child(1) {
    font-size: 2.2rem;
    margin-bottom: 15px;
    font-weight: 700;
    color: #272727;
}
.information > .profile > .details > .detail {
    margin-left: 3px;
    font-size: 1rem;
    font-weight: 300;
}

@media screen and (max-width: 480px) {
    .information {
        width: 100vw;
        margin-left: 0;
    }
}
</style>