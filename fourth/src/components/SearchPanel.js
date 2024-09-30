import { useRef, useState } from 'react';
import useClickOutside from './useClickOutside';

function SearchPanel({setPageNumber, categories, setCategories, sortOrder, setSortOrder, searchName, setSearchName, destination }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const categoryHandler = (newCategory) => {
        setCategories(prevCategories => {
            const updatedCategories = new Set(prevCategories);
            if (newCategory === "View all") {
                updatedCategories.clear();
            } else {
                if (updatedCategories.has(newCategory)) {
                    updatedCategories.delete(newCategory);
                } else {
                    updatedCategories.add(newCategory);
                }
            }
            return updatedCategories;
        });
        setPageNumber(1);
    }

    const orderHandler = (order) => {
        setSortOrder(order);
        setIsOpen(false);
    }

    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setIsOpen(false), 50);
    });

    return (
        <div className={`searchContainer  ${!destination ? "Category" : ""}`}>
            <div className="searchWrapper">
                {searchName === "" ? <div className="searchIcon">🔍</div> : undefined}
                <input
                    className={`searchBox ${searchName !== "" ? "entered" : ""}`}
                    type="text"
                    name="searchBox"
                    placeholder="Search"
                    onChange={(event) => {setSearchName(event.target.value); setPageNumber(1)}}
                />
            </div>

            <div className={`categoryContainer  ${!destination? "Category" : ""}`}>
                {!destination ? (<p className="categories">Blog categories</p>) : undefined}
                <ul className={`categoryList  ${!destination? "Category" : ""}`}>
                    <li className={`categoryItem ${!destination? "Category" : ""} ${categories.size === 0 ? "chosen" : ""}`}
                        onClick={() => categoryHandler("View all")}
                    >View all</li>

                    <li className={`categoryItem ${!destination? "Category" : ""} ${categories.has("Design") ? "chosen" : ""}`}
                        onClick={() => categoryHandler("Design")}
                    >Design</li>

                    <li className={`categoryItem ${!destination? "Category" : ""} ${categories.has("Product") ? "chosen" : ""}`}
                        onClick={() => categoryHandler("Product")}
                    >Product</li>

                    <li className={`categoryItem ${!destination? "Category" : ""} ${categories.has("Software Engineering") ? "chosen" : ""}`}
                        onClick={() => categoryHandler("Software Engineering")}
                    >Software Engineering</li>

                    <li className={`categoryItem ${!destination? "Category" : ""} ${categories.has("Custumer Success") ? "chosen" : ""}`}
                        onClick={() => categoryHandler("Custumer Success")}
                    >Custumer Success</li>

                    <li className={`categoryItem ${!destination? "Category" : ""} ${categories.has("Leadership") ? "chosen" : ""}`}
                        onClick={() => categoryHandler("Leadership")}
                    >Leadership</li>

                    <li className={`categoryItem ${!destination? "Category" : ""} ${categories.has("Management") ? "chosen" : ""}`}
                        onClick={() => categoryHandler("Management")}
                    >Management</li>
                </ul>
                {destination ? (
                <div className="sortContainer">
                    <button className={`sortBtn ${isOpen ? "active" : ""}`} ref={menuRef} onClick={() => setIsOpen(!isOpen)}>{sortOrder}</button>
                    <ul className={`sortList ${isOpen ? "active" : ""}`} ref={menuRef}>
                        <li className="sortItem" onClick={() => orderHandler("Most recent")}>Most recent</li>
                        <li className="sortItem" onClick={() => orderHandler("Less recent")}>Less recent</li>
                        <li className="sortItem" onClick={() => orderHandler("By name(A-Z)")}>By name(A-Z)</li>
                        <li className="sortItem" onClick={() => orderHandler("By name(Z-A)")}>By name(Z-A)</li>
                    </ul>
                </div>) : undefined
                }
            </div>
        </div>
    );
}

export default SearchPanel;