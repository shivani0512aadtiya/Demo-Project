function Display(){
return<div className="container" style={{marginLeft:'293px'}}>
     <h1>patient Detail</h1>
     <br/>
     <div>
     <label>Name</label>
     <br/>
     <input type="text"/>
     <br/>
     <label>Mobile number</label>
     <br/>
     <input type="number"/>
     <br/>
     <label>OTP</label>
     <br/>
     <input type="number"/>
     <br/>
     <label>Email</label>
     <br/>
     <input type="email"/>
     </div>
     <br/>
     <br/>
     <input type="checkbox"/>&nbsp;The same email is registered with the policy
     <br/>
     <br/>
     <button className="btn btn-primary">Save and Next</button>
</div>
}
export default Display;