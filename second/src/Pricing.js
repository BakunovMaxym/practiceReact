import PriceCard from "./components/PriceCard";

function Pricing() {
    return (
      <div>
        <div id="pricingContainer">
            <p class="pricingHeader">Our Pricing Plans</p>
            <p class="pricingDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae porro dolores officiis repellendus veniam, aperiam nesciunt.</p>
            <div class="priceCardContainer">
                <PriceCard price="$299" tag="Per Design" title="Landing Page" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nemo vel et, qui odit." id=""
                    pointerImg={["Pointer.svg", "Pointer.svg", "Pointer.svg", "PointerGray.svg", "PointerGray.svg"]} 
                    perks={["All limited links", "Own analistics platform", "Chat support", "Optimize hashtags", "Unlimited users"]}
                />
                <PriceCard price="$399" tag="Multi Design" title="Website Page" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam reiciendis, ea sint voluptatibus, quos saepe laudantium impedit." id="middle" 
                    pointerImg={["Pointer.svg", "Pointer.svg", "Pointer.svg", "Pointer.svg", "Pointer.svg"]} 
                    perks={["All limited links", "Own analistics platform", "Chat support", "Optimize hashtags", "Unlimited users"]}
                />
                <PriceCard price="$499+" tag="Per Design" title="Complex Project" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iste." id="" 
                    pointerImg={["Pointer.svg", "Pointer.svg", "Pointer.svg", "Pointer.svg", "Pointer.svg", "Pointer.svg"]} 
                    perks={["All limited links", "Own analistics platform", "Chat support", "Optimize hashtags", "Unlimited users", "Assist and Help"]}
                />

                {/* <div class="priceCard" id="middle">
                    <div class="priceHeader">
                        <p class="price">$399</p>
                        <p>Multi Design</p>
                    </div>
                    <p class="title">Website Page</p>
                    <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam reiciendis, ea sint voluptatibus, quos saepe laudantium impedit.</p>
                    <div class="cardBottom">
                        <ul class="priceList">
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>All limited links</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Own analistics platform</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Chat support</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Optimize hashtags</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Unlimited users</p></li>
                        </ul>
                        <button class="start">Get started</button>
                    </div>
                </div>

                <div class="priceCard">
                    <div class="priceHeader">
                        <p class="price">$499+</p>
                        <p>Per Design</p>
                    </div>
                    <p class="title">Complex Project</p>
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur iste.</p>
                    <div class="cardBottom">
                        <ul class="priceList">
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>All limited links</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Own analistics platform</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Chat support</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Optimize hashtags</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Unlimited users</p></li>
                            <li class="priceItem"><img src="/images/Pointer.svg" alt=""/><p>Assist and Help</p></li>
                        </ul>
                        <button class="start">Get started</button>
                    </div>
                </div> */}
            </div>

        </div>
        </div>
    );
  }
  
  export default Pricing;
  