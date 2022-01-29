<template>
    <div class="loginForm">
        <h1>LOGIN</h1>
        <div>
            <p>帳號</p>
            <input type="text" placeholder="身分證字號" v-model="input.account" />
        </div>
        <div>
            <p>密碼</p>
            <input type="password" v-model="input.password" />
        </div>
        <button @click="login">LOGIN</button>
    </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie';

let pass: boolean = true;

let input: {
    account: string,
    password: string
} = {
    account: '',
    password: ''
}

function login() {
    if(pass) {
        Cookies.set('userId', input.account);
        Cookies.set('userPsd', input.password);
    }else {

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
    letter-spacing: .2px;
}

input:focus {
    border: #0091ff solid 1px;
}

div {
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
    border: none;
    border-radius: 5px;
    background-color: #0091ff;
    padding: 5px 15px;
    color: #f7f7f7;
    font-size: 1rem;
    cursor: pointer;
}
</style>