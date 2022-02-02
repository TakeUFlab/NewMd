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
    width: calc(100vw - 200px);
    padding: 10px 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transition: .3s ease-in-out;
    margin-left: 200px;
}
.profile {
    max-width: 100%;
    height: 170px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    display: flex;
}
.profile > img {
    width: 90px;
    height: 130px;
    object-fit: cover;
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

@media screen and (max-width: 1025px) {
    .information {
        width: 100vw;
        margin-left: 50px;
    }
}
</style>