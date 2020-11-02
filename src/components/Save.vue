<template>
    <div class="save-box" >
        <h1 class="title"> Save this address? </h1>
        <div>
            <button @click="save" class="button first"> Save </button>
            <button class="button" @click="show"> Show Saved Addresses </button>
        </div>
    </div>
</template>

<script>
export default {
methods: {
        save(){
            this.$store.dispatch('sendAddress')
        },
        show(){
            let val = !this.$store.state.showSaved;
            this.$store.commit('changeShowSaved', val);

            let hide = false; 
            this.$store.commit('changeOpenSave', hide);
        }
    }
}
</script>

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
        margin-top: 0;
        color: white;
    }

    .button {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        width: 48%;
        border-radius: 3px;
        border: none;
        padding: 1rem;
        background-color: white;
        font-size: 20px;
        color: darkslategray;
    }

    .first {
        margin-right: 10px;
    }

    @media (max-width: 767.98px){
        .button {
            width: 100%;
        }

        .first {
            margin-bottom: 1rem;
        }
    }


</style>