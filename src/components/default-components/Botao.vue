<style scoped></style>

<template>
  <b-tooltip type="is-dark" :label="tooltip" v-if="tooltip" :position="tooltipPosition">
    <router-link :to="to" class="button" :class="classeCss" :disabled="disabled" v-if="routerLink">
      <b-icon v-if="icon" :icon="icon" :size="size" />
      <span v-if="text">{{ text }}</span>
    </router-link>
    <button :type="type" class="button" :class="classeCss" :disabled="disabled" v-else>
      <b-icon v-if="icon" :icon="icon" :size="size" />
      <span v-if="text">{{ text }}</span>
    </button>
  </b-tooltip>
  <router-link :to="to" class="button" :class="classeCss" :disabled="disabled" v-else-if="routerLink">
    <b-icon v-if="icon" :icon="icon" :size="size" />
    <span v-if="text">{{ text }}</span>
  </router-link>
  <button :type="type" class="button" :class="classeCss" :disabled="disabled" v-else>
    <b-icon v-if="icon" :icon="icon" :size="size" />
    <span v-if="text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    },
    tooltip: {
      type: String,
      default: null
    },
    tooltipPosition: {
      type: String,
      default: 'is-top'
    },
    to: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    routerLink: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    css: {
      type: String,
      default: null
    }
  },
  computed: {
    classeCss () {
      let css = (this.loading) ? 'is-loading ' : ''
      css += (this.size) ? this.size + ' ' : ''
      css += (this.css) ? this.css : ''
      return css
    }
  }
}
</script>
