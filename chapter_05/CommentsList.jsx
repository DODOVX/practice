import React from "react";
import Comment from "./Comment";

const comments = [
    { name: "죠타로", comment: "DIO!" },
    { name: "DIO", comment: "호오, 다가오는 건가? 기껏 조부인 조셉이 시험 종료전의 수험생 같은 필사적인 마음으로 알려줬을 텐데" },
    { name: "죠타로", comment: "다가가지 않으면 네놈을 쳐부술 수 없어" },
    { name: "DIO", comment: "그럼 충분히 다가오도록" },
]
function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}
export default CommentList