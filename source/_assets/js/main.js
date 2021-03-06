window.axios = require('axios');
window.fuse = require('fuse.js');
window.Vue = require('vue');

import Search from './components/Search.vue';
import hljs from 'highlight.js/lib/highlight';
import hljsDefineVue from 'highlightjs-vue';

hljsDefineVue(hljs);

// Syntax highlighting
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('html', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
hljs.registerLanguage('php', require('highlight.js/lib/languages/php'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

// Vue.config.productionTip = false;

new Vue({
    components: {
        Search,
    },

    mounted() {
        // hljs.initHighlightingOnLoad();
        document.querySelectorAll('pre code').forEach((block) => {
            // console.log(block);
            hljs.highlightBlock(block);
        });
    }
}).$mount('#app');
