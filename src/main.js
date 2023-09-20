import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/common.css'
import { defineRule, configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json';
import AllRules from '@vee-validate/rules';


Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    ja,
  }),
});

localize('ja');

createApp(App).mount('#app')
