<template>
    <div class="list">
        <header-top :bannerShow="0"></header-top>
        <h1 class="text-center">List</h1>
    </div>
</template>
<script>
import headerTop from '../../components/header'
    export default {
        data() {
            return {
                bannerShow : false
            }
        },
        components:{
            headerTop
        },
        
    }
</script>
<style>
    
</style>
