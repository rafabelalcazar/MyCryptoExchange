<template>
  <div class="home">
    <vue-assets-table :assets="assets"/>
  </div>
</template>

<script>
// @ is an alias to /src
import VueAssetsTable from "@/components/VueAssetsTable.vue";
import api from '@/api';
export default {
  name: "Home",
  components: {
    VueAssetsTable,
  },
  data(){
    return{
      assets: []
    }
  },
  created(){
    api.getAssets().then(assets=>this.assets=assets)
  }
};
</script>
