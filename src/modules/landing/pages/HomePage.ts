import {
  onMounted,
  defineComponent,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
} from 'vue';

export default defineComponent({
  setup: () => {
    console.log('setup');

    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });

    onMounted(() => {
      console.log('onmounted');
    });
  },
});
