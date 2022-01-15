export interface Posts {
    posts: Post[],
}

export interface Post {
    feed:PostData,
};

export interface PostData {
    id: string,
    title: string,
    date: string,
    writer: string,
    content: string,
    likes: number,
    comments: Comment[], 
}

export type Comment = {
    id: string,
    writer: string,
    date: string,
    profile: any,
    content: string,
};