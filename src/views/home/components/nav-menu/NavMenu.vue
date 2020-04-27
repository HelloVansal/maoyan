<template>
  <div class="nav-menu scale-1px">
    <router-link to="/city">
      <div class="left">
        <span>北京</span>
        <span class="iconfont icon-xiala"></span>
      </div>
    </router-link>
    <div class="center">
      <span
        class="menu"
        :class="[menuActive == menu.id ? 'active' : '']"
        @click="changeMenu(menu.id)"
        v-for="menu of menuList"
        :key="menu.id"
      >{{ menu.title }}</span>
    </div>
    <router-link to="/search">
      <div class="right">
        <span class="iconfont icon-sousuo"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { getMoiveList } from '@/api/home.js'

export default {
  name: 'NavMenu',
  props: {
    menuActive: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      menuList: [
        {
          id: 0,
          title: '正在热映'
        },
        {
          id: 1,
          title: '即将上映'
        }
      ]
    }
  },
  methods: {
    changeMenu (menuId) {
      this.$emit('changeMenu', menuId);
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@css/variable.scss";

.nav-menu {
  height: 44px;
  display: flex;

  .left {
    width: 80px;
    float: left;
    line-height: 44px;
    color: #666;
    text-align: center;

    .icon-xiala {
      font-size: 14px;
    }
  }

  .center {
    flex: 1;
    text-align: center;
    line-height: 44px;
    padding: 0 20px;
    position: relative;

    .menu {
      display: inline-block;
      color: #666;
      font-weight: 700;
      width: 50%;
      float: left;
      box-sizing: border-box;

      &.active {
        color: $bgColor;

        &:after {
          content: "";
          display: block;
          position: absolute;
          bottom: -1px;
          width: calc(50% - 20px);
          height: 2px;
          background-color: $bgColor;
        }
      }
    }
  }

  .right {
    float: right;
    width: 50px;
    color: $bgColor;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>