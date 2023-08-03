import React, { useState } from "react";
import "./Openforum.css";

function CommentSection({ token }) {
  const [comments, setComments] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.elements.comment.value;
    const newComment = { text: comment, likes: 0, replies: [] };
    const newComments = [...comments, newComment];
    setComments(newComments);
    localStorage.setItem(`comments-${token}`, JSON.stringify(newComments));
    event.target.reset();
  }

  function handleEdit(commentIndex, newText) {
    const newComments = [...comments];
    newComments[commentIndex].text = newText;
    setComments(newComments);
    localStorage.setItem(`comments-${token}`, JSON.stringify(newComments));
  }

  function handleLike(commentIndex) {
    const newComments = [...comments];
    if (!newComments[commentIndex].liked) {
      newComments[commentIndex].likes += 1;
      newComments[commentIndex].liked = true;
      setComments(newComments);
      localStorage.setItem(`comments-${token}`, JSON.stringify(newComments));
    }
  }

  function handleReply(commentIndex, replyText) {
    const newComments = [...comments];
    newComments[commentIndex].replies.push(replyText);
    setComments(newComments);
    localStorage.setItem(`comments-${token}`, JSON.stringify(newComments));
  }

  function handleDelete(commentIndex) {
    const newComments = [...comments];
    newComments.splice(commentIndex, 1);
    setComments(newComments);
    localStorage.setItem(`comments-${token}`, JSON.stringify(newComments));
  }

  // Load comments from local storage when the component mounts
  useState(() => {
    const storedComments = localStorage.getItem(`comments-${token}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2>Comments:</h2>
        <div className="col-lg-6">
          {comments && comments.length > 0 ? (
            <ul>
              {comments.map((comment, index) => (
                <div className="txt-field" key={index}>
                  <span className="text-black">{comment.text}</span>
                  <br />
                  <hr />
                  <h4>Replies :)</h4>
                  <div >
                    <div >
                      {comment.replies ? (
                        comment.replies.map((reply, replyIndex) => (
                          <div  key={replyIndex}>
                            <span style={{color: "green"}}>{reply}</span>
                          </div>
                        ))
                      ) : (
                        <p></p>
                      )}
                    </div>
                    <div className="my-2 mx-2 d-flex justify-content-end">
                      {/* <button
                      className="btn btn-secondary btn-sm mx-1 "
                        onClick={() =>
                          handleEdit(
                            index,
                            prompt("Edit comment:", comment.text)
                          )
                        }
                        
                      >
                        Edit
                      </button> */}
                      <button className="btn btn-info btn-sm mx-1" onClick={() => handleLike(index)}>
                        Like ({comment.likes})
                      </button>
                      <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </div>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        handleReply(index, event.target.elements.reply.value);
                        event.target.reset();
                      }}
                    >
                      <textarea className="txt-field " type="text" name="reply" placeholder="Reply"  rows="1" cols="50" required/>
                      <button className="btn btn-primary mx-2 my-2" type="submit">
                        Reply
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p></p>
          )}
        </div>

        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            {/* <input type="text" name="comment" placeholder="Add a comment" /> */}
            <textarea
              class="form-control txt-field"
              name="comment"
              id="exampleFormControlTextarea1"
              rows="7"
              required
            ></textarea>
            <button className="btn btn-primary my-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;