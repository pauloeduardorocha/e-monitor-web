<style scoped></style>

<template>
  <div class="column"
       :class="{
          'is-1':s1,
          'is-2':s2,
          'is-3':s3,
          'is-4':s4,
          'is-5':s5,
          'is-6':s6,
          'is-7':s7,
          'is-8':s8,
          'is-9':s9,
          'is-10':s10,
          'is-11':s11,
          'is-12':s12
       }">
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      s1: { type: Boolean, default: false },
      s2: { type: Boolean, default: false },
      s3: { type: Boolean, default: false },
      s4: { type: Boolean, default: false },
      s5: { type: Boolean, default: false },
      s6: { type: Boolean, default: false },
      s7: { type: Boolean, default: false },
      s8: { type: Boolean, default: false },
      s9: { type: Boolean, default: false },
      s10: { type: Boolean, default: false },
      s11: { type: Boolean, default: false },
      s12: { type: Boolean, default: false }
    }
  }
</script>
