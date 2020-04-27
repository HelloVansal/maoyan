<template>
  <div class="home">
    <div>
      <common-header :title="title" :back="true" @goBack="goBack"></common-header>
      <nav-menu :menuActive="menuActive" @changeMenu="changeMenu"></nav-menu>
      <home-content :menuActive="menuActive"></home-content>
      <common-footer :bottomActive="bottomActive"></common-footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import CommonHeader from '@cp/header/Header'
import NavMenu from '@v/home/components/nav-menu/NavMenu'
import CommonFooter from '@cp/footer/Footer'
import HomeContent from '@v/home/components/content/Content'

export default {
  name: 'Home',
  components: {
    CommonHeader,
    NavMenu,
    HomeContent,
    CommonFooter
  },
  data () {
    return {
      title: '首页',
      menuActive: 0,
      bottomActive: 0
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    changeMenu (menuId) {
      this.menuActive = menuId
    }
  }
}
</script>
