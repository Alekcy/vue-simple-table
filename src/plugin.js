import Table from './simple-vue-table.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('simple-vue-table', Table);
  }
};