<script setup lang="ts">
import { computed } from "vue";
import ToasterItem from "./ToasterItem.vue";
import { globalState, removeToast } from "../core/store";

// Compute the position class
const position = computed(() => {
  // based on the first toast's position
  return globalState.notifications.length > 0
    ? globalState.notifications[0].position
    : "top-center";
});
</script>
<template>
  <Teleport to="body">
    <transition
      name="VueHotToast__teleport-transition"
      tag="div"
      class="VueHotToast__teleport-transition"
    >
      <div
        :class="['VueHotToast__toast-container', `VueHotToast__${position}`]"
      >
        <ToasterItem
          v-for="item in globalState.notifications"
          :key="item.id"
          :id="item.id"
          :type="item.type"
          :message="item.message"
          :auto-close="item.autoClose"
          :duration="item.duration"
          :icon="item.icon"
          :position="item.position"
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
