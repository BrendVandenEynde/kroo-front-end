<script setup>

</script>

<template>
    <div class="active-crew surface-tertiary radius-xs">
      <div class="active-crew__top">
        <p>Crew Member Name</p>
        <p>Role</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .active-crew {
    display: flex;
    flex-direction: column;
    width: 360px;
    padding: 20px;
    box-sizing: border-box;
    gap: 12px;
  }
  
  .active-crew__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  </style>
  