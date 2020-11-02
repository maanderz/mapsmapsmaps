<template>
    <div class="save-box" >
        <h1 class="title"> Saved Addresses </h1>
        <ul id="list">
        <li v-for="item in $store.getters.showSavedList.slice(0,4)" 
            :key="item._id" 
            class="eachItem">
            {{ item.address }}
        </li>
        </ul>
    </div>
</template>

<style>
    .save-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 25%;
        padding: 2rem;
        position: absolute;
        width: 100%;
        background: #ec6433; 
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