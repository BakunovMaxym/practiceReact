function Detail(props) {
    const {img, header, desc} = props;
    return (
    <div class="detail">
        <img class="detailImg" src={`./images/${img}`} alt=""/>
        <h2 class="detailHeader">{header}</h2>
        <p class="detailDescription">{desc}</p> 
    </div>
    );
  }
  
  export default Detail;
  