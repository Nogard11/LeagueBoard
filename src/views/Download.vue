<template>
    <div>
        <h1>Welcome to the Download page!</h1>
        <n-button type="success" @click="downloadFile()">
            Success
          </n-button>
    </div>
</template>

<script setup lang="ts">
const downloadFile = () => {
      const url = './assets/release/0.0.1/nsis/leagueboard_0.0.1_x64-setup.exe';
      const link = document.createElement('a');
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }


</script>

<style scoped>
/* Add your component styles here */
</style>