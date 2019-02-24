<template>
  <div class="wrap">
    <div>
      <span class="wanneng">{{text1}}</span>
      <span class="faixn">{{text2}}</span>
    </div>
    <ul class="uili">
      <li class="hongyi" :style="{backgroundImage:'url(' + pic1 + ')'}"></li>
      <li class="hongyi1" :style="{backgroundImage:'url(' + pic2 + ')'}"></li>
      <li class="hongyi1" :style="{backgroundImage:'url(' + pic3 + ')'}"></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    }
  },
  props:{
    pic1:{
      type:String,
      default:""
    },
    pic2:{
      type:String,
      default:""
    },
    pic3:{
      type:String,
      default:""
    },
    text1:{
      type:String,
      default:""
    },
    text2:{
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
    margin: 0 10px 20px 10px;
  }
  .wanneng{
    display: inline-block;
    overflow: hidden;
    font-size: 14px;
    height: 17px;
    width: 56px;
    color: rgb(51, 51, 51);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 17px;
  }
  .faixn{
    display: inline-block;
    overflow: hidden;
    font-size: 12px;
    height: auto;
    width: auto;
    color: rgb(153, 153, 153);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 15px;
  }
  .hongyi{
    overflow: hidden;
    width: 111px;
    height: 111px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("//gw.alicdn.com/bao/uploaded/i3/232131272/TB1ha6GcRDH8KJjSspnXXbNAVXa_!!0-item_pic.jpg_200x200q85s150.jpg_.webp");
  }
  .uili{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 167.5px;
    height:111px;
  }
  .hongyi1{
    overflow: hidden;
    width: 55px;
    height: 55px;
    margin-left: 1.5px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url("//gw.alicdn.com/bao/uploaded/i4/232131272/TB2CfMngIbI8KJjy1zdXXbe1VXa_!!232131272.jpg_100x100q85s150.jpg_.webp");
  }
</style>
