function FeatureItem(props) {
    const {sticer, tittle, desc} = props;
    return (
    <div class="featuresItem">
        <p class="featureItemSticer">{sticer}</p>
        <p class="featureItemtitle">{tittle}</p>
        <p class="featureItemDescription">{desc}</p>
    </div>
    );
  }
  
  export default FeatureItem;
  