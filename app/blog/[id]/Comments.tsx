import db from "@/app/lib/db";
import TimeAgo from "./TimeAgo";

export async function Comments({ postId }: { postId: string }) {
  const comments = await db.getComments(postId);
  return comments && !!comments.length ? (
    <>
      <h2
        style={{
          marginTop: "2em",
        }}
      >
        Comments
      </h2>
      <div>
        {comments.map((comment, index) => {
          return (
            <div key={index} style={{
                border: 'solid 1px #333',
                borderRadius: '4px',
                marginTop: '1em',
                padding: '2em 1em'
            }}>
              <TimeAgo time={comment.created_at}></TimeAgo>
              <p>{comment.content}</p>
            </div>
          );
        })}
      </div>
    </>
  ) : (
    <p
      style={{
        marginTop: "2em",
      }}
    >
      No comments
    </p>
  );
}
