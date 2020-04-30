import React ,{Component} from 'react';
import './Button.css'
class Button extends Component{
    render(){
        return(
            <div className="main">
            <button className="plus" onClick={this.props.Increase}><i className="fa fa-plus" aria-hidden="true"></i></button>
            <button className="refresh" onClick={this.props.refresh1}><i className="fa fa-refresh" aria-hidden="true"></i></button>
            <button className="minus" onClick={this.props.decrease}><i className="fa fa-minus" aria-hidden="true"></i></button>
        </div>
        );
    }
}
export default Button;