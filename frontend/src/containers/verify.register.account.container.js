import React, { Component} from 'react'
import axios from 'axios'
import VerifyRegisterAccount from '../components/VerifyRegisterAccount/verify.register.account'
import NotFound from '../components/404/404'
class VerifyRegisterAccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            isconfirm: true
        }
    }
    async componentWillMount() {
        try {
           await axios.get('http://localhost:3030/user/verify/' + this.props.match.params.token)
        }
        catch(err) {
            this.setState({isconfirm: false})
        }
    }
    render() {
        if(this.state.isconfirm) {
            return(
                <VerifyRegisterAccount/>
            )
        } else {
            return (
                <NotFound/>
            )
        }
            
    }
}
export default VerifyRegisterAccountContainer