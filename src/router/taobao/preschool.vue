<template>
  <div class="wrap" :class="{back:booo}">
    <div class="xueqian">
      <span class="xue">{{text1}}</span>
      <span class="huogou">{{text2}}</span>
      <div class="picture" :style="{backgroundImage:'url(' + pic + ')'}"></div>
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
    booo:{
      type:Boolean,
      default:""
    },
    text1:{
      type:String,
      default:""
    },
    text2:{
      type:String,
      default:""
    },
    pic:{
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
  .back{
    background-color: rgba(0, 0, 0, 0.02);
  }
  .xueqian{
    width: 124.5px;
    height:125.5px;
    overflow:hidden;
    background-color: rgb(255, 255, 255);
  }
  .xue{
    display: block;
    margin: 10px 0 0 10px;
    overflow: hidden;
    font-size: 14px;
    height: auto;
    text-overflow: clip;
    white-space: nowrap;
    color: rgb(51, 51, 51);
    width: 172px;
    text-align: left;
    line-height: 17px;

  }
  .huogou{
    display: block;
    overflow: hidden;
    font-size: 12px;
    height: auto;
    text-overflow: clip;
    white-space: nowrap;
    margin-left: 10px;
    color: rgb(153, 153, 153);
    width: 172px;
    text-align: left;
    line-height: 15px;
    margin-top: 2px;
  }
  .picture{
    height: 70px;
    width: 70px;
    margin-left: 27.5px;
    margin-top: 2px;
    background-image: url(//gw.alicdn.com/tfscom/TB1du2ij4YaK1RjSZFnSuu80pXa.jpg_200x200q85s150.jpg_.webp);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>
