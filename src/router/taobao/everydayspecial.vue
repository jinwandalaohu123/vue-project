<template>
  <div class="wrap">
    <div class="ddup">
      <ul class="ulli">
        <li class="people"
            :class="{zhu:zhu,purple:purple,yellow:yellow,red:red,ping:ping}">
          {{text3}}
          <span class="tubiao" :class="{people2:tubiao}" :style="{backgroundImage:'url(' + pic7 + ')'}"></span>
        </li>
        <li class="jians">{{text4}}</li>
        <li class="picture" :style="{backgroundImage:'url(' + pic5 + ')'}"></li>
      </ul>
      <div class="picture1" :style="{backgroundImage:'url(' + pic6 + ')'}"></div>
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
    zhu:{
      type:Boolean,
      default:""
    },
    purple:{
      type:Boolean,
      default:""
    },
    yellow:{
      type:Boolean,
      default:""
    },
    red:{
      type:Boolean,
      default:""
    },
    ping:{
      type:Boolean,
      default:""
    },
    text3:{
      type:String,
      default:""
    },
    text4:{
      type:String,
      default:""
    },
    tubiao:{
      type:Boolean,
      default:""
    },
    pic5:{
      type:String,
      default:""
    },
    pic6:{
      type:String,
      default:""
    },
    pic7:{
      type:String,
      default:""
    },
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
  li{
    list-style: none;
  }
  .ddup{
    width: 187.5px;
    height:123px;
    overflow: hidden;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .ulli{
    margin:9px 0 0 9px;
    padding: 0;
  }
  .people{
    overflow: hidden;
    font-size: 14px;
    height: auto;
    width: auto;
    color: rgb(51, 51, 51);
    text-align: left;
    max-width: 147px;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 17px;
  }
  .jians{
    overflow: hidden;
    font-size: 12px;
    height: auto;
    width: 100%;
    color: rgb(153, 153, 153);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 15px;
    margin-top: 2px;
  }
  .picture{
    margin: 10px 0 0 9px;
    width: 62px;
    height: 62px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }
  .picture1{
    top: 51px;
    left: 110px;
    width: 62px;
    height: 62px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    position:absolute;
  }
  .zhu{
    font-size: 14px;
    margin-left: 9px;
    line-height: 17px;
  }
  .purple{
    color: rgb(151, 61, 255);
  }
  .yellow{
    color: rgb(255, 159, 0);
  }
  .red{
    color: rgb(255, 54, 9);
  }
  .ping{
    color: rgb(255, 0, 85);
  }
  .tubiao{
    position: absolute;
    overflow: hidden;
    width: 35px;
    height: 14px;
    margin-left: 5px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    background-image: url(https://gw.alicdn.com/tfs/TB1hGPBQFXXXXXSXFXXXXXXXXXX-105-42.png_.webp);
    opacity: 0;
  }
  .people2{
    opacity: 1;
  }
</style>
