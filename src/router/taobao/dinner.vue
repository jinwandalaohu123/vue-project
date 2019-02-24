<template>
  <div class="wrap" :class="{color:color}">
    <span class="zhuti">{{text4}}</span>
    <span class="ttian" @click="nidan(item)">{{text5}}</span>
    <div class="picture" :style="{backgroundImage:'url(' + pic11 + ')'}"></div>
    <div class="lines" :class="{lins1:line}"></div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
    }
  },
  props:{
    item:{
      type:String,
      default:""
    },
    color:{
      type:Boolean,
      default:""
    },
    text4:{
      type:String,
      default:""
    },
    text5:{
      type:String,
      default:""
    },
    pic11:{
      type:String,
      default:""
    },
    line:{
      type:Boolean,
      default:""
    },
  },
  computed: {
  },
  methods: {
    nidan(item){
      this.$router.push(item)
    }
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
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 93.25px;
    position: relative;
    margin-bottom: 10px;
  }
  .color{
    background-color: rgba(0, 0, 0, 0.02);
  }
  .zhuti{
    display:block;
    overflow: hidden;
    font-size: 14px;
    height: auto;
    margin-left: 9px;
    margin-top: 9px;
    max-width: 84px;
    color: rgb(51, 51, 51);
    text-align: left;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 17px;
  }
  .ttian{
    display:block;
    overflow: hidden;
    font-size: 12px;
    height: 15px;
    margin-left: 9px;
    max-width: 84px;
    text-align: left;
    color: rgb(153, 153, 153);
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 15px;
    margin-top: 2px;
  }
  .picture{
    overflow: hidden;
    height: 62px;
    width: 62px;
    background-image: url("//gw.alicdn.com/imgextra/O1CN01lzX5Z91D2P3j3uIYk_!!158-2-lubanu.png_100x100q85s150.jpg_.webp");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    margin-top:8px;
    margin-left: 15.875px;
  }
  .lines{
    overflow: hidden;
    background-color: rgb(238, 238, 238);
    right: 0;
    top: 0;
    height: 100%;
    width: 1px;
    position: absolute;
    opacity: 0;
  }
  .lins1{
    opacity: 1;
  }
</style>
