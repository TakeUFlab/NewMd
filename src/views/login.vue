<template>
    <div class="loginForm">
        <h1>LOGIN</h1>
        <div class="error" v-show="showError">
            <span>{{ errorMsg }}</span>
        </div>
        <div class="input">
            <p>帳號</p>
            <input type="text" placeholder="身分證字號" v-model="loginData.userID" />
        </div>
        <div>
            <p>密碼</p>
            <input type="password" v-model="loginData.userPsd" />
        </div>
        <button @click="login" v-html="loginMsg"></button>
    </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();
const showError = ref(false);
const errorMsg = ref('');
const loginData = reactive({
    userID: '',
    userPsd: ''
});
const loginMsg = ref('LOGIN');

function login() {
    showError.value = false;
    loginMsg.value = "<i class='bx bx-loader-circle bx-spin bx-rotate-180' style='color:#ffffff' ></i>";
    store.dispatch('LOGIN', loginData)
        .then(status => {
            if (status != 3) {
                if (status == 0) {
                    Cookies.set('userId', loginData.userID);
                    Cookies.set('userPsd', loginData.userPsd);
                    Cookies.set('CookieCode', store.state.cookie);
                    router.push('/~');
                } else if (status == 1) {
                    showError.value = true;
                    errorMsg.value = '帳號不正確';
                    loginMsg.value = 'LOGIN';
                } else if (status == 2) {
                    showError.value = true;
                    errorMsg.value = '密碼不正確';
                    loginMsg.value = 'LOGIN';
                } else {
                    console.log(status);
                }
            } else {
                console.error('欸不是錯了啦', status);
            }
        }).catch(err => {
            console.error('欸不是又錯了啦', err);
        })

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

i {
    font-size: 24px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 77.38px;
    height: 30px;
    color: #f7f7f7;
    font-size: 1rem;
    cursor: pointer;
}
.error {
    background-color: #fdaaaa;
    color: #ff0000;
    border: 1px solid #ff0000;
    font-size: 0.9rem;
    font-weight: 300;
    padding: 4px 50px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 15px;
}
</style>