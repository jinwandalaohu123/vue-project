<template>
  <div class="wrap">
    <div class="live1">
      <div class="fen1" :style="{backgroundImage:'url(' + pic2 + ')'}">
        <div class="fen" ></div>
        <div class="zhibo" :style="{backgroundImage:'url(' + pic3 + ')'}"></div>
        <span class="luzhan" :class="{tintin1:boolo}">{{text}}</span>
        <span class="luzhan1" :class="{tintin:boloo}">{{text2}}</span>
        <div class="xinxin" :class="{xingx:blloo}"></div>
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
    pic2:{
      type:String,
      default:""
    },
    pic3:{
      type:String,
      default:""
    },
    boolo:{
      type:Boolean,
      default:""
    },
    boloo:{
      type:Boolean,
      default:""
    },
    text:{
      type:String,
      default:""
    },
    text2:{
      type:String,
      default:""
    },
    blloo:{
      type:Boolean,
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
  .live1{
    width:250px;
    height: 125px;
  }
  .fen{
    position: relative;
    width: 249.5px;
    height: 125.5px;
    background-image: url(https://gw.alicdn.com/tfs/TB1wx_RQFXXXXbGXFXXXXXXXXXX-250-125.png_200x200q85s150.jpg_.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }
  .fen1{
    width: 249.5px;
    height: 125.5px;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .zhibo{
    width: 375px;
    height:29px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top:-14.5px;
  }
  .luzhan{
    display: inline-block;
    overflow: hidden;
    font-size: 14px;
    height: auto;
    text-overflow: clip;
    white-space:pre-wrap;
    margin-left: 20px;
    color:rgb(255, 255, 255);
    width: 197px;
    text-align: left;
    line-height: 17px;
    position: absolute;
    top:84px;
  }
  .luzhan1{
    display: inline-block;
    overflow: hidden;
    font-size: 12px;
    height: auto;
    text-overflow: clip;
    white-space: nowrap;
    margin-left: 10px;
    color:rgb(250, 250, 250);
    opacity: 0.8;
    width: 200px;
    text-align: left;
    line-height: 15px;
    position: absolute;
    top:103px;
  }
  .xinxin{
    display: flex;
    overflow: hidden;
    height: 20px;
    width: 20px;
    bottom: 0;
    left: 0;
    background-image: url(https://gw.alicdn.com/tfs/TB1I1vQQFXXXXcaXFXXXXXXXXXX-54-54.png_.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin-left: 214px;
    margin-bottom: 10px;
    position: absolute;
    opacity: 1;
  }
  .xingx{
    opacity: 0;
  }
  .tintin{
    opacity: 0;
  }
  .tintin1{
    margin-left: 10px;
    top:103px;
  }
</style>
