<template>
    <div class="welcome">
        <div class="text">
            <h1>歡迎來到 New MD</h1>
            <h2>一個拯救明道人的雲端平台</h2>
            <div class="links">
                <router-link to="/login">立即登入</router-link>
            </div>
        </div>
        <img src="../assets/Social Media.svg" alt="明道中學" />
    </div>
</template>

<style scoped>
.welcome {
    padding: 25px 10px;
    display: flex;
    background-color: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
}

.text {
    position: static;
    display: flex;
    flex-direction: column;
    margin-right: 100px;
}

h1 {
    color: #0091ff;
    font-size: 2.5rem;
    font-weight: 700;
}
h2 {
    color: #313131;
    margin-top: 5px;
    font-size: 1.5rem;
    font-weight: 700;
}

img {
    width: 500px;
    max-width: 90vw;
    height: auto;
}

.text>.links {
    margin-top: 12px;
}

.text>.links>a {
    background-color: #0091ff;
    padding: 2px 40px 5px 40px;
    border: 1px solid #0091ff;
    border-radius: 5px;
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: .2s ease-in-out;
}

.text>.links>a:hover {
    background-color: transparent;
    border: 1px solid #0091ff;
    color: #0091ff;
}

@media screen and (max-width: 1000px) {
    .welcome {
        flex-direction: column;
    }

    .text {
        margin-right: 0;
    }
}
</style>