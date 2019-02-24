<template>
  <div class="wrap">
    <div class="zhugou">
      <span class="zh">珠光宝气</span>
      <span class="baq">天然手镯</span>
    </div>
    <div class="zhugou hhh">
      <span class="zh">亲子乐园</span>
      <span class="baq">连帽加绒外套</span>
    </div>
    <div class="zhugou hhh jjj">
      <span class="zh">美食美味</span>
      <span class="baq">东北新鲜人参</span>
    </div>
    <div class="tuijian">
      <span class="kuangzhi">主播推荐</span>
      <span class="qingming hhh12">品质好货，不能错过的亲民价</span>
      <span class="qingming">抢福利</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
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
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
  }
  .zhugou{
    margin-bottom: 10px;
  }
  .zh{
    display: inline-block;
    overflow: hidden;
    font-size: 14px;
    height: auto;
    margin-top:10px;
    width: auto;
    text-overflow: clip;
    white-space: nowrap;
    margin-left: 10px;
    color: rgb(51, 51, 51);
    text-align: left;
    line-height: 17px;
  }
  .baq{
    display:block;
    overflow: hidden;
    font-size: 12px;
    height: auto;
    text-overflow: clip;
    white-space: nowrap;
    margin-left: 10px;
    top:24.5px;
    color: rgb(153, 153, 153);
    opacity: 0.8;
    width: auto;
    text-align: left;
    line-height: 15px;
  }
  .hhh{
    margin-left: 60px;
  }
  .tuijian{
    width: 375px;
    height: 36px;
    overflow: hidden;
    line-height: 36px;
  }
  .kuangzhi{
    display: inline-block;
    overflow: hidden;
    font-size: 12px;
    height: auto;
    width: auto;
    margin-left: 10px;
    color: rgb(253, 30, 87);
    border-style: solid;
    border-width: 1px;
    border-color: rgb(253, 30, 87);
    background-color: rgba(255, 255, 255, 0);
    border-radius: 3px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 15px;
  }
  .qingming{
    display: inline-block;
    overflow: hidden;
    font-size: 13px;
    height: auto;
    width: auto;
    text-overflow: clip;
    white-space: nowrap;
    color: rgb(0, 0, 0);
    text-align: left;
    line-height: 16px;
  }
  .hhh12{
    width: 240px;
  }
</style>
