<script>
  import {createEventDispatcher} from'svelte';
  export let editUserData;
  export let displayStatus;
  const dispatch = createEventDispatcher();
let userDetailObj = {
  Name:'',
  mName:'',
  lName:'',
  Email:'',
  Gender:'',
  Address:'',
  State:'',
  pincode:'',
  DOB:'',
  // Ph_NO:'',
  Password:''
}
if (displayStatus==="updateDataForm") {
  userDetailObj=editUserData
 } else {
  userDetailObj;
 }
const submitButton = ()=>{
  if (displayStatus==="updateDataForm") {
    dispatch('onUpdate', userDetailObj);
 } else {
    dispatch('userObject', userDetailObj);
  }
}
 

</script>


<div class="container" > 
<h2>Registration Form</h2>


<div class="form">
<div class="row">
  <div class="col">
    <label for="fname">First Name<span class="req">*</span></label>

    <input type="text" class="form-control" placeholder="First name"  bind:value={userDetailObj.Name}>
  </div>
  <div class="col">
    <label for="mname">Middle Name</label>

    <input type="text" class="form-control" placeholder="Middle name"  bind:value={userDetailObj.mName}>
  </div>
  <div class="col">
    <label for="mname">Last Name<span class="req">*</span></label>

    <input type="text" class="form-control" placeholder="Last name"  bind:value={userDetailObj.lName}>
  </div>
</div>
<div class="row">
  <div class="col">
    <label for="email">Email<span class="req">*</span></label>

    <input type="email" class="form-control" placeholder="Email"  bind:value={userDetailObj.Email}>
  </div>
  <div class="col">
    <label for="ph_no">Contact<span class="req">*</span></label>

    <input type="text" class="form-control" placeholder="Contact Number"  bind:value={userDetailObj.Ph_No}>
  </div>
  </div>

<div class="row">
  <div class="col">
    <label for="pass">Password<span class="req">*</span></label>

    <input type="text" class="form-control" placeholder="Password"  bind:value={userDetailObj.Password}>
  </div>
  <div class="col">
    <label for="cpass">Confirm Password<span class="req">*</span></label>

    <input type="text" class="form-control" placeholder=" Confirm password">
  </div>
  </div>
  <div class="row">
    <div class="col">
      <label for="dob">Birthday<span class="req">*</span></label>
  
      <input type="date" class="form-control" placeholder="date of birthday"  bind:value={userDetailObj.DOB}>
    </div>
    <div class="col">
      <label for="gender">Gender<span class="req">*</span></label>
  
      <input type="radio" value="Male" name="gender" bind:group={userDetailObj.Gender} id="check"/> Male 
      <input type="radio" value="Female" name="gender" bind:group={userDetailObj.Gender} id="check1"/> Female  
      <input type="radio" value="Other"name="gender" bind:group={userDetailObj.Gender} id="check3"/> Other      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="addr">Address<span class="req">*</span></label>
    
        <input type="text" class="form-control" placeholder="Address"  bind:value={userDetailObj.Address}>
      </div>
      <div class="col">
        <label for="state">State<span class="req">*</span></label>
        <select
        title="Select State"
          name="state"
          id="state" bind:value={userDetailObj.State} >
          <option value="Select State" >Select State{userDetailObj.State}</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
        </select>
      </div>
      <div class="col">
        <label for="pincode">Pincode<span class="req">*</span></label>
    
        <input type="text" class="form-control" placeholder="Pincode"  bind:value={userDetailObj.pincode}>
      </div>
    </div>
  </div>







<!-- <button type="submit" class="click" on:click={submitButton}>Submit</button> -->
<div class="button">
<input class="btn btn-primary btn-size" type="submit" value="Submit"  on:click={submitButton}>
</div>
</div>  

<style>
label{
  font-weight: bolder;
}
.form {
  margin-left: 15%;
  width: 70%;
}
h2 {
  text-align: center;
}
 .button  {
  margin-left: 44%;
  
  font-size:larger;
}
.btn-size {
  margin-top: 3px;
  
  padding-left: 10px;
  padding-right: 10px;
  font-size: large;
}
.req{
  color:rgb(208, 29, 29);
  font-size: large;
 } 
 input[type=radio]{
  margin-left: 35px;
 }

 
</style>