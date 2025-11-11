<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // 自动重定向到中文首页
  if (typeof window !== 'undefined') {
    window.location.href = '/Cloudflare-Navihive/zh/';
  }
});
</script>

# Redirecting...

正在跳转到中文首页...
