<template>
    <div class="timetable">
        <div class="search">
            <input type="text" placeholder="班級代碼" v-model="classSymbol" />
            <select name="year" id="year" v-model="selected">
                <option v-for="index in yearOptions" :value="index.value">{{ index.text }}</option>
            </select>
            <button @click="search()">搜尋</button>
        </div>
        <div class="table" v-if="showTable">
            <div class="row">
                <div class="block" v-for="index in titles" :key="index">{{ index }}</div>
            </div>
            <div class="row" v-for="(index, key) in timetable">
                <div class="block">
                    <h2>{{ key }}</h2>
                </div>
                <div class="block" v-for="item in index">
                    <h3>{{ item.classname }}</h3>
                    <p>{{ item.teacher }}</p>
                </div>
            </div>
        </div>
        <div class="loading" v-else>
            <p>資料存取中......</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Cookies from 'js-cookie';
import { useStore } from 'vuex';

type classDetail = {
    classname: string;
    teacher: string;
}

interface table{
    1: classDetail;
    2: classDetail;
    3: classDetail;
    4: classDetail;
    5: classDetail;
    6: classDetail;
    7: classDetail;
    8: classDetail;
};

interface TimeTable<T> {
    day1: T;
    day2: T;
    day3: T;
    day4: T;
    day5: T;
    day6: T;
};

const titles = reactive([
    '星期', '第一節', '第二節', '第三節', '第四節', '第五節', '第六節', '第七節', '第八節'
]);
const store = useStore();
const classSymbol = ref('');
const yearOptions = reactive([
    {
        text: '110年下學期',
        value: '1102'
    },
    {
        text: '110年寒假',
        value: '1104'
    },
    {
        text: '110年上學期',
        value: '1101'
    },
    {
        text: '109年下學期',
        value: '1092'
    }
]);
const selected = ref('1102');

let showTable = ref(false);

const userAccount = {
    userID: Cookies.get('userId'),
    userPsd: Cookies.get('userPsd')
}

let timetable = ref<TimeTable<table>>();
function getTimetable(url: string) {
    showTable.value = false;
    store.dispatch('GET_TIME_TABLE', url)
        .then(data => {
            timetable.value = data;
            showTable.value = true;
        });
}

function search() {
    if(classSymbol.value == '') return false;
    if (classSymbol.value !== '' && showTable.value == true) {
        getTimetable(`https://md-apps.herokuapp.com/API/${classSymbol.value}/${selected.value}`)
    } else {
        alert('wait a minute');
        return;
    }
}

getTimetable(`https://md-apps.herokuapp.com/mdcloud/fastTable/${userAccount.userID}/${userAccount.userPsd}`);
</script>

<style scoped>
.timetable {
    margin-left: 50px;
    width: calc(100vw - 50px);
    padding: 10px 15px;
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    transition: .3s ease-in-out;
    align-items: center;
}

.search {
    display: flex;
    flex-direction: row;
    max-width: 70vw;
    width: 490px;
    background-color: #fff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding: 10px 15px;
    margin-bottom: 30px;
}

.search > input {
    border: 1px solid #cccccc;
    border-radius: 2px;
    padding: 2px 10px 2px 5px;
    font-size: 1rem;
    outline: none;
    transition: 0.2s ease-in-out;
    margin-right: 15px;
}

.search > input:focus {
    border: 1px #189bff solid;
}
.search > select {
    border: 1px solid #cccccc;
    border-radius: 2px;
    padding: 1px 10px 1px 5px;
    font-size: 1rem;
    outline: none;
    transition: 0.2s ease-in-out;
    margin-right: 15px;
    cursor: pointer;
}

.search > select:focus {
    border: 1px #189bff solid;
}

option {
    cursor: pointer;
}

button {
    margin-right: 10px;
    background-color: #0091ff;
    padding: 2px 10px 3px 10px;
    border: 1px solid #0091ff;
    border-radius: 5px;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    outline: none;
}

.table {
    width: 778px;
    max-width: 90vw;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
}

.table > .row {
    display: flex;
    flex-direction: column;
}

.table > .row:not(:last-child) {
    border-right: 1px solid #cccccc;
}

.table > .row > .block {
    height: 110px;
    width: 110px;
    padding: 5px 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.table > .row > .block > h2 {
    font-size: 1.1rem;
    text-transform: uppercase;
}

.table > .row > .block > h3 {
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 5px;
}

.table > .row > .block > p {
    font-size: 0.9rem;
    font-weight: 300;
}

.table > .row > .block:not(:last-child) {
    border-bottom: 1px solid #cccccc;
}

.loading {
    padding: 10px 90px;
    font-size: 0.9rem;
    background-color: #15ff0038;
    color: #0eda74;
    border: #15ff00 solid 1px;
    border-radius: 5px;
}

@media screen and (max-width: 490px) {
    .timetable {
        padding: 5px 5px;
    }
}
@media screen and (max-width: 1025px) {
    .timetable {
        width: 100vw;
        margin-left: 0px;
        padding: 0;
    }
}

@media screen and (max-width: 440px) {
    .timetable {
        padding: 10px 10px;
    }
    .table {
        width: 75vw;
    }
}

@media screen and (max-width: 700px) {
    .search {
        flex-direction: column;
    }
    .search > input,
    .search > select {
        margin-right: 0;
        margin-bottom: 15px;
    }
    button {
        width: 100%;
    }
}
</style>