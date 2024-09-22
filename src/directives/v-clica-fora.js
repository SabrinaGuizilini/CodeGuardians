export default {
  beforeMount(el, binding, vnode) {
    el.__vClickOutsideHandler__ = (event) => {
      if (!el.contains(event.target) && binding.value) {
        binding.value(event);
      }
    };
    document.addEventListener('mousedown', el.__vClickOutsideHandler__);
  },
  unmounted(el) {
    document.removeEventListener('mousedown', el.__vClickOutsideHandler__);
    delete el.__vClickOutsideHandler__;
  }
};
