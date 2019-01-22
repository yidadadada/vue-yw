import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex)

const arr  = JSON.parse(localStorage.getItem('count') || '[]')

export default new Vuex.Store({
    state : {
        count : arr
    },
    mutations : {
      rou(state,obj){
        state.count.push(obj)
       localStorage.setItem('count', JSON.stringify(state.count ))
      }
    },
    getters : {
        getcount(s){
            var num = 0;
            s.count.forEach( (item) => {
                num += item.num
            } )
            return num
        }
    }
})