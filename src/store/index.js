import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || '',
        loading: false, 
        items: [ 
            { name: 'dashboard', handler: 'dashboard', tooltip: 'Рабочая область' },
            { name: 'users', handler: 'users', tooltip: 'Пользователи'},
            { name: 'tasks', handler: 'tasks', tooltip: 'Задачи'},
            { name: 'cloud', handler: 'vm', tooltip: 'Виртуальные машины' }, 
            { name: 'settings', handler: 'settings', tooltip: 'Настройки' }, 
            { name: 'bug', handler: 'test', tooltip: 'Вкладка тестирования' },
            { name: 'sign out', handler: 'logout', tooltip: 'Выход' },
        ],
        settings: []
    },
    getters: {
        login(state){
            return state.token;
        }
    }
    ,
    mutations: {
        startLoading(state){
            state.loading = true;
        },
        endLoading(state){
            state.loading = false;
        },
        login(state){
            localStorage.setItem('token', '1');
            state.token = localStorage.getItem('token');
        },
        logout(state){
            localStorage.setItem('token', '');
            state.token = '';
        }
    },
    actions: {
        logout(state){
            state.commit('logout');
            router.push('/login');
        },
        login(state){
            state.commit('login');
            router.push('/');
        },
        settings(state){
            router.push('/settings');
        },
        dashboard(state){
            router.push('/dashboard');
        },
        users(state){
            router.push('/users');
        },
        test(state){
            router.push('/test');
        },
        vm(state){
            router.push('/vm');
        }
    }
});

export default store;

