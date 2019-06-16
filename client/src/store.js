import Vue from 'vue';
import Vuex from 'vuex';
import request from './utils/request';


Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        userinfo:{}
    },
    mutations:{
        setuser(state,date){
            state.userinfo=date;
        }
    },
    actions:{
        getUserInfo({commit}){
            request.get('/api/user/info').then(res=>{
                commit('setuser',res.data)
            })
        }
    }
})
export default store; 