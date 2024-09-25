import { useState } from 'react';
import '../App.css';
import BlogContainer from './BlogContainer';
import BlogScroll from './BlogScroll';
import SearchPanel from './SearchPanel';
import Footer from './Footer';

function Home() {
    const [categories, setCategories] = useState(new Set());
    const [sortOrder, setSortOrder] = useState("By name(A-Z)");
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
        <>
            <SearchPanel
                categories={categories}
                setCategories={setCategories}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                searchName={searchName}
                setSearchName={setSearchName}
                destination={"Home"}
            />
            <BlogContainer
                pages={pages}
                pageNumber={pageNumber}
                setPageCount={setPageCount}
                categories={categories}
                setCategories={setCategories}
                searchName={searchName}
                sortOrder={sortOrder}
                destination={"Home"}
                blogCount = {9}
            />
            <BlogScroll
                pages={pages}
                setPages={setPages}
                pageNumber={pageNumber}
                pageCount={pageCount}
                handlePageNumber={handlePageNumber}
            />
            <Footer/>
        </>
    );
}

export default Home;
