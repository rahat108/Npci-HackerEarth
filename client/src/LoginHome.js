import React, { Component } from 'react';
import { getUserProfile} from './util/APIUtils';
import LoadingIndicator  from './common/LoadingIndicator';
import NotFound from './common/NotFound';
import ServerError from './common/ServerError';
import CheckAuthentication from './common/CheckAuthentication';
import TransactionService from './services/TransactionService';
import axios from 'axios';


class LoginHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false,
            items: [],
            receiver:'',
            amount:'',
            details:[],
            transaction :[], 
            x:''           
        }

        this.handleChange = this.handleChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){ 
        const { receiver, amount} = this.state 
        event.preventDefault() 
        const username = this.props.match.params.username;
        this.state.items.map(item => {
                if (receiver == item.name) {
                    this.state.x=item.id;
                  } 
                })
        const trans = {
            amount: amount,
            receiver_id:this.state.x,
            sendername: username
        };

        axios.post(`/accessHome/${username}`,trans)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        
        window.location.reload();
      } 

      handleChange(event){ 
        this.setState({ 
          [event.target.name] : event.target.value 
        }) 
      } 

   
     loadUserProfile=(username) => {        
        const _this=this;
        if(this.props.username !== null){ 
        _this.setState({
            isLoading: true
        });
      }

        getUserProfile(username)
        .then(response => {
            _this.setState({
                user: response,
                isLoading: false
            });
        }).catch(error => {
            if(error.status === 404) {
                _this.setState({
                    notFound: true,
                    isLoading: false
                });
            } else {
                _this.setState({
                    serverError: true,
                    isLoading: false
                });        
            }
        });    
    }    
      
    componentDidMount() {
        const username = this.props.match.params.username;
        this.loadUserProfile(username);
        this.findAllBysendername(username);
        const _this=this;
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
        .then(response => response.json())
        .then((jsonData) => {
            _this.setState({items: jsonData})
        })
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.username !== nextProps.match.params.username) {
            this.loadUserProfile(nextProps.match.params.username);
        }        
    }

    findAllBysendername(username) {
      TransactionService.findAllBysendername(username).then((response) => {
          this.setState({transaction:response.data});
      });
  }
    
    render() {

        if(this.state.isLoading) {
            return <LoadingIndicator />;
        }

        if(this.state.notFound) {
            return <NotFound />;
        }

        if(this.state.serverError) {
            return <ServerError />;
        }
        if(!this.props.isAuthenticated) {
            return <CheckAuthentication {...this.props}/>
        }

        return (
                <div className="container">
                <div className="jumbotron text-center">
                <h1>{this.props.username.username}</h1>
                <p>Balance = {this.props.username.amount}</p>

          <form onSubmit={this.handleSubmit}> 
        <div> 
          <label>Receiver </label> 
          {
           <select name='receiver' defaultValue={this.state.receiver} onChange={this.handleChange} >
          {this.state.items.map(item => {
                    return <option value={item.name}>{item.name}</option>;
                    })}
          </select> 
         
          }
        </div> 
        <div> 
          <label>Amount</label> 
          <input 
            name='amount' 
            placeholder='Amount'
            value={this.state.amount} 
            onChange={this.handleChange} 
          /> 
        </div>       
        <div> 
        <input type="submit" value="Submit" />
        </div> 
      </form>
        <div>
        <table className="table table-hover">
                    <thead>
                        <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        
                        this.state.transaction.map((trans)=>(
                            <tr key={trans.tid}>
                                <td>
                                    {
                                        this.state.items.map(item => {
                                            if (trans.receiver_id == item.id) {
                                                return <img src={item.Image} width="80" height="100"></img>;
                                              } 
                                            })
                                    }
                                </td>
                                <td>
                                    {
                                        this.state.items.map(item => {
                                            if (trans.receiver_id == item.id) {
                                                return item.name;
                                            }                
                                            })
                                    }
                                </td>
                                <td>{trans.amount}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                    
                </table>
            </div>
        </div>
      </div>
                
        );
    }
}

export default LoginHome;