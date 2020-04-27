<template>
  <div>
    <common-header :title="title" :back="true" @goBack="goBack"></common-header>
    <nav-menu></nav-menu>
    <common-footer :bottom-active="bottomActive"></common-footer>
    <loading />
  </div>
</template>

<script>
import CommonHeader from '../../components/header/Header'
import CommonFooter from '../../components/footer/Footer'
import NavMenu from './components/nav-menu/NavMenu'
import Loading from '@cp/loading/Loading'
export default {
  name: 'Cinema',
  components: {
    CommonHeader,
    CommonFooter,
    NavMenu,
    Loading
  },
  data () {
    return {
      title: '影院',
      bottomActive: 1
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style>
</style>