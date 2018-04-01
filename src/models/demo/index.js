
/* global window */
import modelExtend from 'dva-model-extend'
import dva from 'dva';
import { model } from '../common'

export default {
    namespace: 'demo',
    state: {
        current: 0
    },
    //同步处理
    reducers: {
        add(state) {
            return {
                ...state,
                current: state.current + 1
            };
        },
        minus(state) {
            return {
                ...state,
                current: state.current - 1
            };
        }
    },
    //异步处理
    effects: {
        //*add() {} 等同于 add: function*(){}
        //call 和 put 都是 redux-saga 的 effects，call 表示调用异步函数，
        //put 表示 dispatch action，其他的还有 select, take, fork, cancel 等，详见 redux-saga 文档
        //默认的 effect 触发规则是每次都触发(takeEvery)，还可以选择 takeLatest，或者完全自定义 take 规则
        *minusAsyn(action, { call, put }) {
            yield call(deplay,1000);
            yield put({ type: 'minus' });
        },
    },
}
function deplay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}