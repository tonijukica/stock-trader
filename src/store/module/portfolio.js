const state = {
    funds: 15000,
    boughtStocks: []
}

const getters = {
    getFunds: state => {
        return state.funds;
    },
    getOwnedStocks (state, getters) {
        return state.boughtStocks.map(stock => {
            const record = getters.getStocks.find(el => el.id == stock.id);
            return {
                id: stock.id,
                name: record.name,
                quantaty: stock.quantaty,
                price: record.price,

            }
        });
    }
}
const mutations = {
    'BUY_STOCK': (state, stockOrder) => {
        const existingStock = state.boughtStocks.find(el => el.id == stockOrder.id);
        if(existingStock) {
            existingStock.quantaty += stockOrder.quantaty;
        }
        else 
            state.boughtStocks.push({
                id: stockOrder.id,
                quantaty: stockOrder.quantaty
            });
            state.funds -= stockOrder.quantaty * stockOrder.price;
    },
    'SELL_STOCK': (state, {stockId, quantaty, price}) => {
        const stock = state.boughtStocks.find(el => el.id == stockId);
        if(stock.quantaty > quantaty)
            state.quantaty -= quantaty;
        else
           state.boughtStocks = state.boughtStocks.filter(el => el.id !== stockId);
        state.funds += quantaty * price;
    }
}

const actions = {
    sell({commit}, stockOrder) {
        commit('SELL_STOCK', stockOrder);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}