<template>
    <div class="home">
        <div class="text">
            <h1>歡迎來到 New MD</h1>
            <h2>一個拯救明道人的雲端平台</h2>
            <div class="links">
                <router-link to="/~/timetable">課表查詢</router-link>
                <router-link to="/login">及時成績</router-link>
            </div>
        </div>
        <img src="../assets/PersonalSettings.svg" alt="首頁" />
    </div>
</template>

<style scoped>
.home {
    padding: 25px 10px;
    margin-left: 49px;
    display: flex;
    background-color: #fff;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
    width: calc(100vw - 50px);
    margin-top: 56px;
}

.text {
    position: static;
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    margin-bottom: 15px;
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
    max-width: calc(100vw - 55px);
    height: auto;
}

.text>.links {
    margin-top: 12px;
}
.text>.links>a {
    margin-right: 10px;
    background-color: #0091ff;
    padding: 2px 10px 5px 10px;
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
    .home {
        padding: 0;
        flex-direction: column;
        justify-content: start;
        padding-top: 20%;
    }

    .text {
        margin-right: 0;
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 400px) {
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.1rem;
    }
}
@media screen and (max-width: 350px) {
    h1 {
        font-size: 1.8rem;
    }
    h2 {
        font-size: 1rem;
    }
}
</style>