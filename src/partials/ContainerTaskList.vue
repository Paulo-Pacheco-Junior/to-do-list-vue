<template>

  <div class="bloco-task"> 
    <div class="tasklist">
      <div class="text-task">
        <div class="text-title-task">
            Minhas Tarefas 
        </div>
        <div class="text-task-undone">
            Olá <span class="text-blue">Eduardo Pereira</span>, você tem <span class="text-blue-undone">4 tarefas</span> pendentes
        </div>
      </div>
      <form class="search-task" >
        <input class="input-task" 
          type="text" placeholder="Buscar Tarefas" required
        />
        <span class="search-icon">
          <font-awesome-icon icon="magnifying-glass" style="color: #c3c8d0;"/>
        </span>
      </form>
      <TaskLine :tasks="tasks" @delete-task="deleteTask"/>
    </div>
    <div class="plus" @click="showModal=true"> 
      <font-awesome-icon icon="plus" size="lg" />
    </div>
    <div v-show="showModal"> 
      <ModalInsert 
        :show="showModal"
        @close-modal="showModal=false"
        @send-task="receivedTask"
      /> 
    </div>   
  </div>

</template>

<script setup>  

  import TaskLine from '@/components/TaskLine.vue';  
  import ModalInsert from '@/components/ModalInsert.vue';

  import { ref } from 'vue';  

  const tasks = ref([]);  
  const showModal = ref(false);
  
  const receivedTask = (newTask) => {
    tasks.value.push(newTask);  
  }
  
  const deleteTask = (index) => {
    tasks.value.splice(index,1);
  }
  
</script>

<style lang="stylus" scoped>
.bloco-task 
  flex:6
  background-color: #e9f4fb
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  height: 100%
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4)
  position:relative

.tasklist 
  width: 45%
  display: flex
  flex-direction: column
  
.text-task 
  line-height: 6px
  margin-bottom: 25px

.text-title-task 
  font-size: 18px
  font-weight: bolder
  margin-bottom: 15px
  margin-left: 10px
  
.text-task-undone 
  margin-left: 10px
  font-size:12px
  
.text-blue, .text-blue-undone 
  color:#3696ce
  font-weight: bold
  
.text-blue-undone 
  text-decoration: underline
  
.input-task 
  padding: 10px 10px
  margin-bottom: 25px
  margin-left: 10px
  width: 90%
  border: 2px solid #d1e5f2
  border-radius: 5px
  background-color: #e9f4fb
  

.input-task:focus 
  border-color: #d1e5f2
  outline: none

.search-task 
  display: flex
  align-items: center
  position: relative

.search-icon 
  position: absolute
  right: 50px
  top: 15%

.input-task::placeholder 
  text-align: left

.plus
  position: absolute
  bottom: 20px
  right: 20px
  width: 50px
  height: 50px
  background-color: #1ad18f
  border-radius:100%  
  display: flex
  justify-content: center
  align-items: center
  color:#fff

</style>