<script>
  import {createEventDispatcher} from'svelte';
  export let editUserData;
  export let displayStatus;
  const dispatch = createEventDispatcher();
let userDetailObj = {
  Name:'',
  Email:'',
  Gender:'',
  Address:'',
  DOB:'',
  // Ph_NO:'',
  Password:''
}
if (displayStatus==="updateDataForm") {
  userDetailObj=editUserData
 } else {
  userDetailObj;
 }
  console.log(editUserData);
const submitButton = ()=>{
  if (displayStatus==="updateDataForm") {
    dispatch('onUpdate', userDetailObj);
 } else {
    dispatch('userObject', userDetailObj);
  }
}

var validation = (field) => {
    if (field.trim() === "") {
      return false;
    } else {
      return true;
    }
  };
</script>


<div class="container" > 
<h2>Registration Form</h2>

<div class="name">
  
  <label for ="fname">F. Name<span class="req">*</span></label>        
  <input type="text" name="name"  id="Fname" placeholder="Enter your full name"  
    bind:value={userDetailObj.Name}/> 
</div>


<div class="add1">

<label for="email">Email Id<span class="req">*</span>  
</label>
<input type="email" id="Email" name="email" placeholder="Email id" bind:value={userDetailObj.Email}/> 
</div> 

<div class="add6"> 
<label for="pass">Password<span class="req">*</span></label>
 <input type="password" id="Password"  placeholder="Password"name="pass" bind:value={userDetailObj.Password}>
</div> 


<div class="add2">

<!-- <label for="Num">Contact<span class="req">*</span></label>  
<input type="text" name="phone" size="10" id="phone" bind:value={userDetailObj.Ph_NO} /> -->
<label for="dob">Birthday<span class="req">*</span></label>
<input type="date"  name="dob" bind:value={userDetailObj.DOB}/> 
</div>



<div class="add3">
<label for="address">Address <span class="req">*</span></label>
<input type="text" name="address" placeholder="Address" bind:value={userDetailObj.Address} >

</div>
<div class="add4">
 
<label for="gender">   
  Gender<span class="req">*</span>  
  </label> 
  <input type="radio" value="Male" name="gender" bind:group={userDetailObj.Gender} id="check"/> Male 
  <input type="radio" value="Female" name="gender" bind:group={userDetailObj.Gender} id="check1"/> Female  
  <input type="radio" value="Other"name="gender" bind:group={userDetailObj.Gender} id="check3"/> Other  
</div>

<button type="submit" class="click" on:click={submitButton}>Submit</button>
</div>  

<style>
  
.container {  
    border-radius: 5px;
    padding: 10px  20px ;  
    border:1px solid black;
  width: 65%;
  height: auto;
  margin-left: 17%;
  /* margin-right: 100%; */
  margin-top: 1%;
}  
label {
    margin-left: 15px;
    font-size:large;
    margin-top: 0px;
}
input[type=radio]{
    margin-top:10px;
    border:1px solid black;
    border: 1px ;
    margin-left: 40px;
    justify-content: space-evenly;
    
}
input[type=text] ,input[type=date],input[type=email],input[type=password]{  
  width: 80%;  
  height: 38px;
  padding: 8px;    
  display: inline-block;  
  border: none;  
  background: white;
/* background: #f1f1f1;   */
  border-radius: 10px;
  margin-bottom: 0px;
  /* margin-top: 3px; */
  margin-left: 30px;
  border: 1px solid black;
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
.container h2 {
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

    .add1,.add2,.add3,.add4,.add6{
        margin-top: 25px;
        display: flex;
        height: 35px;
        /* border: 1px solid black; */
        padding-left:0;
        margin-bottom: auto;

    }
 

 
</style>