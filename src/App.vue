<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from "naive-ui";



</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-global-style />
    <n-dialog-provider>
      <n-message-provider>
        <n-modal-provider>
          <div>
            <li><router-link :to="{name:'home'}"> Home</router-link></li>
            <li><router-link :to="{name:'about'}"> About</router-link></li>
            <li><router-link :to="{name:'download'}"> Download</router-link></li>
          </div>
          <router-view> </router-view>
        </n-modal-provider>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
