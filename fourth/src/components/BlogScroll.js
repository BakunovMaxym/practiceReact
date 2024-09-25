import { useRef, useState, useEffect} from 'react';
import '../App.css';

function BlogScroll({ pages, setPages, pageNumber, pageCount, handlePageNumber }) {
    let btnsArr = [];
    const [isMiddleClicked, setIsMiddleClicked] = useState(false);
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef(null);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showMore = () => {
        setPages(pages + 1);
    }

    const clickMiddleHandle = () => {
        setIsMiddleClicked(true);
        inputRef.current.focus();
    }

    const handleInput = (event) => {
        let intInput = parseInt(inputValue, 10);
        console.log(typeof (intInput))
        if (event.key === "Enter" && intInput > 3 && intInput < pageCount - 3) {
            handlePageNumber(intInput);
        }
    }

    for (let i = 1; i <= pageCount; i++) { //create an aaray of component cards
        let btnClass = "pageBtn";
        if (i >= pageNumber && i < pageNumber + pages) {
            btnClass += " activeBtn";
        }
        if (i <= 3) {
            btnsArr.push(
                <button key={i} className={btnClass} onClick={() => handlePageNumber(i)}>{i}</button>
            );
        } else if (i > 3 && i <= pageCount - 3) {
            if (pageCount < 7) {
                btnsArr.push(
                    <button key={i} className={btnClass} onClick={() => handlePageNumber(i)}>{i}</button>
                );
            }
            else {
                if (i == 4) {
                    btnsArr.push(
                        <div className="middleBtn">
                            <button key={i} className={`pageBtn mid ${isMiddleClicked ? "hideMid" : ""}`} onClick={() => clickMiddleHandle()}>...</button>
                            <input
                                className={`enterPage ${isMiddleClicked ? "showEnterPage" : ""}`}
                                ref={inputRef}
                                type="number"
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleInput}></input>
                        </div>
                    );
                }
                else {
                    continue
                }
            }
        } else {
            btnsArr.push(
                <button key={i} className={btnClass} onClick={() => handlePageNumber(i)}>{i}</button>
            );
        }
    }

    return (
        <div className="blogScroll">
            {((pageCount >= pageNumber + pages)) ? (
                <div className="showMore" onClick={() => showMore()}>
                    <p className="continueIcon">↻</p>
                    <p className="continueText">Show more</p>
                </div>
            ) : undefined
            }
            <div className="scrollBtnContainer">
                {windowWidth > 760 
                    ? (
                    <>
                        <button className="prevNext" onClick={() => handlePageNumber(pageNumber - 1)}>← Previous</button>
                        <div className="pageBtns">
                            {btnsArr}
                        </div>
                        <button className="prevNext" onClick={() => handlePageNumber(pageNumber + 1)}>Next →</button>
                    </>)
                    : (
                    <>
                        <button className="prevNext" onClick={() => handlePageNumber(pageNumber - 1)}>← Previous</button>
                        <div className="pageBtns">{pageNumber + " of " + pageCount}</div>
                        <button className="prevNext" onClick={() => handlePageNumber(pageNumber + 1)}>Next →</button>
                    </>
                    )
                    }
            </div>
        </div>
    );
}

export default BlogScroll;