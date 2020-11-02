<template>
   <div class="recent-box">
        <h1 class="title"> Recent Searches </h1>
        <li v-for="(item,index) in $store.getters.showRecentList" 
            :key="index" 
            class="eachItem">
            {{ item }}
        </li>
    </div>
</template>

<style>
    .recent-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 25%;
        padding: 2rem;
        position: absolute;
        width: 100%;
        background: #1abc9c; 
        text-align: center;
    }

    .title {
        font-weight: 500;
        margin-top: 0;
        color: white;
    }
</style>