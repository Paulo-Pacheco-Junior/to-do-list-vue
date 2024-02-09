<template>
  <!-- LÓGICA INICIAL FUNCIONANDO:
    Listar tarefas
    Adicionar tarefa
    Excluir tarefa
    Marcar tarefa como concluída

    LISTA COMPONENTIZADA E ESTILIZADA EM components/Taskline
    AGORA ESTOU ALTERANDO O ADICIONAR TAREFAS PARA O MODAL, AO INVÉS DO INPUT DE BUSCA 
    Por enquanto o delete é no ícone Elipse Vertical-->

  <ul>
    <li class="line"  @click="toggleDone(task)" v-for="task in props.tasks" :key="task.id">
      <div class="check-text">
        <input type="checkbox" v-model="checkedTasks" id="myCheckbox" class="hidden-checkbox">
        <label for="myCheckbox" class="checkbox-label">
          <span :class="['checkbox-icon', task.done ? 'iconchecked': '']"></span>
        </label>
        <div :class="['text-line', task.done ? 'text-done': '']"> {{ task.content }} </div> 
      </div>
      <div class="delete-icon" @click="deleteTask(index)">
        <font-awesome-icon icon="ellipsis-vertical" style="color: #c3c8d0;" />
      </div>
    </li>
  </ul>    

</template>
  
<script setup>

  const props = defineProps({
    tasks: Array
  });

  function toggleDone(task) {
    task.done = !task.done;
  }

  const emits = defineEmits(['delete-task']);

  function deleteTask(index) {
    emits('delete-task', index);
  }

</script>

<style lang="stylus" scoped>

ul 
  margin: 0
  padding: 0
  width: 100%
  
li 
  list-style: none
  padding: 10px 10px 10px 10px
  margin-bottom: 5px
  margin-left: 10px
  width: 90%
  background-color: #ffffff

.line 
  display: flex
  justify-content: space-between
  align-items: center

.check-text 
  display: flex
  align-items: center

.text-line 
  padding: 0px 10px
  color:#425567
.text-done
  text-decoration:line-through
  font-size:11px
  color:#8899ac

.checkbox-label 
  display: inline-flex
  align-items: center
  cursor: pointer

.checkbox-icon 
  width: 20px
  height: 20px
  border: 1px solid #ccc
  border-radius: 3px
  margin-right: 5px

.iconchecked 
  background-color: #7ce7bf

.checkbox-icon::after 
  content: '\2713'
  font-size: 14px
  color: white
  display: block
  text-align: center
  line-height: 20px

.hidden-checkbox 
  position: absolute
  left: -9999px

.delete-icon
  padding-left: 25px

</style>
