<template>
    <div class="side-geral"> 
      <div class="nav-button active">
        <font-awesome-icon icon="chart-line" />
        <div class="nav-text">Dashboard</div>
      </div>
      <div class="nav-button">
        <font-awesome-icon icon="fa-regular fa-circle-check" />
        <div class="nav-text">Tarefas</div>
      </div>
      <div class="nav-button">
        <font-awesome-icon icon="gear" />
        <div class="nav-text">Configurações</div>
      </div>
    </div>
</template>

<style lang="stylus" scoped>
.side-geral 
  flex:1
  display: flex
  background-color: #2693ff
  flex-direction: column
  justify-content: center
  align-items: center
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4)
  
.nav-button 
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  width: 100%
  padding: 14px 10px
  color:white
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2)

.active 
  background-color:#1182f2

.nav-text 
  font-size: 9px

</style>