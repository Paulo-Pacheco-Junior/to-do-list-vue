<template>
  <div class="side-centro">
    <div class="text-category">Categorias</div>
    <div class="filters">
      <div class="filter-task active">
        <div class="filter-task-line"> 
          <font-awesome-icon icon="chevron-right" class="icon-small" /> 
          <div class="filter-text">Todas</div>
        </div>
      </div>
      <div class="filter-task">
        <div class="filter-task-line"> 
          <font-awesome-icon icon="chevron-right" class="icon-small" /> 
          <div class="filter-text">Urgentes</div>
        </div>
      </div>
      <div class="filter-task">
        <div class="filter-task-line"> 
          <font-awesome-icon icon="chevron-right" class="icon-small" /> 
          <div class="filter-text">Importantes</div>
        </div>
      </div>
      <div class="filter-task">
        <div class="filter-task-line"> 
          <font-awesome-icon icon="chevron-right" class="icon-small" /> 
          <div class="filter-text">Outras</div>
        </div>
      </div>
      <div class="filter-task">
        <div class="filter-task-line"> 
          <font-awesome-icon icon="chevron-right" class="icon-small"/> 
          <div class="filter-text">Finalizadas</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.side-centro 
  display: flex
  flex: 1
  flex-direction: column
  background-color: #f4fbff
  justify-content: center
  align-items: center
  height: 100%
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4)
  
.text-category 
  margin-bottom: 30px
  padding-left:0
  margin-left: 0
  
.filters 
  width:120px
  display: flex
  flex-direction: column
  align-items: left
  justify-content: center
  
.filter-task 
  width: 20px
  padding: 1px
  margin: 3px
  font-weight: 500
  font-size: 12px

.active 
  color:#227dd8
  font-weight: bolder

.filter-task-line 
  display: flex
  justify-content: left
  align-items: center

.icon-small 
  font-size: 0.6em

.filter-text 
  margin-left:8px
  font-weight: 500
  font-size: 11px
  
</style>