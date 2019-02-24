<template>
  <div class="wrap" :class="{live6:boolllo}">
    <div class="zhubio1" :style="{backgroundImage:'url(' + pic4 + ')'}"></div>
    <div class="zhubio"></div>
    <span class="youxin" :class="{youxuan:boololo}">主播优选</span>
    <span class="kuan" :class="{youxuan:boololo}">宽带斜挎包</span>
    <span class="smallhom" :class="{smallhome:bololle}">囤货小当家</span>
    <div class="live" :class="{live1:booloo1}"></div>
    <div class="zhibo" :class="{live2:boolllo}"></div>
    <div class="shizi">
      <div class="shizi1" :style="{backgroundImage:'url(' + pic5 + ')'}"></div>
      <span class="shiz1">{{text2}}</span>
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
    pic4:{
      type:String,
      default:""
    },
    boololo:{
      type:Boolean,
      default:""
    },
    booloo1:{
      type:Boolean,
      default:""
    },
    boolllo:{
      type:Boolean,
      default:""
    },
    bololle:{
      type:Boolean,
      default:""
    },
    shiz:{
      type:Boolean,
      default:""
    },
    text2:{
      type:String,
      default:""
    },
    pic5:{
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
  .wrap{
    position: relative;
    overflow: hidden;
    height: 125px;
    width: 125px;
  }
  .live6{
    overflow:visible;
  }
  .zhubio{
    width: 100%;
    height: 100%;
    background-image:url("https://gw.alicdn.com/tfs/TB1wx_RQFXXXXbGXFXXXXXXXXXX-250-125.png_200x200q85s150.jpg_.webp");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
  }
  .zhubio1{
    width: 125px;
    height: 125px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
  }
  .youxin{
    display: inline-block;
    overflow: hidden;
    font-size: 14px;
    height: auto;
    text-overflow: clip;
    white-space: nowrap;
    color: rgb(255, 255, 255);
    width: auto;
    text-align: left;
    margin-left: 10px;
    margin-top: 84px;
    position: absolute;
    opacity: 0;
  }
  .kuan{
    display: inline-block;
    overflow: hidden;
    font-size: 12px;
    height: auto;
    text-overflow: clip;
    white-space: nowrap;
    margin-left: 10px;
    margin-top: 103px;
    color: rgb(255, 255, 255);
    opacity: 0;
    width: auto;
    text-align: left;
    line-height: 15px;
    position: absolute;
  }
  .live{
    width: 30px;
    height:14.5px;
    background-image: url(https://gw.alicdn.com/tfs/TB1mQYqQFXXXXXKapXXXXXXXXXX-90-44.png_.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    left: 0;
    position: absolute;
    bottom: 0;
  }
  .youxuan{
    opacity: 1;
  }

  .live1{
    opacity: 0;
  }
  .zhibo{
    width: 375px;
    height:29px;
    background-image:url("https://gw.alicdn.com/tfs/TB1ZfYKQFXXXXXiXFXXXXXXXXXX-1125-87.png?getAvatar=1_.webp");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top:-14.5px;
    opacity: 0;
    z-index: 100;
  }
  .live2{
    opacity: 1;
  }
  .smallhom{
    display: inline-block;
    overflow: hidden;
    font-size: 14px;
    height: auto;
    text-overflow: clip;
    white-space: nowrap;
    margin-left: 10px;
    margin-top: 104px;
    color: rgb(255, 255, 255);
    width: 172px;
    text-align: left;
    line-height: 17px;
    position: absolute;
    opacity: 0;
  }
  .smallhome{
    opacity: 1;
  }
  .shizi{
    width: 88px;
    height: 19px;
    position: absolute;
    top: 94px;
    left: 18px;
  }
  .shiz1{
    display: inline-block;
    overflow: hidden;
    font-size: 13px;
    height: auto;
    width: 88px;
    color: rgb(255, 255, 255);
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 16px;
    position: absolute;
  }
  .shizi1{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    width: 88px;
    height: 19px;
    position: absolute;
  }
</style>
