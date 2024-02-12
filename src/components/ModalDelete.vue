<template>
    <div id="myModal" class="modal" v-on="props.show">
        <div class="modal-content">
            <div class="modal-container">             
                <div class="trash-box"> 
                    <font-awesome-icon icon="trash-can" size="2xl" />
                </div>
                <div class="text-box"> 
                    <div class="text-confirm">Tem certeza que deseja <span class="text-red">excluir</span> essa tarefa?</div>
                    <div class="text-warning">Esta ação não pode ser desfeita.</div>
                </div>
                <div class="btn-box"> 
                    <button class="btn btn-success" @click="deleteTask">Confirmar</button>
                    <button class="btn btn-danger">Cancelar</button>   
                </div>
            </div>
        </div>
    </div>
</template>

<script setup> 

  const props = defineProps({
    show: Boolean
  });

  const deleteTask = () => {
    emits('close-modal');
  }

  const emits = defineEmits(['close-modal']);

</script>

<style lang="stylus" scoped>
.modal 
  display: block  /* Altere de 'none' para 'block' para visualizar o modal */
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
  width: 30%
  display: flex
  flex-direction: column

.modal-container 
  display: flex
  flex-direction: column
  margin:0px 8px

.trash-box
  display: flex
  justify-content: center
  align-items: center
  padding: 28px 10px   

.svg-inline--fa 
  font-size: 80px

.text-box
  text-align: center

.text-red 
  color:#ff4874
  font-weight: bold  

.text-confirm
  font-weight: bolder

.text-warning
  font-size:12px  

.btn-box 
  display: flex
  justify-content: center

.btn
  border:none
  border-radius:5px
  color:#fff
  padding:10px 18px
  margin-top:25px
  margin-bottom: 14px

.btn-success
  background-color: #16d08d
  
.btn-danger
  margin-left:10px
  background-color:#ff4874

</style>