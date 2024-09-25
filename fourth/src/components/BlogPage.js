import '../App.css';
import { useState } from 'react';
import BlogContainer from './BlogContainer';
import BlogScroll from './BlogScroll';
import Footer from './Footer';

function BlogPage({ data }) {
  const [categories, setCategories] = useState(new Set());
  const [searchName, setSearchName] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState(1);
  

  const handlePageNumber = (number) => {
    if (number > 0 && number <= pageCount)
      setPageNumber(number)
    setPages(1);
  }

  const author = data.author;

  const colors = [["rgb(138, 43, 226)", "rgb(138, 43, 226,0.2)"], ["rgb(69, 83, 238)", "rgb(69, 83, 238,0.2)"], ["rgb(223, 42, 87)", "rgb(223, 42, 87,0.2)"]];

  return (

    <div className="App">
      <img className="blogPageImage" src={data.image.replace(".", "")} alt="" />
      <div className="blogPageauthor">
        <img className="blogPageprofilePicture" src={author.profilePicture.replace(".", "")} alt="" />
        <div className="blogPageauthorInfo">
          <p className="blogPagename" >{author.firstName} {author.lastName} • </p>
          <p className="blogPagepublicationDate"> {author.publicationDate}</p>
        </div>
      </div>
      <p className="blogPagecardTitle" >{data.title}</p>
      <p className="blogPagedescription">{data.content}</p>
      <p className="blogPagecategories" >{
        data.categories.map((e, index) => (
          <span
            className="blogPagecategory"
            key={index}
            style={{ color: colors[index % colors.length][0], backgroundColor: colors[index % colors.length][1], border: `1px solid ${colors[index % colors.length][0]}`}}
          >
            {e}
          </span>
        ))}</p>
        <BlogContainer
          pages={pages}
          pageNumber={pageNumber}
          setPageCount={setPageCount}
          categories={categories}
          setCategories={setCategories}
          searchName={searchName}
          destination={"Home"}
          blogCount = {6}
        />
        <BlogScroll
        pages={pages}
        setPages={setPages}
        pageNumber={pageNumber}
        pageCount={pageCount}
        handlePageNumber={handlePageNumber}
      />
            <Footer/>
    </div>
  );
}

export default BlogPage;