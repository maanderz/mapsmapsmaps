<template>
    <div class="save-box">
        <h1 class="title"> Save this address? </h1>
        <div>
            <button @click="save" class="button first"> Save </button>
            <button class="button" @click="show"> Show Saved Addresses </button>
        </div>
    </div>
</template>

<script>
export default {
     data () {
        return {
            isActive: true,
            address: ''
        }
    },
    methods: {
            save() {
                if ( this.$store.state.address === '') {
                    alert('Please enter an address')
                } else {
                    this.$store.dispatch('sendAddress')
                }
                this.$store.commit('changeOpenSave', false); 
            },
            show(){
                let save = this.$store.state.openSave;
                let show = this.$store.state.showSaved;
                
                // When 'Show Saved Addresses' is clicked
                if (save && !show){
                    this.$store.commit('changeShowSaved', true);
                    this.$store.commit('changeOpenSave', false);
                }

                this.$store.dispatch('fetchAddresses');
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
        font-weight: 500;
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