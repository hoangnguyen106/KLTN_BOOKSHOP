import React, { useState, useEffect, useRef, Component, Link } from "react";
import styled from "styled-components";
import { Redirect  } from "react-router-dom";
import { io } from "socket.io-client";
import Contacts  from "../components/chat/Contacts";
import ChatContent  from "../components/chat/ChatContent";
import Welcome from "../components/chat/Welcom";
import axios from "axios";
import { allUsersRoute, host } from "../utils/APIChart";
import * as storeConfig from '../config/store.config';
import * as userActions from "../actions/user.action";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.socket=React.createRef();
    this.state={
      currentChat: undefined,
      currentUser: undefined,
      
    }
    this.handleChatChange=this.handleChatChange.bind(this);
  }

  async componentWillMount() {
    if (!storeConfig.getUser()) {
      console.log("check");
    return  this.props.history.replace("/login");
    } else {    
      this.currentUser= storeConfig.getUser()  
    }
    
    if(this.currentUser){
      this.socket.current = io(host);
      this.socket.current.emit("add-user",this.currentUser.id);
      console.log("pass");

     
    }
  }
  componentDidMount() {
    
  }
   handleChatChange = (chat) => {
    this.setState(this.state.chat);
  };

  render(){
    return (
      <div>
        <Container>
          <div className="container">
            <Contacts contacts={this.state.contacts} changeChat={this.handleChatChange} />
            {this.state.currentChat === undefined ? (
              <Welcome />
            ) : (
              <ChatContent currentChat={this.state.currentChat} socket={this.socket} />
            )}
          </div>
        </Container>
      </div>
    );
  }
  

}
export default (Chat);

// export default function Chat() {
//   // const navigate = useNavigate();
//   const socket = useRef();
//   const [contacts, setContacts] = useState([]);
//   const [currentChat, setCurrentChat] = useState(undefined);
//   const [currentUser, setCurrentUser] = useState(undefined);
//   useEffect(async () => {
//     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       // navigate("/login");
//       <Link to="/login" />
//     } else {
//       setCurrentUser(
//         await JSON.parse(
//           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//         )
//       );
//     }
//   }, []);
//   useEffect(() => {
//     if (currentUser) {
//       socket.current = io(host);
//       socket.current.emit("add-user", currentUser.id);
//     }
//   }, [currentUser]);

//   useEffect(async () => {
//     if (currentUser) {
//       if (currentUser.isAvatarImageSet) {
//         const data = await axios.get(`${allUsersRoute}/${currentUser.id}`);
//         setContacts(data.data);
//       } else {
//         // navigate("/setAvatar");
//         <Link to="/setAvatar" />
//       }
//     }
//   }, [currentUser]);
//   const handleChatChange = (chat) => {
//     setCurrentChat(chat);
//   };
//   return (
//     <div>
//       <Container>
//         <div className="container">
//           <Contacts contacts={contacts} changeChat={handleChatChange} />
//           {currentChat === undefined ? (
//             <Welcome />
//           ) : (
//             <ChatContent currentChat={currentChat} socket={socket} />
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// }

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
