<template>
    <div class="save-box" >
        {{ $store.getters.openSave }}
        <button @click="save"> Save </button>
    </div>
</template>

<script>
export default {
methods: {
        save(){
            this.$store.dispatch('sendAddress')
        }
    }
}
</script>

<style>
    .save-box {
        display: flex;
        justify-content: center;
        top: 25%;
        padding: 2rem;
        position: absolute;
        width: 100%;
        background: #c0392b; 
    }
</style>