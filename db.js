const delayResponse = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const db = {
  postComments: [],
  async getComments(postId) {
    console.log("fetching comment", {
      postId,
    });
    await delayResponse(1000);
    return this.postComments.find(
      (postComment) => postComment.postId === postId
    )?.comments;
  },
  async insertComment(postId, content) {
    console.log("inserting comment", {
      postId,
    });
    await delayResponse(500);
    const comment = {
      created_at: Date.now(),
      content,
    };
    const index = this.postComments.findIndex(
      (postComment) => postComment.postId === postId
    );
    if (index === -1) {
      const postComment = {
        postId,
        comments: [comment],
      };
      this.postComments.push(postComment);
      return true;
    }

    const postComment = this.postComments[index];
    postComment.comments.push(comment);
    return true;
  },
};

module.exports = {db}
