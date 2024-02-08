<template>

  <div class="div-geral">
    <SideNavigation />
    <div class="bloco-principal">
      <HeaderProfile />
      <div class="container-centro">
        <SideCategories />
        <ContainerTaskList />
      </div>
    </div>
    <ModalInsert /> 
    <ModalDelete /> 
  </div>

</template>

<!-- Para visualizar os Modais altere o display em .model de none para block
     Cada vez que for visualizar um lembre de alterar o outro pra none    
-->
  
<script setup>

  import SideNavigation from '@/partials/SideNavigation.vue';
  import HeaderProfile from '@/partials/HeaderProfile.vue';
  import SideCategories from '@/partials/SideCategories.vue';
  import ContainerTaskList from '@/partials/ContainerTaskList.vue';
  import ModalInsert from '@/components/ModalInsert.vue';
  import ModalDelete from '@/components/ModalDelete.vue';

</script>
  
<style lang="stylus" scoped>
.div-geral 
  display: flex
  background-color: red
  height: 100%
  width: 100%

.bloco-principal 
  flex: 15
  display: flex
  flex-direction: column
  
.container-centro 
  flex: 9
  display: flex
  justify-content: left
  align-items: left  
  
</style>