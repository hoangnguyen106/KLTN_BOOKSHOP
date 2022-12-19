import React, { useState, useEffect, useRef, Component, Link } from "react";
import styled from "styled-components";
import { io } from "socket.io-client";
import Contacts  from "../components/chat/Contact";
import ChatContent  from "../components/chat/ChatContent";
import Welcome from "../components/chat/welcom";
import axios from "axios";
import { allUsersRoute, host } from "../utils/APIChart";
import storeConfig from '../config/store.config'
import * as userActions from "../actions/user.action";

class Chat extends Component {
  constructor() {
    super();
    this.socket=React.createRef();
    this.state={
      currentChat: '',
      currentUser: '',
      
    }
  }

  async componentWillMount() {
    let res = userActions.auth();
    if (res === false) this.props.history.push("/login");
  }

  async componentDidMount(){
    let currentUser = storeConfig.getUser()
    if (!storeConfig.getUser()) {
      this.props.history.push("/login");
    } else {
       this.setState(
        { currentUser}
      );
      console.log("current",currentUser.id);
    }
    if(currentUser){
      this.socket.current = io(host);
      this.socket.current.emit("add-user",currentUser._id);
      console.log("pass");

      // if (this.currentUser.isAvatarImageSet) {
      //   const data = await axios.get(`${allUsersRoute}/${this.state.currentUser._id}`);
      //   this.setState(data.data);
      // } else {
      //   this.props.history.push("/setAvatar");
      // }
    }
  }
render(){
  return (
    <div>
      <Container>
        <div className="container">
          <Contacts contacts={this.state.contacts} changeChat={this.handleChatChange} />
          {this.state.currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContent currentChat={this.currentChat} socket={this.socket} />
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
//       socket.current.emit("add-user", currentUser._id);
//     }
//   }, [currentUser]);

//   useEffect(async () => {
//     if (currentUser) {
//       if (currentUser.isAvatarImageSet) {
//         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
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
