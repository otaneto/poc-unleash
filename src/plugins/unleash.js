import Vue from 'vue';
import Vuex from 'vuex';
import VueUnleash from 'vue-unleash';

Vue.use(Vuex);

const store = new Vuex.Store({});

Vue.use(VueUnleash, {
  // Optional, name of app
  appName: 'MyVueApp',

  // Optional, instance id of app
  instanceId: 'my-vue-app-1',

  // Required, Unleash instance host
  host: 'https://poc-unleash.netlify.app/',

  // Optional, prefix to filter features by via the Unleash API
  // https://unleash.github.io/docs/api/client/features
  namePrefix: 'MyVueApp',

  // Required
  store,

  // Optional, providers to handle strategy logic
  strategyProviders: {
    /**
     * Example strategy provider
     *
     * @param {object} parameters Strategy parameters object from Unleash API
     * @return {boolean} If enabled or not
     */
    applicationHostname(parameters) {
      const { hostNames } = parameters;

      return hostNames.split(',').includes('vue-unleash.io');
    },
  },
});
