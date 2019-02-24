<template>
  <div class="wrap">
    <ul class="ulli">
      <li class="denglv">登录</li>
      <li class="denglv">注册</li>
      <li class="denglv">手淘App</li>
      <li class="denglv">用户反馈</li>
    </ul>
    <div class="zhe">
      2018 浙B2-20080224 服务中心
    </div>
    <div class="dis">
      <ul class="shouye">
        <li class="hhhh">首页</li>
        <li class="hhhh">购物车</li>
        <li class="hhhh">订单列表</li>
        <li class="hhhh">我的淘宝</li>
        <li class="hhhh">更多</li>
      </ul>
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
    width:375px;
    overflow: hidden;
    padding: 20px 9px 56px;
    background-color: #4e525e;
    box-sizing: content-box;
  }
  .denglv{
    display: inline-block;
    height: 35px;
    line-height: 35px;
    color: #c3c6ca;
    border: 1px solid #42454d;
    background-color: #555965;
    padding: 0 17px;
    border-radius: 6px;
    font-size: 14px;
  }
  .ulli{
    margin:0;
    padding-left: 0;
    width:357px;
    display: flex;
    justify-content: space-between;
  }
  .zhe{
    font-size: 12px;
    color: #c3c6ca;
    width: 100%;
    margin-top: 20px;
    height: 20px;
    line-height: 20px;
    padding-left: 115px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAMAAABgOjJdAAAAGXRFW…v7MdDuE3a/JRrCmqwFQ2yV8gmvg/d+aPCMH0GLvB//AgwAo1MTpxsaxVoAAAAASUVORK5CYII=");
    background-repeat: no-repeat;
    background-position: 90px center;
    background-size: auto 18px;
  }
  .shouye{
    display: flex;
    justify-content: space-between;
    width: 335px;
    height: 39px;
    margin:23px 20px 0 20px;
    padding: 0;
  }
  .dis{
    position: fixed;
    bottom: 0;
    left:0;
    width: 375px;
    height: 39px;
    z-index: 1001;
    background-color: #ffffff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #f8f8f8;
    align-items: center;
    padding-top: 2px;
    margin-bottom: 0;
  }
  .hhhh{
    font-size: 12px;
    color: #5d656b;
    height:16px;
    line-height: 16px;
    /*margin-top: 30px;*/
  }
</style>
