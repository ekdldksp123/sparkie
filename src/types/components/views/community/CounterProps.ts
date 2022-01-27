export interface Counter {
    cnt: number,
}

export interface CommentProps extends Counter {
    showCmts: boolean,
    revealCmts: () => void,
    hideCmts: () => void,
}