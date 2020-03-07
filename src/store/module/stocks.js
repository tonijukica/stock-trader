import stocks from '../../data/stocks';

const state = {
    stocks: []
}
const getters = {
    getStocks: state => {
        return state.stocks
    }
}
const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks;
    },
     'RND_PRICE' (state) {
         state.stocks.forEach(stock => {
             stock.price += Math.floor((Math.random()*50)-25);
         })

    }
}
const actions = {
    buy: ({commit}, stockOrder) => {
        commit('BUY_STOCK', stockOrder);
     },
    init: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomPrice: ({commit}) => {
        commit('RND_PRICE');
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}