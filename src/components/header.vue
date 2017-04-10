<template>
    <div class="home-header">
        <header>
            <div class="header-inner">
                <b>WispXy</b>
                <nav>
                    <ul>
                        <li><router-link to="./home">Home</router-link></li>
                        <li><router-link to="./list">List</router-link></li>
                        <li><router-link to="./detail">Detail</router-link></li>
                        <li><router-link to="./detail">Detail</router-link></li>
                        <li><router-link to="./detail">Detail</router-link></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div class="banner" v-if="showState">
            <h3>拿梦想做赌注,我怎么舍得输</h3>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['bannerShow'],
        data() {
            return {
               showState : this.bannerShow
            }
        }
    }
</script>
<style lang="scss">
    .home-header{
        padding:44px 0;
        background: url(../img/bg01.png), url(../img/header.jpg);
        background-position: top left, center center;
        background-size: auto, cover;
        header{
            width:1200px;   
            padding:10px;
            margin:0 auto;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            .header-inner{
                height:80px;
                line-height:80px;
                padding:0 40px;
                background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.35));
                background-color: rgba(59, 62, 69, 0.9);
                border-radius: 8px;
                box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.45), inset 0px 2px 1px 0px rgba(255, 255, 255, 0.15);
                b{
                    color:white;
                    float:left;
                    font-size: 26px;
                }
                nav{
                    float:right;
                    li{
                        float:left;
                        padding:0 12px;
                        font-weight:bold;
                        a{
                            padding:7px 12px;
                            color:white;
                            border-radius: 6px;
                        }
                        a:hover{
                            background:rgba(0, 0, 0, 0.15);
                        }
                    }
                }
            }
            
        }
        .banner{
            width: 940px;
            margin: 0 auto;
            overflow: hidden;
            padding: 100px 0;
            h3{
                font-size:34px;
                line-height:45px;
                border-top: solid 1px rgba(255, 255, 255, 0.25);
                border-bottom: solid 1px rgba(255, 255, 255, 0.25);
                color: rgba(255, 255, 255, 0.75);
                font-weight: 700;
                text-align: center;
            }

            h3:before {
                content: '';
                display: block;
                border-top: solid 1px;
                border-color: #888;
                border-color: rgba(255, 255, 255, 0.25);
                margin: 10px 0 40px 0;
            }
            h3:after {
                content: '';
                display: block;
                border-top: solid 1px;
                border-color: #888;
                border-color: rgba(255, 255, 255, 0.25);
                margin: 40px 0 10px 0;
            }
        }
    }
</style>
