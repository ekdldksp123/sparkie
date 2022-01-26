export const REVEAL = true as const
export const HIDE = false as const

// actions
export const revealCmt = () => ({ type: REVEAL })
export const hideCmt = () => ({ type: HIDE })

// 모든 액션에 대한 타입
export type CommentAction = 
    | ReturnType<typeof revealCmt>
    | ReturnType<typeof hideCmt>

// 관리할 상태의 타입
export type CommentState = {
    show: boolean,
}

//초기 상태
export const initialState: CommentState = { show: false }