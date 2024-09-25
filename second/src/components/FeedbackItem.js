function FeedbackItem({data}) {
    // const {data} = props;
    console.log("Feedback Item Data:", data);
    console.log("Image:", data.img);
    console.log("Feedback Text:", data.feedbackText);
    console.log("Author Name:", data.authorName);
    console.log("Author Post:", data.authorPost);
    return (
        <div className="feedback">
            <p className="feedbackText">{data.img ? data.feedbackText : "hz"}</p>
            <div className="feedbackAuthor">
                <div className="author">
                    <img src={`./images/${data.img}`} alt="" className="authorPhoto"/>
                    <div className="authorDetails">
                        <p className="authorName">{data.authorName}</p>
                        <p className="authorPost">{data.authorPost}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedbackItem;
  