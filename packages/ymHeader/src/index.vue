<template>
  <div class="yumi-header">
      yumi-header
      <div>
        <ym-link type="primary">ymlink in header</ym-link>
      </div>
      <slot/>
  </div>
</template>

<script>
import ymLink from "/packages/ymLink"
export default {
    name: 'ymHeader',
    components: {
        ymLink
    }
}
</script>

<style lang="scss" scoped>
.yumi-header {
    border: solid 1px #ccc;
}
</style>