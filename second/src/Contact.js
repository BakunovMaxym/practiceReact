import { useState } from "react";

function Contact() {
    const [enterName, setEnterName] = useState("");
    const [email, setEmail] = useState("");
    const [context, setContext] = useState("");
    const [subject, setSubject] = useState("");
    const [question, setQuestion] = useState("");

    const messageData = {enterName, email, context, subject, question};
    const [isSended, setIsSended] = useState(true);

    const handleSend = () => {
        const isEmpty = Object.values(messageData).some(value=> value === "");
        if(isEmpty){
            alert("Fill in all the fields!");
            setIsSended(false);
            console.log(messageData);
        } else {
            console.log(messageData);
            alert("Message sent!");
            setEnterName("");
            setEmail("");
            setContext("");
            setSubject("");
            setQuestion("");
            setIsSended(true);
        }
    }

    return (
      <div>
        <div id="contactContainer">
            <p class="contactHeader">Contact Us</p>
            <p class="contactDetails">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae porro dolores officiis repellendus veniam, aperiam nesciunt.</p>
            <div class="enterContainer">
                <div class="enterInfo">
                    <div class="enterItem">
                        <label for='name' class="tag">Name</label>
                        <input type="text" class="name" name="name" placeholder="Enter your name" 
                            value={enterName}
                            onChange={(e) => setEnterName(e.target.value)}
                            style={{backgroundColor: (enterName === "" && isSended==false)? "#facfd2" : "#f5f5f5"}}
                        />
                    </div>
                    <div class="enterItem">
                        <label for='email' class="tag">Email</label>
                        <input type="email" class="email" name="email" placeholder="Enter your Email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{backgroundColor: (email === "" && isSended==false)? "#facfd2" : "#f5f5f5"}}
                        />
                    </div>
                    <div class="enterItem">
                        <label for='context' class="tag">Subject</label>
                        <input type="text" class="context" name="context" placeholder="Provide context" 
                            value={context}
                            onChange={(e) => setContext(e.target.value)}
                            style={{backgroundColor: (context === "" && isSended==false)? "#facfd2" : "#f5f5f5"}}
                        />
                    </div>
                    <div class="enterItem">
                        <label for='subject' class="tag">Subject</label>
                        <input type="text" class="subject" name="subject" placeholder="Select Subject" 
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            style={{backgroundColor: (subject === "" && isSended==false)? "#facfd2" : "#f5f5f5"}}
                        />
                    </div>
                </div>
                <div class="enterItem message">
                    <label for='question' class="tag">Message</label>
                    <textarea class="question" name="question" placeholder="Write your question here" 
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            style={{backgroundColor: (question === "" && isSended==false)? "#facfd2" : "#f5f5f5"}}
                        ></textarea>
                </div>
                <button class="sendMessage" onClick={handleSend}>Send Message</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  