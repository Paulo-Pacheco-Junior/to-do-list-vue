<template>
    <div id="myModal" class="modal" v-show="props.show">
        <div class="modal-content">
            <div class="modal-container">             
                <div class="top-row"> 
                    <div class="top-text">Cadastrar Tarefa</div>
                    <span class="close" onclick="closeModal()">&times;</span>
                </div>
                <span class="label-text">Título:</span>
                <input v-model="newTitle" class="input-text" type="text" required />
                <span class="label-text">Descrição:</span>
                <textarea v-model="newDescription" class="textarea" required />
                <div class="bottom-row"> 
                    <div class="radios">
                        <input type="radio" id="radio1" name="radios">
                        <label class="label-radio" for="radio1">Urgente</label>
                        <input type="radio" id="radio2" name="radios">
                        <label class="label-radio" for="radio2">Importante</label>
                    </div>
                    <button 
                      @click="addTask" 
                      :class="{ 'add-title': newTitle.trim() !== '' && newDescription.trim() !== ''}">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup> 

  import { defineProps } from 'vue';
  import { ref } from 'vue';

  const props = defineProps({
    show: Boolean
  });

  const tasks = ref([]);
  const newTitle = ref('');
  const newDescription = ref('');

  function addTask() {
    if (newTitle.value.trim() !== '' && newDescription.value.trim() !== '') {
      const newTask = {
        id: tasks.value.length + 1,
        title: newTitle.value,
        description: newDescription.value,
        done: false
      };
      newTitle.value='';
      newDescription.value='';
      tasks.value.push(newTask);
      emits('close-modal');
      emits('send-task', newTask);
    }  
  }

  const emits = defineEmits(['close-modal', 'send-task']);

</script>


<style lang="stylus" scoped>
.modal 
  display:block 
  position: fixed
  z-index: 1
  left: 0
  top: 0
  width: 100%
  height: 100%
  background-color: rgba(46, 60, 85, 0.4)

.modal-content 
  background-color: #fefefe
  margin: 15% auto
  padding: 20px
  border-radius: 5px
  width: 38%
  display: flex
  flex-direction: column

.modal-container 
  display: flex
  flex-direction: column
  margin:0px 8px

.top-row 
  display: flex
  justify-content: space-between
  margin-bottom: 25px

.top-text 
  font-size:18px
  font-weight: bold

.label-text 
    font-size: 11px

.input-text 
  padding:8px
  margin-bottom: 8px   
  border-radius:5px
  border: 2px solid #d1e5f2

.textarea 
  padding: 5px
  height: 150px
  resize: none
  width: 100%
  border-radius:5px
  border: 2px solid #d1e5f2
  margin: 0

.input-text:focus,
.textarea:focus
  border-color: #2693ff
  outline: none

.bottom-row 
  display: flex
  justify-content: space-between
  align-items: center

.radios
  margin-top: 8px
  margin-right:10px

.label-radio
  margin-right:8px
  margin-left:5px

.close 
  color: #464545
  float: right
  font-size: 20px
  font-weight: 300

.close:hover, .close:focus
  color: black
  text-decoration: none
  cursor: pointer

button
  background-color: #16d08d
  background-color: #a6c1d2
  border:none
  border-radius:5px
  color:#fff
  padding:10px 18px
  margin-top:15px

button:hover 
  background-color: #16d08d

.add-title
  background-color: #16d08d


</style>