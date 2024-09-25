import { Link } from 'react-router-dom';
import '../App.css';
import data from "../data/blogData.json"
import BlogCard from './BlogCard';

function BlogContainer({blogCount, pages, pageNumber, setPageCount, categories, setCategories, searchName, sortOrder, destination}) {
  pageNumber = (pageNumber - 1)*blogCount;
  let blogListData = [];
  let blogList = [];
  let pageCount = 0;

  for(let i = 0; i < data.length; i++){ //select by search and category
    const isSearch = data[i].title.toLowerCase().includes(searchName.toLowerCase());
    
    const blogCategory = new Set(data[i].categories);
    let isCategory = categories.size === 0;
    if(!isCategory){
      if(categories.size === 1){
        isCategory = [...blogCategory].some(cat => categories.has(cat));
      }else{
        isCategory = [...categories].every(cat => blogCategory.has(cat));
      }
    }
    if(isSearch && isCategory){
      blogListData.push(data[i]);
      pageCount++;
    }
  }


  const getCompareSortFunction = (order) => {
    if (order === "Most recent") {
    return (a, b) => new Date(b.author.publicationDate) - new Date(a.author.publicationDate);
    } else if (order === "Less recent") {
    return (a, b) => new Date(a.author.publicationDate) - new Date(b.author.publicationDate);
    } else if (order === "By name(A-Z)") {
    return (a, b) => a.title.localeCompare(b.title);
    } else if (order === "By name(Z-A)") {
    return (a, b) => b.title.localeCompare(a.title);
    }
    return () => 0;
  };
  
  const compareSort = getCompareSortFunction(sortOrder);//sort by order

  blogListData.sort(compareSort);

  
  for(let i = pageNumber; i < Math.min(blogListData.length, pageNumber + blogCount * pages); i++){ //create an aaray of component cards
      blogList.push(
        <BlogCard data={blogListData[i]} setCategories={setCategories}/>
      );
  }

  setPageCount(Math.ceil(pageCount /= blogCount));


  if(blogList.length !== 0){
    return(
      <div className={`blogContainer ${!destination? "Category" : ""}`}>
        {blogList}
      </div>
    )
  } else {
    return(<p className="emptyBlogContainer">No blogs were found<br/> that match your query</p>)
  }
}

export default BlogContainer;