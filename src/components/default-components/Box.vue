<style scoped>
  .menu div {  display: inline-block;  }
</style>
<template>
  <div class="animated fadeIn" :style="[estilo]">
    <columns>
      <column v-if="temSlotTitulo">
        <slot name="titulo"/>
      </column>
      <column class="has-text-right menu" v-if="temSlotMenu">
        <slot name="menu"/>
      </column>
    </columns>
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      background: {
        type: String,
        default: '#ffffff'
      },
      border: {
        type: String,
        default: '#c2c5c7'
      },
      padding: {
        type: Number,
        default: 13
      },
      nivel: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        estilo: {
          backgroundColor: this.background,
          border: this.border,
          padding: this.padding + 'px',
          '-webkit-box-shadow': this.nivel + 'px ' + this.nivel + 'px ' + (this.nivel * 5) + 'px 0px rgba(150,150,150,0.4)',
          '-moz-box-shadow': this.nivel + 'px ' + this.nivel + 'px ' + (this.nivel * 5) + 'px 0px rgba(150,150,150,0.4)',
          'box-shadow': this.nivel + 'px ' + this.nivel + 'px ' + (this.nivel * 5) + 'px 0px rgba(150,150,150,0.4)'
        }
      }
    },
    computed: {
      temSlot () {
        return !!this.$slots.default
      },
      temSlotMenu () {
        return !!this.$slots['menu']
      },
      temSlotTitulo () {
        return !!this.$slots['titulo']
      }
    }
  }
</script>
