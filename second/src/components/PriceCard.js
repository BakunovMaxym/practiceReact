function PriceCard(props) {
    const {price, tag, title, text, id, pointerImg, perks} = props;
    console.log(props);

    let listCreate = [];
    
    for(let i = 0; i < pointerImg.length; i++){
        listCreate.push(
            <li key="i" class="priceItem"><img src={`/images/${pointerImg[i]}`} alt="" /><p>{perks[i]}</p></li>
        );
    }
    console.log(listCreate);
    return (
        <div class="priceCard" id={id}>
            <div class="priceHeader">
                <p class="price">{price}</p>
                <p>{tag}</p>
            </div>
            <p class="title">{title}</p>
            <p class="text">{text}</p>
            <div class="cardBottom">
                <ul class="priceList">{listCreate}
                    {/* <li class="priceItem"><img src="/images/Pointer.svg" alt="" /><p>Own analistics platform</p></li>
                    <li class="priceItem"><img src="/images/Pointer.svg" alt="" /><p>Chat support</p></li>
                    <li class="priceItem"><img src="/images/PointerGray.svg" alt="" /><p>Optimize hashtags</p></li>
                    <li class="priceItem"><img src="/images/PointerGray.svg" alt="" /><p>Unlimited users</p></li> */}
                </ul>
                <button class="start">Get started</button>
            </div>
        </div>
    );
}

export default PriceCard;
