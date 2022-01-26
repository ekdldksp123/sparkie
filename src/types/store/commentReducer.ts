import { combineReducers } from 'redux';
import { REVEAL, HIDE, CommentAction, initialState, CommentState } from './actions/commentActions';

// 리듀서 작성
const reducer = (state: CommentState = initialState, action: CommentAction): CommentState => {
    switch(action.type) {
        case REVEAL: return { show: true }
        case HIDE: return { show: false }
        default: return state
    }
}

// 루트 리듀서 내보내기
export const rootReducer = combineReducers({reducer})
// 루트 리듀서의 반환값을 유추 해줌
export type RootState = ReturnType<typeof rootReducer>
