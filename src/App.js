import './App.css';
import t1 from "../src/image/t1.jpg"
import t2 from "../src/image/t2.jpg"
import t3 from "../src/image/t3.jpg"
import t4 from "../src/image/t4.jpg"
import t5 from "../src/image/t5.jpg"
import t6 from "../src/image/t6.jpg"
import t7 from "../src/image/t7.jpg"
import t8 from "../src/image/t8.jpg"
import t9 from "../src/image/t9.jpg"
import t10 from "../src/image/t10.jpg"
import t11 from "../src/image/t11.jpg"
import t12 from "../src/image/t12.jpg"
import t13 from "../src/image/t13.jpg"
import t14 from "../src/image/t14.jpg"
import React, { Component } from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"
import {BsThreeDots} from 'react-icons/bs'
import{BsChevronDown} from 'react-icons/bs'
import {GiPlainCircle} from 'react-icons/gi'
import{BsSearch} from 'react-icons/bs'
import{IoIosArrowUp} from 'react-icons/io'
import{AiOutlineBars} from 'react-icons/ai'
import{AiOutlineAppstore} from 'react-icons/ai'
import{AiOutlineMenu} from 'react-icons/ai'
import{GiCircleSparks} from 'react-icons/gi'
import{FaUserCircle} from 'react-icons/fa'
import{BsFillPlusCircleFill} from 'react-icons/bs'
import{GiFlowerTwirl} from 'react-icons/gi'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class productTable extends Component {
  constructor(props){
    super(props);
    this.state={
      active1:false,
      active2:false,
      active3:false,
      active4:false,
      active5:false,
      store:true,
      comms:true,
      // nonActive:true,
    }
  
//     this.state={
// openMenu:false,
// closeMenu:true
//  

  }
  openNav() {
    // console.log("aaassssdfdff");
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  active1(){
    this.setState({
      active1:!this.state.active1,
      
  
    })
  }
  active2(){
    this.setState({
      active2:!this.state.active2,
  
    })
  }
  active3(){
    this.setState({
      active3:!this.state.active3,
  
    })
  }
  active4(){
    this.setState({
      active4:!this.state.active4,
  
    })
  }
  active5(){
    this.setState({
      active5:!this.state.active5,
  
    })
  }
  forarrowStore(){
this.setState({
  store:!this.state.store
})
  }
  forarrowComms(){
    this.setState({
      comms:!this.state.comms
    })
  }
//   openMenu(){
//     this.setState({
//       openMenu:true,
// closeMenu:false
//     })
//   }


  render() {
    return (
      <div>
      <div id="mySidenav" class="sidenav">
  <a  class="closebtn" onClick={()=>this.closeNav()}><GiFlowerTwirl></GiFlowerTwirl>;</a>
  <a href="#"> <span className="forsidenavClr">Home <span class="badge btn-danger bad" >3</span></span></a>
  <a href="#"><span className="forsidenavClr"> Perople </span></a>
  
  <div className="crd">
  <Accordion ActiveKey="0">
  <Card>
    
    <Card.Header >
      <Accordion.Toggle as={Button} variant="link" eventKey="1" >
      <span className="drpdwn" onClick={()=> this.forarrowStore()}>Store <span className="downarrows">{this.state.store ? <BsChevronDown></BsChevronDown> :<IoIosArrowUp></IoIosArrowUp> }</span> </span>
      </Accordion.Toggle>
    </Card.Header>
    
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p>Product</p>
      <p>Orders</p>
      <p>Discounts</p>
      <p>Licenses</p>
      <p>Affiliates</p>
      </Card.Body>
      {/* <p>Orders</p>
      <p>Discounts</p>
      <p>Licenses</p>
      <p>Affiliates</p> */}

    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2" >
      <span className="drpdwn" onClick={()=> this.forarrowComms()}>Comms <span className="downarrow">{this.state.comms ? <BsChevronDown></BsChevronDown>  :<IoIosArrowUp></IoIosArrowUp> }</span></span>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
      <span className="drpdwn">Report <span className="downarrow"><BsChevronDown></BsChevronDown></span></span>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="4">
      <span className="drpdwn">  Design <span className="downarrow"><BsChevronDown></BsChevronDown></span></span>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
<footer>
  <div className="row mt-5 footer">
    <div className="col-sm-1 ml-3">
    <FaUserCircle/>
     
    </div>
    <div className="col">
    <p className="susana"> Susanna's&nbsp;Store</p> 
    </div>
    <div className="col">
    <BsThreeDots></BsThreeDots>
    </div>
  </div>
</footer>
</div>
        {/* <div className={this.state.openMenu ? "openMenuOn":"openMenuOff"} onClick={()=>this.openMenu()}><AiOutlineMenu></AiOutlineMenu> */}
      

        {/* </div> */}
        <div id="main"> 
     <div className="container">
          <div className="row productfirst">
          
<div className="col-md-8 mt-3">

  <h3><span ><AiOutlineMenu  onClick={() => { this.openNav() }}></AiOutlineMenu></span><span className="mx-4">Product</span></h3>
</div>

<div className="col-md-4 firsticonsmain">
<span className="firsticons"><BsSearch> </BsSearch></span>
<span className="firsticons"><GiCircleSparks/></span>
<span className="firsticons "><FaUserCircle/></span>
<span className="firsticonsplus"><BsFillPlusCircleFill/></span>

</div>
          </div>
        </div>
        <div className="container">
          <div className="row my-3 first">
            <div >
            <span className="search"><BsSearch> </BsSearch></span> 

            </div>
            <div className="col-md-8">
            
            <span><input type="text" className="searchProduct" value=""  placeholder=  " Search Product by Name or Key Word..."></input></span>
            
            </div>
            <div className="col-md-1 forfilter">
              
            <DropdownButton  id="dropdown-basic-button" title="Filter">
  <Dropdown.Item href="#/action-1"><span className={this.state.active1 ? "active1" : "nonActive1"} onClick={()=>this.active1()}><input class="check-input mx-3" type="checkbox" value="" id="flexCheckDefault"/>Name</span></Dropdown.Item>
  <Dropdown.Item href="#/action-2"><span className={this.state.active2 ? "active2" : "nonActive2"} onClick={()=>this.active2()}><input class="check-input mx-3" type="checkbox" value="" id="flexCheckDefault"/>Price</span></Dropdown.Item>
  <Dropdown.Item href="#/action-3"><span className={this.state.active3 ? "active3" : "nonActive3"} onClick={()=>this.active3()}><input class="check-input mx-3" type="checkbox" value="" id="flexCheckDefault"/>Status</span></Dropdown.Item>
  <Dropdown.Item href="#/action-4"><span className={this.state.active4 ? "active4" : "nonActive4"} onClick={()=>this.active4()}><input class="check-input mx-3" type="checkbox" value="" id="flexCheckDefault"/>Total sales</span></Dropdown.Item>
  <Dropdown.Item href="#/action-5"><span className={this.state.active5 ? "active5" : "nonActive5"} onClick={()=>this.active5()}><input class="check-input mx-3" type="checkbox" value="" id="flexCheckDefault"/>Total Revenue</span></Dropdown.Item>
</DropdownButton></div>
<div className="col-sm-2 icons">
<span className="producticons"><AiOutlineBars></AiOutlineBars></span>

<span className="producticons"><AiOutlineAppstore></AiOutlineAppstore></span>
<span className="producticons"><BsThreeDots></BsThreeDots></span>
</div>          
          </div>

        </div>
        <table className="container">
    <thead>
      <tr className="tableHead">
        <th> <input class="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault"/></th>
        <th className="name">Name<AiOutlineArrowDown></AiOutlineArrowDown></th>
        <th>Price</th>
        <th>Status</th>
        <th>Total Sales</th>
        <th>Total Revenue</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t1}/>
                            That secret Sauce
                        </label></td>
                      {/* </div> */}
                        
                        <td>$199.99 </td>
                        <td className="circlegray"><GiPlainCircle></GiPlainCircle></td>
                        <td>-</td>
                        <td class="px-3">-</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t2}/>
                          Clocksy App
                        </label></td>
                      {/* </div> */}
                        
                        <td>	$9.00-$19.00 </td>
                        <td className="circlegray"><GiPlainCircle></GiPlainCircle></td>
                        <td>606</td>
                        <td class="px-3">$17,542.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td ><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t3}/>
                          Splat Attack Wallpaper
                        </label></td>
                      {/* </div> */}
                        
                        <td>	$0 + </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        
                        <td>2,105	</td>
                        <td class="px-3">$10,559.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t4}/>
                          BlockIcons Icons Pack
                        </label></td>
                      {/* </div> */}
                        
                        <td>$2.99-$49.99 </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>1	</td>
                        <td class="px-3">$48.00</td> 
                       <td> <button type="button" className="btn btn-light tableBtn"> Share </button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t5}/>
                          Splashify 2.0
                        </label></td>
                      {/* </div> */}
                        
                        <td>	$9.00-$49.99 </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>402	</td>
                        <td class="px-3">$1,642.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t6}/>
                          Mastering The Grid
                        </label></td>
                      {/* </div> */}
                        
                        <td>$9.99</td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>222	</td>
                        <td class="px-3">$12,554.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t7}/>
                          Liftoff Course
                        </label></td>
                      {/* </div> */}
                        
                        <td>$29.00-$99.00 </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>-</td>
                        <td class="px-3">-</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t8}/>
                          Minimaaal Icons
                        </label></td>
                      {/* </div> */}
                        
                        <td>	$2.99 </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>33	</td>
                        <td class="px-3">$124.92</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t9}/>
                          Render Render
                        </label></td>
                      {/* </div> */}
                        
                        <td>$7.00 </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>108	</td>
                        <td class="px-3">$2,478.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t10}/>
                          40 Lightrooms Present
                        </label></td>
                      {/* </div> */}
                        
                        <td>$5.00+ </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>55,414	</td>
                        <td class="px-3">$1,412,542.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t11}/>
                          Mockka Mockups
                        </label></td>
                      {/* </div> */}
                        
                        <td>	$9.00- $19.00 </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>487</td>
                        <td class="px-3">$12,548.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t12}/>
                          Blurple iphone Wallpapers
                        </label></td>
                      {/* </div> */}
                        
                        <td>$2.00 </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>999	</td>
                        <td class="px-3">$12,548.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t13}/>
                          Snappy appy
                        </label></td>
                      {/* </div> */}
                        
                        <td>$29.00 </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>8,265</td>
                        <td class="px-3">$12,542.14</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                      <tr className="tr">
                      {/* <div className="form-check"> */}
                      
                        <td><input className="check-input ml-3 " type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td> <label className="check-label" for="flexCheckDefault">
                          <img className="tableimage mr-2" src={t14}/>
                          Styleee Font
                        </label></td>
                      {/* </div> */}
                        
                        <td>	$12.99+ </td>
                        <td className="circleGreen"><GiPlainCircle></GiPlainCircle></td>
                        <td>1</td>
                        <td class="px-3">$12.99</td> 
                       <td> <button type="button" className="btn btn-light tableBtn">Share</button></td>
                       <td><BsThreeDots></BsThreeDots></td>
                      </tr>
                     
    </tbody>
  </table>
      </div>
      </div>
     
    )
  }
}
export default productTable
