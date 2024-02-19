<script setup lang="ts">
import ToasterItem from "./ToasterItem.vue";
import { globalState, removeToast } from "../core/store";
</script>
<template>
  <Teleport to="body">
    <transition
      name="VueHotToast__teleport-transition"
      tag="div"
      class="VueHotToast__teleport-transition"
    >
      <div class="VueHotToast__toast-container">
        <ToasterItem
          v-for="item in globalState.notifications"
          :key="item.id"
          :id="item.id"
          :type="item.type"
          :message="item.message"
          :auto-close="item.autoClose"
          :duration="item.duration"
          @close="
            () => {
              removeToast(item.id);
            }
          "
        />
      </div>
    </transition>
  </Teleport>
</template>
