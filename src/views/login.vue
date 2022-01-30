<template>
    <div class="loginForm">
        <h1>LOGIN</h1>
        <div class="error" v-show="showError">
            <span>密碼或帳號不正確</span>
        </div>
        <div class="input">
            <p>帳號</p>
            <input type="text" placeholder="身分證字號" v-model="account" />
        </div>
        <div>
            <p>密碼</p>
            <input type="password" v-model="password" />
        </div>
        <button @click="login">LOGIN</button>
    </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import store from '../store/index';

const router = useRouter();
let pass: boolean = true;
const showError = ref(false);
const account = ref('');
const password = ref('');


function login() {
    if (pass) {
        Cookies.set('userId', account.value);
        Cookies.set('userPsd', password.value);
        store.state.isLogin = true;
        router.push('/~');
    } else {
        showError.value = true;
    }
}
</script>

<style scoped>
.loginForm {
    margin: calc(100vh / 4 - 20px) auto;
    background-color: #ffffff;
    border: #cccccc solid 1px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    max-width: 80vw;
    padding: 20px 10px;
}

input {
    font-size: 1rem;
    width: 200px;
    outline: none;
    border: #c0c0c0 solid 1px;
    border-radius: 2px;
    padding: 2px 5px;
    transition: 0.3s;
    letter-spacing: 0.2px;
}

input:focus {
    border: #0091ff solid 1px;
}

.input {
    margin-top: 5px;
    margin-bottom: 15px;
}

p {
    color: #c0c0c0;
    font-weight: 300;
}

h1 {
    color: #252525;
}

button {
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    background-color: #0091ff;
    padding: 5px 15px;
    color: #f7f7f7;
    font-size: 1rem;
    cursor: pointer;
}
.error {
    background-color: #f78e8e;
    color: #ff0000;
    font-size: 1rem;
    font-weight: 300;
    padding: 8px 35px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 15px;
}
</style>