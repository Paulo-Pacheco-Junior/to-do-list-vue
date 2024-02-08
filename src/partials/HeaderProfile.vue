<template>
    <div class="nav">
        <div class="nav-space">         
        </div>
        <div class="nav-profile">
          <div class="nav-logo"> 
            <img src="@/assets/profile.jpg" alt="Descrição da imagem"> 
          </div>
          <div class="nav-name"> 
            <div class="nav-name-text">Eduardo Pereira da Costa</div>
            <div class="nav-profession-text">Front-end Developer</div>
          </div>
        </div>
      </div>  
</template>

<style lang="stylus" scoped>

.nav 
    background-color: white
    flex: 1
    display: flex
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4)

.nav-space 
    flex:5

.nav-profile 
    flex:1
    display: flex
    align-items: center
    justify-content: center

.nav-logo 
    flex: 1
    height: 50%
    margin:2px
    display: flex
    justify-content: center
    align-items: center

img 
    border-radius: 100%
    width:100%
    height: 100%

.nav-name 
    flex:5
    font-size: 10px
    line-height: 12px

.nav-name-text 
    margin-left:5px
    font-size: 11px
    font-weight: 500

.nav-profession-text 
    margin-left: 5px 
    color:#4394e6
    font-weight: bold
    font-size: 9px

</style>