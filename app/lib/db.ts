export interface Comment {
    created_at: number,
    content: string,
}

export interface PostComment {
    postId: string,
    comments: Comment[]
}

export interface DB {
    postComments: PostComment[],
    getComments: (postId: string) => Promise<Comment[] | undefined>,
    insertComment: (postId: string, content: string) => Promise<boolean>
}

const db: DB = {
    postComments: [],
    async getComments(postId: string) {
        return this.postComments.find(postComment => postComment.postId === postId)?.comments
    },
    async insertComment(postId: string, content: string) {
        const comment: Comment =  {
            created_at: Date.now(),
            content
        }
        const index = this.postComments.findIndex(postComment => postComment.postId === postId)
        if(index === -1) {
            const postComment: PostComment = {
                postId,
                comments: [
                    comment
                ]
            }
            this.postComments.push(postComment)
            return true
        }
        const postComment = this.postComments[index]
        postComment.comments.push(comment)
        return true
    }
}

export default db