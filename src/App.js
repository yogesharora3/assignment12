import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Display from './component/Display'
import Display from './component/Display';
import Button from './component/Button'
class App extends Component{
  state={
    count:0,
    arr:[255,255,255,1]
  }
  Increase=()=>{
   var m=this.state.count+1;
   var k=[]
    k.push(Math.floor(Math.random()*255))
    k.push(Math.floor(Math.random()*255))
    k.push(Math.floor(Math.random()*255))
    k.push((Math.random()))
    this.setState({
      count:m,
      arr:k
    })
    
  }
  decrease=()=>{
    var n=this.state.count-1;
    var k=[]
    k.push(Math.floor(Math.random()*255))
    k.push(Math.floor(Math.random()*255))
    k.push(Math.floor(Math.random()*255))
    k.push((Math.random()))
    console.log(k);
    if(n>0){
      this.setState({
        count:n,
        arr:k
      
      })
    }
    else if(n===0){
      this.setState({
        count:n,
        arr:[255,255,255,1]
      })
    }
  }
  refresh1=()=>{
    this.setState({
      count:0,
      arr:[255,255,255]
    })
  }
  render(){
    return(
      <div>
         <h2 className="heading">ASSIGNMENT 2</h2>
        <Display count={this.state.count} arr={this.state.arr} />
        <Button Increase={this.Increase} decrease={this.decrease} refresh1={this.refresh1}/>
      </div>
    );
  }
}

export default App;
