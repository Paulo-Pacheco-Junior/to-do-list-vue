<template>
  <!-- LÓGICA INICIAL FUNCIONANDO:
    Listar tarefas
    Adicionar tarefa
    Excluir tarefa
    Marcar tarefa como concluída

    LISTA COMPONENTIZADA E ESTILIZADA EM components/Taskline
    AGORA ESTOU ALTERANDO O ADICIONAR TAREFAS PARA O MODAL, AO INVÉS DO INPUT DE BUSCA 
    Por enquanto o delete é no ícone Elipse Vertical-->

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
      <form class="search-task" @submit.prevent="addNewTask">
        <input v-model="newTask"  class="input-task" 
          type="text" placeholder="Buscar Tarefas" required
        />
        <span class="search-icon">
          <font-awesome-icon icon="magnifying-glass" style="color: #c3c8d0;"/>
        </span>
      </form>
      <TaskLine :tasks="tasks" @delete-task="deleteTask"/>
    </div>
  </div>

</template>

<script setup>  

  import { ref } from 'vue';  

  import TaskLine from '@/components/TaskLine.vue';
  
   const tasks =ref([]);
   const newTask = ref('');

  function addNewTask() {
    tasks.value.push({
      id:Date.now(),
      done:false,
      content:newTask.value,
    });
    newTask.value='';
  }

  function deleteTask(index) {
    tasks.value.splice(index, 1);
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
  
</style>