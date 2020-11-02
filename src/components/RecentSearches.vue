<template>
   <div class="recent-box">
        <h1 class="title"> Recent Searches </h1>
        <ul id="list">
            <li v-for="(item,index) in $store.getters.showRecentList" 
                :key="index" 
                class="eachItem">
                {{ item }}
            </li>
        </ul>
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

    #list {
        font-family: 'Montserrat', sans-serif;
        list-style: none;
        text-align: center;
        color: white;
        font-weight: 300;
    }

    .eachItem {
        margin-bottom: 1rem;
    }

    @media (max-width: 767.98px){
        #list {
            text-align: left;
        }    
    }
</style>