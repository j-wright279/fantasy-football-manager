<script setup>

</script>

<template>
        <div class="container">
            <h1>Supercharge Your Fantasy Football Experience</h1>
            <p>Welcome to the Fantasy Football Statistics Manager, here you can find up-to-date details on all your favourite players!</p>
            <div class="wiggly-motif">
                <svg id="visual" viewBox="0 0 900 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 91L30 103.5C60 116 120 141 180 143C240 145 300 124 360 106.7C420 89.3 480 75.7 540 81.7C600 87.7 660 113.3 720 121.3C780 129.3 840 119.7 870 114.8L900 110" fill="none" stroke-linecap="round" stroke-linejoin="miter" stroke="#4ade80" stroke-width="40"></path></svg>
            </div>
        </div>
        <div class="background"></div>
</template>

<style scoped>
    h1 {
        font-size: 50px;
        margin: 30px 0;
        font-weight: 700;
        text-align: center;
        line-height: 57px;
    }
    p {
        margin: 0 15px;
        color: #bababa;
        text-align: center;
    }
    .container {
        max-width: 80%;
        margin: 3vh auto;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 75vh;
        max-width: 50%;
    }

    .wiggly-motif {
        z-index: -2;
        width: 100%;
        justify-content: center;
        display: flex;
        margin: 0 auto;
    }

    .wiggly-motif > svg {
        overflow: visible;
    }

    .background {
        background-image: url("~/img/dot-seamless-pattern.svg");
        height: 65vh;
        width: 80%;
        background-position:center;
        background-repeat: repeat;
        position: absolute;
        top: 22vh;
        left: 10%;
        opacity: 10%;
        z-index: -1;
    }

    @media only screen and (max-width: 950px) {
        .wiggly-motif > svg{
            width: 100vw
        }
        .container{
            max-width: 70%;
        }
    }
</style>
