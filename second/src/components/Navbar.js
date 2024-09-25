import { HashLink  } from "react-router-hash-link";
import { Link  } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbarcontainer">
        <p class="logo">Finsweet</p>
        <div class="navbarListContainer">
            <ul class="navbarItems">
                <li class="navbarItem"><HashLink smooth to="/#startInfo" >Home</HashLink></li>
                <li class="navbarItem"><HashLink smooth to="/#description" >About us</HashLink></li>
                <li class="navbarItem"><HashLink smooth to="/#projContainer" >Projects</HashLink></li>
                <li class="navbarItem"><HashLink smooth to="/#features" >Features</HashLink></li>
                <li class="navbarItem"><HashLink smooth to="/#feedbackContainer" >Feedback</HashLink></li>
            </ul>
            <button class="navbarButton"><HashLink to="/Contact#contactContainer">Contact us</HashLink></button>
        </div>
    </div>
  );
}

export default Navbar;
