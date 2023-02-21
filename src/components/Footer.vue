<template>
  <div
    class="
      mt-16
      md:mt-0
      flex
      justify-center
      sm:justify-between
      items-center
      w-screen
      py-2
      px-8
    "
  >
    <div class="flex items-center space-x-1">
      <span>Made by</span>
      <span class="text-red-500">
        <IconHeart />
      </span>
      <span> by DevOpsFlix Team </span>
    </div>
<div>
  Tristan
</div>
  </div>
</template>

<script>
import IconHeart from "~icons/ion/md-heart";

export default {
  components: {
    IconHeart,
  },
};
</script>

<style>
</style>