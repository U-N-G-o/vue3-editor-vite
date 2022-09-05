<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="属性" class="panel">
      <AttrPanel v-if="selection" />
      <p v-else class="placeholder">请选择组件</p>
    </a-tab-pane>
    <a-tab-pane key="2" tab="事件" class="panel">
      <EventPanel v-if="selection" />
      <p v-else class="placeholder">请选择组件</p>
    </a-tab-pane>
    <a-tab-pane key="3" tab="动画" class="panel">
      <AnimPanel v-if="selection" />
      <p v-else class="placeholder">请选择组件</p>
    </a-tab-pane>
    <template #leftExtra>
      <div class="tabs-extra"></div>
    </template>
    <template #rightExtra>
      <div class="tabs-extra"></div>
    </template>
  </a-tabs>
</template>

<script>
  import { defineComponent, ref, computed } from 'vue';
  import { useStore } from 'vuex'
  import AttrPanel from './right/AttrPanel.vue'
  import AnimPanel from './right/AnimPanel.vue'
  import EventPanel from './right/EventPanel.vue'

  export default defineComponent({
    components: {
      AttrPanel,
      AnimPanel,
      EventPanel
    },
    setup() {
      const store = useStore()
      const selection = computed(() => store.state.widget.selection)

      return {
        selection,
        activeKey: ref('1'),
      };
    },
  });
</script>
<style>
  .tabs-extra {
    width: 50px;
  }
</style>