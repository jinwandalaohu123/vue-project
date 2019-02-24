<template>
  <div class="wrap">
    <div class="recommend">
      <div class="picture" :style="{backgroundImage:'url(' + pic + ')'}"></div>
      <p class="wenzi">
        <img class="shiping" :class="{video:booo}" src="//gw.alicdn.com/tfs/TB1HVMEmWmWBuNjy1XaXXXCbXXa-69-45.png"/>
        <img class="nianhuo" :class="{video1:boooe}" src="//img.alicdn.com/tfs/TB1vXL5zAvoK1RjSZPfXXXPKFXa-90-45.png"/>
        {{text3}}
      </p>
      <div class="qian">
        <span class="shuzi">¥{{text2}}</span>
        <span class="shopping">{{text1}}人付款</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    }
  },
  props:{
    pic:{
      type:String,
      default:""
    },
    booo:{
      type:Boolean,
      default:""
    },
    boooe:{
      type:Boolean,
      default:""
    },
    text3:{
      type:String,
      default:""
    },
    text2:{
      type:String,
      default:""
    },
    text1:{
      type:String,
      default:""
    }
  },
  computed: {},
  methods: {
  },
  beforeCreate() {
  },
  create() {},
  beforeMounted() {},
  mounted() {},
  beforeUpdate() {},
  update() {},
  beforeDestroy() {},
  destroyed() {},
  components: { // 引入组件
  }
}
</script>

<style scoped lang="scss">
  .recommend{
    overflow: hidden;
    width: 184.5px;
    height: 265px;
    -webkit-box-orient: vertical;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
  }
  .picture{
    overflow: hidden;
    width: 100%;
    height: 184.5px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .wenzi{
    display: inline-block;
    overflow: hidden;
    font-size: 13px;
    height: 32px;
    margin:0 0 0 10px;
    width: 164.5px;
    color: rgb(51, 51, 51);
    line-height: 16px;
    text-align: left;
    text-overflow: ellipsis;
  }
  .shiping{
    display:none;
    width: 19.922px;
    height: 13px;
  }
  .video{
    display: inline-block;
  }
  .nianhuo{
    display: none;
    width: 26px;
    height:13px;
  }
  .qian{
    width: 164.5px;
    height: 23px;
    overflow: hidden;
    margin:6.5px 0 0 10px;
  }
  .shuzi{
    display:inline-block;
    overflow: hidden;
    font-size: 16px;
    height: 24px;
    width: 50px;
    color: rgb(255, 80, 0);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 24px;
  }
  .video{
    display:inline-block;
  }
  .shopping{
    display:inline-block;
    overflow: hidden;
    font-size: 11px;
    height: 23px;
    width: 100px;
    text-align: right;
    color: rgb(153, 153, 153);
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 23px;
  }
  .video1{
    display: inline-block;
  }
</style>
