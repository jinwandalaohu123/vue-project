<template>
  <div class="wrap">
    <div class="name2">
      <div class="name3"></div>
      <div class="name4">
        <div class="name5">
          <div class="name9">
            <div class="name7" v-for="pic in pics">
                <img class="name" :src="pic.pic2"/>
               <span class="namemao">{{pic.text2}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toutiao">
      <div class="toutiao2">
        <div class="tupian"></div>
      </div>
      <div>
        <swiper :options="swiperOption" >
          <swiper-slide v-for="img in imgs" :key="img.id">
            <div class="name9 name11">
              <ul class="jinghua">
                <li class="ulli">
                  <p class="jinghua1">{{img.text4}}</p>
                  <p class="hukou">{{img.text2}}</p>
                </li>
                <li class="ulli">
                  <p class="jinghua1">{{img.text5}}</p>
                  <p class="hukou">{{img.text3}}</p>
                </li>
              </ul>
              <div class="picture2">
                <div class="picture3"></div>
                <img class="picture1" :src="img.url">
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide, swiperPlugins } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        direction:'vertical',
        autoplay:{
          delay: 3000,
        },
      },
      imgs:[
        {
          url:'https://ossgw.alicdn.com/tbheadline/online/g0/3IhJl3ZEI4a/uDnA5A/m/hailuo_551852827_RF_.png',
          text2:'塞班系统更新了！四款诺基亚手机升级在即',
          text3:'iPhone11概念图：伸缩式镜头',
          text4:"精华",
          text5:"超赞"
        },
        {
          url:'https://ossgw.alicdn.com/tbheadline/online/g0/3IhJl3ZEI4a/uDnA5A/m/hailuo_443060572_RF_.png',
          text2:'川藏线上这么多弃车，为什么没人捡',
          text3:'宝宝大便后，能用湿巾擦吗？很少人知道',
          text4:"超赞",
          text5:"超赞"
        },
        {
          url:'https://ossgw.alicdn.com/tbheadline/g0/2o9Hm3Q/m/vtfdkiwy.jpg',
          text2:'上户口时注意这几点，弄错影响孩子一生',
          text3:'别再乱买靴子了，看今年流行的女靴超洋气',
          text4:"精华",
          text5:"精华"
        },
        {
          url:'https://ossgw.alicdn.com/tbheadline/g0/3IhJl3ZEI4a/uDnA5A/m/hailuo_532056517_RF_.png',
          text2:'为何日本没有电动车呢？日本人：要它干嘛',
          text3:'1升汽油”有多少公斤？很多人都不知道',
          text4:"超赞",
          text5:"超赞"
        },
      ],
      pics:[
        {
          pic2:"https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp",
          text2:"天猫"
        },
        {
          pic2:"https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp",
          text2:"聚划算"
        },
        {
          pic2:"https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp",
          text2:"天猫国际"
        },
        {
          pic2:"https://gw.alicdn.com/tps/TB1eXc7PFXXXXb4XpXXXXXXXXXX-183-144.png?getAvatar=1_.webp",
          text2:"外卖"
        },
        {
          pic2:"https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp",
          text2:"天猫超市"
        },
        {
          pic2:"https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp",
          text2:"充值中心"
        },
        {
          pic2:"https://gw.alicdn.com/tfs/TB1ydXzhCzqK1RjSZPcXXbTepXa-183-144.png?getAvatar=1_.webp",
          text2:"飞猪旅行"
        },
        {
          pic2:"https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp",
          text2:"领金币"
        },
        {
          pic2:"https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp",
          text2:"拍卖"
        },
        {
          pic2:"https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp",
          text2:"分类"
        },
      ],
    }
  },
  computed: {

  },
  methods: {

  },
  beforeCreate() {
  },
  create() {},
  beforeMounted() {},
  mounted() {
  },
  beforeUpdate() {},
  update() {},
  beforeDestroy() {},
  destroyed() {},
  components: { // 引入组件
    swiper,
    swiperSlide
  }
}
</script>

<style scoped lang="scss">
  .name2{
    overflow: hidden;
    height: 160px;
    width: 375px;
    position: relative;
    top: -10px;
    z-index: 1;
  }
  .name3{
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    margin-top: 9px;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
  }
  .name4{
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  .name5{
    width: 100%;
    height: 100%;
    background-image: url(https://gw.alicdn.com/tps/TB155AUPpXXXXajXVXXXXXXXXXX-1125-480.png_.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .name{
    width: 61px;
    height:48px;
  }
  .name7{
    width: 61px;
    height:67px;
    margin:13px 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .namemao{
    display:block;
    width: 61px;
    height:14px;
    line-height: 14px;
    color:rgb(102,102,102);
    text-align: center;
    font-size: 11px;
    overflow: hidden;
  }
  .name9 {
    width: 375px;
    height: 160px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .toutiao{
      overflow: hidden;
      background-color: rgb(255, 255, 255);
      height: 60px;
      width: 375px;
      position: relative;
  }
  .tupian{
      width: 100%;
      height: 100%;
      background-image: url(https://gw.alicdn.com//tfs//TB1TBEMXU6FK1Jjy1XdXXblkXXa-105-107.png_.webp);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
  }
  .toutiao2{
    width: 35px;
    height:35px;
    margin-top: 12.5px;
    margin-left: 10px;
    margin-right: 13px;
    position: absolute;
    left:0;
    top: 0;
  }
  .jinghua1{
    width: 26px;
    height: 13px;
    line-height: 13px;
    text-align: center;
    color:rgb(230,10,31);
    border:1px solid rgb(460,20,62);
    border-radius: 3px;
    margin: 0 4px 0 4px;
    font-size: 10.5px;
  }
  .hukou{
    width: 200px;
    color:rgb(51,51,51);
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    white-space: nowrap;
    margin: 0;
  }
  .jinghua{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 232px;
    height: 60px;
    margin: 1px 0 0 58px;
    padding: 0;
  }
  .ulli{
    display: flex;
    justify-content:space-between;
    align-items: baseline;
    line-height: 19px;
  }
  .picture1{
    width: 85px;
    height:60px;
  }
  .name11{
    height: 60px;
  }
  .picture2{
    position: relative;
  }
  .picture3{
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("//gw.alicdn.com/mt/TB1tzxrrTtYBeNjy1XdXXXXyVXa-390-255.png");
  }
</style>
