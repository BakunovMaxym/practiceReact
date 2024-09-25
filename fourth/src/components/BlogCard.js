import '../App.css';
import { Link } from "react-router-dom";

function BlogCard({data, setCategories}) {
  // const {data, setCategories} = props;
    const author = data.author;
  console.log(author.profilePicture)
    const addCategory = (newCat) => { //set category to chosen in blog card
      setCategories(prevCategories => {
        const updatedCategories = new Set(prevCategories);
        updatedCategories.clear();
        updatedCategories.add(newCat);
        return updatedCategories;
      });
    };

  return (
      <div className="blogCard">
        <img className="image" src={data.image.replace(".", "")} alt=""/>
        <p className="categories" >
          {data.categories.length === 1 
            ? <span onClick={() => addCategory(`${data.categories[0]}`)}>{data.categories}</span>
            : data.categories.map((e, index) => (
              <span key={index} onClick={() => addCategory(`${e}`)}>
                {e}{index < data.categories.length - 1 && ', '}
              </span>
            )
          )
          }</p>
          <Link className="linkToBlog" to={`/blog/${data.title}`}>
            <p className="cardTitle" >{data.title}</p>
            <p className="cardTitleArrow" >↗</p>
          </Link>
        <p className="description">{data.description}</p>
        <div className="author">
            <img className="profilePicture" src={author.profilePicture.replace(".", "")} alt=""/>
            <div className="authorInfo">
                <p className="name" >{author.firstName} {author.lastName}</p>
                <p className="publicationDate">{author.publicationDate}</p>
            </div>
        </div>
      </div>
  );
}

export default BlogCard;