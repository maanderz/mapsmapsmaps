<template>
    <nav class="menu-wrapper" >
        <button class="menu-btn" has-ripple="true" @click="isActive = !isActive">
            <i></i>
            <i></i>
            <i></i>
            <span class="ripple"></span>
        </button>
        <ul class="menu"  v-bind:class="{ active: !isActive }" >
            <li class="menuitem-wrapper">
                <div class="icon-holder">
                    <a href="#" class="menu-item">
                        <i class="material-icons">home</i>
                    </a>
                </div>
                <svg class="circle-holder">
                    <circle r="88" cx="50%" cy="50%" fill="none">
                    </circle>
                </svg>
            </li>
            <li class="menuitem-wrapper">
                <div class="icon-holder">
                    <a href="#" class="menu-item">
                        <i class="material-icons">face</i>
                    </a>
                </div>
                <svg class="circle-holder">
                    <circle r="88" cx="50%" cy="50%" fill="none">
                    </circle>
                </svg>
            </li>
            <li class="menuitem-wrapper">
                <div class="icon-holder">
                    <a href="#" class="menu-item">
                        <i class="material-icons">android</i>
                    </a>
                </div>
                <svg class="circle-holder">
                    <circle r="88" cx="50%" cy="50%" fill="none">
                    </circle>
                </svg>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data () {
        return {
            isActive: true
        }
    }
}
</script>

<style lang="scss">
    $spin-speed: 0.7s;
    $color-collection: ('#2980b9', '#c0392b', '#1abc9c', '#f39c12', '#8e44ad');
    $degFactor: 71.5;

    body {
        box-sizing: border-box;
        transition: all 0.25s ease-in;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    a {color: white;text-decoration: none;}

    .menu-wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 30rem;
        height: 30rem;
        margin-top: -15rem;
        margin-left: -15rem;
    }

    .menu {
        width: 100%;
        height: 100%;
        transform: scale(0);
        transform-origin: center;
        transition: all 0.08s ease-in-out;
    
        li {
            position: absolute;
            top: 50%;
            left: 50%;
            display: inline-block;
            width: 4rem;
            height: 80%;
            margin-top: -12rem;
            margin-left: -2rem;
            text-align: center;
            
            &.spin {
                z-index: 5;
            .icon-holder {animation: spin $spin-speed linear forwards;}
            .circle-holder {
                display: block;
                circle {animation: dash $spin-speed linear forwards;}
            }
        }
    }
    
    a {
        position: relative;
        display: inline-block;
        width: 4rem;
        height: 4rem;
        margin-top: 4.5rem;
        padding: 1rem;
        border-radius: 100%;
        transform: scale(1,1);
    }
    
        &.active {
            transform: scale(1);
            animation: bouncein linear 0.1s forwards 1;
        }
    }

    .circle-holder {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 0;
        display: none;
        width: 24rem;
        height: 24rem;
        margin: -12rem;
        padding: 1rem;
        transform: rotate(-90deg);
    }

    .menu-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        display: block;
        width: 4rem;
        height: 4rem;
        margin: -2rem;
        padding: 1.3rem;
        background: #FFC726;
        border: none;
        box-shadow: none;
        border-radius: 100%;
        text-align: center;
        line-height: 1;
        appearance: none;
        outline: none;
        cursor: pointer;
        font-size: 0;

        i {
            position: relative;
            z-index: 11;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            height: 0.1rem;
            margin: 0 auto;
            background: #2c3e50;
        }

        i:nth-child(2) {
            margin: 0.34rem auto;
        }
    }

    @for $i from 0 to length($color-collection) {
        .menu li:nth-child(#{$i+1}) {
            transform: rotate(#{$i*$degFactor}deg);
            
            a {
            transform: rotate(-#{$i*$degFactor}deg);
            background: unquote(nth($color-collection, $i+1));
            }
            circle {stroke: unquote(nth($color-collection, $i+1));}
        }

        .menu li:nth-child(3) {
            transform: rotate(-75deg);

            a {
                transform: rotate(90deg);
            }
        }
    }
</style>