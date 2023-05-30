<script lang="ts">
  export let value = '';
  export let name = '';
  export let label = '';
</script>

<div class="form-group">
  <div class="form-label-group">
    <input type="password" id="{name}" name="{name}" class="form-control" bind:value autocomplete="current-password" />
    <label for="{name}">{label}</label>
  </div>
</div>

<style lang="scss">
  @import '../../styles/inputStyles.scss';
</style>
