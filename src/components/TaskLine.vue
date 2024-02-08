<template>

<!--Esse componente terá só um bloco li e ficará bem enxuto.
Só nao fiz isso ainda porque farei quando implementar o <script>.
Essa observação serve para todo o código.-->

    <ul>
        <li class="line">
          <div class="check-text">
            <input type="checkbox" v-model="isChecked" id="myCheckbox" class="hidden-checkbox">
            <label for="myCheckbox" class="checkbox-label">
              <span :class="{ 'checkbox-icon': true, 'checked': !isChecked }"></span>
            </label>
            <div class="text-line text-done">Planejar Desonvolvimento do app Todolist</div>
          </div>
          <font-awesome-icon icon="ellipsis-vertical" style="color: #c3c8d0;" />
        </li>
        <li class="line">
          <div class="check-text">
            <input type="checkbox" v-model="isChecked" id="myCheckbox" class="hidden-checkbox">
            <label for="myCheckbox" class="checkbox-label">
              <span :class="{ 'checkbox-icon': true, 'checked': isChecked }"></span>
            </label>
            <div class="text-line">Criar projeto Vue.js</div>
          </div>
          <font-awesome-icon icon="ellipsis-vertical" style="color: #c3c8d0;" />
        </li>
        <li class="line">
          <div class="check-text">
            <input type="checkbox" v-model="isChecked" id="myCheckbox" class="hidden-checkbox">
            <label for="myCheckbox" class="checkbox-label">
              <span :class="{ 'checkbox-icon': true, 'checked': isChecked }"></span>
            </label>
            <div class="text-line">Montar telas HTML/CSS</div>
          </div>
          <font-awesome-icon icon="ellipsis-vertical" style="color: #c3c8d0;" />
        </li>
        <li class="line">
          <div class="check-text">
            <input type="checkbox" v-model="isChecked" id="myCheckbox" class="hidden-checkbox">
            <label for="myCheckbox" class="checkbox-label">
              <span :class="{ 'checkbox-icon': true, 'checked': isChecked }"></span>
            </label>
            <div class="text-line">Separar Componentes</div>
          </div>
          <font-awesome-icon icon="ellipsis-vertical" style="color: #c3c8d0;" />
        </li>
        <li class="line">
          <div class="check-text">
            <input type="checkbox" v-model="isChecked" id="myCheckbox" class="hidden-checkbox">
            <label for="myCheckbox" class="checkbox-label">
              <span :class="{ 'checkbox-icon': true, 'checked': isChecked }"></span>
            </label>
            <div class="text-line">Programar Componentes</div>
          </div>
          <font-awesome-icon icon="ellipsis-vertical" style="color: #c3c8d0;" />
        </li>
    </ul>             
</template>

<script setup>
  import { ref } from 'vue';

  const isChecked = ref(false);

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

.checkbox-icon.checked 
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

</style>