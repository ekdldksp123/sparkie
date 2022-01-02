export interface Counter {
    cnt: number,
}

export interface CommentProps extends Counter {
    showCmts: boolean,
    setShowCmts: (value:boolean) => void,
}