import FeedbackItem from './components/FeedbackItem';
import FeatureItem from './components/FeatureItem';
import Detail from './components/Detail';
import {useState} from 'react';
import { Link  } from "react-router-dom";


function Home() {

    const feedbackInfo = [
        {img: "guy.jfif", feedbackText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, cumque consequatur sequi quidem officia non. Ducimus, totam, adipisci, doloremque quas rerum quis sequi voluptate voluptas delectus necessitatibus cumque iure quasi.", authorName: "Jason Statham", authorPost: "Just Ordinary Guy"},
        {img: "octopus.jfif", feedbackText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eum, corporis quasi eveniet consectetur necessitatibus, vitae, labore ad tempora incidunt minus voluptatibus repellat odio nam animi dolor expedita culpa magni.", authorName: "Octopus", authorPost: "Deep's best friend"},
        {img: "geralt.jfif", feedbackText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consequatur sint officiis nihil aliquid perspiciatis numquam officia consectetur odio placeat vero earum nisi dolor exercitationem, magni cum ullam ab similique?",  authorName: "Geralt of Rivia", authorPost: "Witcher"}
    ];

    const [ feedbackNumber, setFeedbackNumber ] = useState(0);
    const swipeLeft = feedbackNumber === 0 ? "swipebtn": "swipebtn activeSwipe";
    const swipeRight = feedbackNumber === feedbackInfo.length - 1? "swipebtn": "swipebtn activeSwipe";

    const switchFeedback = (e) => {
        console.log(feedbackNumber);
        let newFeedbackNumber = feedbackNumber + e;

        if (newFeedbackNumber >= 0 && newFeedbackNumber < feedbackInfo.length) {
            setFeedbackNumber(newFeedbackNumber);
        }
    }
    
    return (
      <div>
        <div id="startInfo">
            <div class="startInfoContent">
                <p class="startInfoHeader">Building stellar website for early startup</p>
                <p class="startInfoText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dicta magnam blanditiis</p>
                <div class="startInfoBtnContainer">
                    <button class="startInfoBtn">View our work</button>
                    <button class="startInfoPrice"><Link to="/Pricing#pricingContainer">View pricing →</Link> </button>
                </div>
            </div>
            <div class="startInfoImgContainer">
                <img  class="startInfoImg" src="./images/startInfoImg.svg" alt=""/>
            </div>
        </div>
        <div id="description">
            <div class="work">
                <h1 class="descriptionTitle">How we work</h1>
                <p class="workDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veniam molestiae quam nemo.</p>
            </div>

            <div class="details">
                <Detail img="one.png" header="Strategy" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit."/>
                <Detail img="two.png" header="Wireframing" desc="Beatae dolor minima ipsum maxim soluta amet voluptates perferendis."/>
                <Detail img="three.png" header="Design" desc="Fuga, porro sapiente consequuntur commodi, repellendus quasi dolore."/>
                <Detail img="four.png" header="Development" desc="Lorem, ipsum dolor sit amet cons adipisicing elit. Voluptatem recus."/>
            </div>
        </div>
        <div id="projContainer">
            <p class="projHeader">View our projects</p>
            <div class="projGallery">
                <div class="mainProj">
                    <img src="./images/mainProj.png" alt=""/>
                    <div class="overlay">
                        <p class="overlayHeader">Workhub office Webflow Webflow Design</p>
                        <p class="overlayText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti quibusdam earum repellat.</p>
                        <button class="overlayBtn">View project →</button>
                    </div>
                </div>
                <div class="secondaryProj">
                    <div class="firstProj">
                        <img src="./images/firstProj.png" alt=""/>
                        <div class="overlay">
                            <p class="overlayHeader">John Doe</p>
                            <button class="overlayBtn">View project →</button>
                        </div>
                    </div>
                    <div class="firstProj">
                        <img src="./images/second.png" alt=""/>
                        <div class="overlay">
                            <p class="overlayHeader">Creative agency</p>
                            <button class="overlayBtn">View project →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="features">
                <p class="blockTitle">Features</p>
                <p class="blockSlogan">Design that solves problems, one product at a time</p>
            <div class="featuresBody">
                <FeatureItem sticer="👥" tittle="Uses Clients First" desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam consequatur maiores optio molestias reiciendis quaerat incidunt at animi corporis, mollitia ullam harum atque! Tempore, illo aliquam. Quis dolorem minima modi?"/>
                <FeatureItem sticer="☑️" tittle="Two Free Revision Round" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus, possimus porro labore consequuntur, accusantium et deleniti iusto natus ea quae deserunt temporibus omnis exercitationem illo animi debitis. Quasi, cum?"/>
                <FeatureItem sticer="✏️" tittle="Template Customization" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet aperiam beatae dolorum modi. Aliquid quibusdam nulla rem expedita esse et natus tempora, dolores architecto labore minima, at, nam iste animi."/>
                <FeatureItem sticer="❓" tittle="24/7 Support" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, eos modi dignissimos omnis sapiente fugiat soluta laborum nemo ad quasi atque expedita ipsam voluptas aut praesentium tempora, dolorum maiores quo."/>
                <FeatureItem sticer="⏱️" tittle="Quick Delivery" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cumque tempora vitae iste repudiandae molestiae magni adipisci officiis consectetur nesciunt porro ratione expedita, sint, obcaecati cum quia quidem. Quam, non."/>
                <FeatureItem sticer="🗈" tittle="Hands-on approach" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis atque ut culpa, quo, earum eaque natus odio accusamus neque ducimus ipsa, ad porro perspiciatis eum repudiandae repellendus at velit ex!"/>
            </div>
        </div>
        <div id="feedbackContainer">
            <div class="feedbackTitle">
                <p class="feedbackBlockTitle">What our clients say about us</p>
                <p class="feedbackBlockDetails">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem enim fuga ducimus natus molestiae.</p>
            </div>
            <FeedbackItem data={feedbackInfo[feedbackNumber]}/>
            <div class="swipeButtons">
                <button onClick={() => switchFeedback(-1)} class={swipeLeft}>{"<"}</button>
                <button onClick={() => switchFeedback(1)} class={swipeRight}>{">"}</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  