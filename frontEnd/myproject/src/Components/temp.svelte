<script>
  import {createEventDispatcher} from'svelte';
const dispatch = createEventDispatcher();
let userDetailObj = {
  Fname:'',
  Mname:'',
  Lname:'',
  Email:'',
  Gender:'',
  Address:'',
  DOB:'',
  // Ph_NO:'',
  Password:''
}
const submitButton = ()=>{
  console.log(userDetailObj)
 dispatch('userObject',userDetailObj);
}
</script>


<div class="container" > 
<h2>Registration Form</h2>

<div class="name">
  <div>
  <label for ="fname"> Firstname<span class="req">*</span></label>        
  <input type="text" name="firstname"  id="Fname" placeholder="First name" bind:value={userDetailObj.Fname}/> 
</div>
<div>
  <label for="mname"> Middlename</label>    
  <input type="text" name="middlename" placeholder="Middle name" bind:value={userDetailObj.Mname} id="Mname"/>
</div>
<div>
  <label for="lname"> Lastname<span class="req">*</span></label>          
  <input type="text" name="lastname" size="15" placeholder="Lastname" bind:value={userDetailObj.Lname} id="Lname"/>   
</div>
</div>
<div class="add1">
<div>
<label for="email">Email<span class="req">*</span>  
</label>
<input type="email" id="Email" name="email" placeholder="Email id" bind:value={userDetailObj.Email}/> 
</div> 
<div> 
<label for="pass">Password<span class="req">*</span></label>
 <input type="password" id="Password"  placeholder="Password"name="pass" bind:value={userDetailObj.Password}>
</div> 
</div>

<div class="add2">
<div>
<!-- <label for="Num">Contact<span class="req">*</span></label>  
<input type="text" name="phone" size="10" id="phone" bind:value={userDetailObj.Ph_NO} /> -->
<label for="dob">Birthday</label><span class="req">*</span>
<input type="date"  name="dob" bind:value={userDetailObj.DOB}/> 
</div>
</div> 


<div class="add3">
<div>
<label for="address">Address <span class="req">*</span></label>
<input type="text" name="address" placeholder="Address" bind:value={userDetailObj.Address} >
</div>
</div>
<div class="add4">
 
<label for="gender">   
  Gender <span class="req">*</span>  
  </label> 
  <input type="radio" value="male" name="gender" bind:group={userDetailObj.Gender} id="check"/> Male 
  <input type="radio" value="female" name="gender" bind:group={userDetailObj.Gender} id="check1"/> Female  
  <input type="radio" value="other"name="gender" bind:group={userDetailObj.Gender} id="check3"/> Other  
</div>

<button type="submit" class="click" on:click={submitButton}>Submit</button>
</div>  

<style>
  
.container {  
    border-radius: 5px;
    padding: 10px  20px ;  
    background-color:#95d0f5;
  width: 65%;
  height: auto;
  margin-left: 15%;
  /* margin-right: 100%; */
  margin-top: 1%;
}  
label {
    margin-left: 15px;
    font-size:large;
}
input[type=radio]{
    border: 1px ;
    margin-left: 50px;
    justify-content: space-evenly;
}
input[type=text] ,input[type=date],input[type=email],input[type=password]{  
  width: 80%;  
  height: 30px;
  padding: 8px;    
  display: inline-block;  
  border: none;  
  background: white;
/* background: #f1f1f1;   */
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 3px;
  margin-left: 10px;
}

input[type=text]:focus, input[type=password]:focus {  
  background-color: none;  
  outline: none;  
}  
 .req{
  color:rgb(208, 29, 29);
  font-size: large;
 }

.click {  
  background-color: #4CAF50;  
  color: white;  
  padding: 10px 2px;  
  margin: 8px 0;  
  border: none;  
  cursor: pointer;  
  width: 30%;  
  opacity: 0.9;
  border-radius: 8px; 
  margin-left: 30%; 
}  
.button:hover {  
  opacity: 1;  
}  
h2 {
    text-align:center;
}
.name{
        margin-top: 25px;
        display: flex;
        height: 35px;
        /* border: 1px solid black; */
        padding-left:0;
        margin-bottom: auto;
    }

    .add1,.add2,.add3,.add4{
        margin-top: 25px;
        display: flex;
        height: 35px;
        /* border: 1px solid black; */
        padding-left:0;
        margin-bottom: auto;

    }
 .add3{
   width: 910px;
 }
</style>