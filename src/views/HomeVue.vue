<template>
    <!----------------------------------------------------------------------------
      Fui Persistente no localstorage, mas os dados não foram persistidos a tempo
    ------------------------------------------------------------------------------
    LÓGICA INICIAL FUNCIONANDO:
    - Listar tarefas
    - Adicionar tarefaS 
      -> AO CLICAR NO ÍCONE + O MODALINSERT ABRE
      -> AO DIGITAR O TÍTULO E A DESCRICAO O BOTAO ADICIONAR FICA VERDE
      -> AO CLICAR NO BOTAO ADICIONAR A TAREFA É CRIADA
      -> A TAREFA É ENVIADA PARA CONTAINERTASKLIST E EXIBIDA NA TASKLINE  
    - Marcar tarefa como concluída
      -> TOGGLE AO CLICAR EM UMA TAREFA 
    - Excluir tarefa
      -> AO CLICAR NO ÍCONE 'ELIPSE VERTICAL' DA TASKLINE A TAREFA É EXCLUÍDA
      -> O MODALDELETE ESTÁ PRONTO 
        MAS AINDA NÃO ESTÁ SENDO ACIONADO PARA A EXCLUSAO DE TAREFAS
    ------------------------------------------------------------------------------>
  <div class="div-geral">
    <SideNavigation />
    <div class="bloco-principal">
      <HeaderProfile />
      <div class="container-centro">
        <SideCategories />
        <ContainerTaskList />
      </div>
    </div>
  </div>

</template>

<script setup>

  import SideNavigation from '@/partials/SideNavigation.vue';
  import HeaderProfile from '@/partials/HeaderProfile.vue';
  import SideCategories from '@/partials/SideCategories.vue';
  import ContainerTaskList from '@/partials/ContainerTaskList.vue';

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