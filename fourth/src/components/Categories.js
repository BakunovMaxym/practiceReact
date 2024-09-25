import { useState } from 'react';
import '../App.css';
import SearchPanel from './SearchPanel';
import BlogContainer from './BlogContainer';
import BlogScroll from './BlogScroll';
import Footer from './Footer';

function Categories() {

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

  return (
    <div className="App">
      <div className="categoryPageBody">
        <SearchPanel
          categories={categories}
          setCategories={setCategories}
          searchName={searchName}
          setSearchName={setSearchName}
        />
        <BlogContainer
          pages={pages}
          pageNumber={pageNumber}
          setPageCount={setPageCount}
          categories={categories}
          setCategories={setCategories}
          searchName={searchName}
          blogCount = {9}
        />

      </div>
      <BlogScroll
        pages={pages}
        setPages={setPages}
        pageNumber={pageNumber}
        pageCount={pageCount}
        handlePageNumber={handlePageNumber}
      />
      <Footer />

    </div>
  );
}

export default Categories;