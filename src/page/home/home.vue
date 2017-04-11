<template>
    <div class="home">
        <header-top :bannerShow="1"></header-top>
        <div class="content"></div>
    </div>
</template>
<script>
import headerTop from '../../components/header'
    export default {
        data() {
            return {

            }
        },
        components:{
            headerTop
        },
        
    }
</script>
<style lang="scss">
    .content{
        background-color: #fff;
        background-image: url(../../img/bg03.png), url(../../img/bg04.png), url(../../img/bg02.png);
        background-repeat: no-repeat, no-repeat, repeat;
        background-size: 100% 600px, 100% 600px, auto auto;
        background-position: top center, bottom center, top left;
    }
</style>
