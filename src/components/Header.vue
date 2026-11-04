<template>

    <header class="header">
        <div class="logo">
            QuizMaster
        </div>
        <nav class="navigation">
            <RouterLink to="/">Главная</RouterLink>
            <RouterLink to="/history">История</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #222235;
    border-bottom: 1px solid #34344d;
}
.logo{
    font-size: 26px;
    font-weight: bold;
    color: #a78bfa
}
.navigation{
    display: flex;
    gap: 30px;
}
.navigation a{
    color: #c4c4d4;
    transition: color 0.3s;
}
.navigation a:hover,
.navigation a.router-link-active{
    color: #a78bfa;
}
@media(max-width: 600px){
    .header{
        padding: 20px;
        flex-direction: column;
        gap: 20px;
    }
}
</style>