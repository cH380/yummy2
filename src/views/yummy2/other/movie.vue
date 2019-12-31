<template>
  <div id="spp">
       <meta name="referrer" content="never">
    <router-link to="/home">
      <van-nav-bar left-text="返回" left-arrow></van-nav-bar>
    </router-link>
    <div>
        <ul class="movie-ul">
            <li class="movie-li" v-for="(item,index) of list" :key="index">
                <div class="d-img">
                    <img :src="item.images.small" alt="">
                </div>
                <div class="d-title">
                    <div class="d-title2">
                        {{item.original_title}}
                    </div>
                </div>
                <div class="van-btn1">
                     <van-button type="primary" size="small" class="van-btn2" @click=" detail(item.alt)">小型按钮 </van-button>
                </div>
            </li>
        </ul>
    </div>
    <!-- 添加分页 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
        url: 'https://douban.uieee.com/v2/movie/in_theaters',
        list: [],
        url2:''
    }
  },
 mounted() {
      this.$axios.get(this.url).then(data =>{
          console.log(data)
          this.list = data.data.subjects
          console.log( this.list)
      }).catch()
  },
  methods: {
      detail(i) {
        //   this.$router.push({name:'Details',params:{alt:i}})
        console.log(i)
        this.url2 = i
        window.location.href = i
      }
  }
};
</script>
<style lang="scss">
// 全局颜色定义
    // 黑色
    $color1:#000;
    $color2:#fff;
    $color3:#f0f;
    #spp {
    //    background:$color1;
    }
    .movie-ul {
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        .movie-li {
            width: 44%;
            height: 180px;
            // background: #f00;
            margin:10px;
            border: 1px solid #000;
            .d-img {
                width: 80%;
                height: 60%;
                margin: 0 auto;
                img {
                    width: 100%;
                    height:100%;
                   
                }
            }
            .d-title {
                margin: 3px  0;
                text-align: center;
                height: 20%;
                .d-title2 {
                    // color: $color1;
                    // color: $color2;
                }
            }
            .van-btn1 {
                 height: 20%;
                 text-align: center;
            }
        }
    }
</style>