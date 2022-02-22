export interface Counter {
    cnt: number,
}

export interface CommentProps extends Counter {
    showCmts: boolean,
    setShowCmts: (v:boolean) => void,
    // revealCmts: () => void,
    // hideCmts: () => void,
}