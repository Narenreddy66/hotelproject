import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAuthenticated: false,
    },
    mutations: {
        setAuthentication(state, status) {
            state.isAuthenticated = status;
        },
    },
    actions: {
        login({ commit }) {
            // You would typically make an API call here for authentication
            // For simplicity, we're just setting isAuthenticated to true
            commit('setAuthentication', true);
        },
        logout({ commit }) {
            // You would typically make an API call here for logout
            // For simplicity, we're just setting isAuthenticated to false
            commit('setAuthentication', false);
        },
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
    },
});

export default store;