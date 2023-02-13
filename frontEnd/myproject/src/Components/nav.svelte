
<script>
    
    import Table from "./Table.svelte";
    import Form from './Form.svelte';


    let displayStatus="default"
    const registerUser=() => {
     displayStatus="openForm"
    }

    let userData=[];
     //Getting the data


    
const getData = async () => {
try {
  const url = "http://localhost:3000/";
  const res = await fetch(url, {
    method: "GET",
  });
  userData = await res.json();
} catch (error) {
  console.log(error);
}
};

//post Data

const doPost= async (e)=> {

let userDetailObj = e.detail;
try {
const res = await fetch('http://localhost:3000/',{
  method:  'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
  Fname:userDetailObj.Fname,
  Mname:userDetailObj.Mname,
  Lname: userDetailObj.Lname,
  Gender: userDetailObj.Gender,
  Address: userDetailObj.Address,
  DOB:userDetailObj.DOB,
  Email:userDetailObj. Email,
  Password: userDetailObj.Password,
  })
})  
displayStatus="addClicked"
} catch (error) {
  console.log(error)
}
}
const handleUserDelete = (e)=>{
var tempId="";
console.log(e.detail);

fetch(`http://localhost:3000/`+e.detail,{
  method:  'DELETE'
})
  .then(response => response.text())
  .then(result => console.log(result))
  for (let index = 0; index < userData.length; index++) {
    if(e.detail===userData[index].id){
      tempId=index;
    }
    
  }
  userData.splice(tempId,1)
  userData=userData;
displayStatus="default"
}

</script>

<div class="topnav">

<a class="active" href="#home">👤User Management System</a>
<button class="click" on:click={registerUser}>Add User</button>
</div>

{#if displayStatus==='default'||displayStatus==='addClicked'}
<Table {userData} {getData} on:userDelete={handleUserDelete}/>
{:else if displayStatus==='openForm'}
<Form on:userObject={doPost} />
{/if}


<style>
.topnav {
overflow: hidden;
background-color:#95d0f5;
width:100%;
/* padding-top: none; */
margin-top:-20px;
margin-left: -8px;
margin-right: -10px;
}
.topnav a{
  font-size: 30px;

}
.topnav a ,.click{
float: left;
color: #1b0f0f;
text-align: center;
text-decoration: none;
/* font-size: 25px; */
margin-top: 30px;
padding: 10px 20px 20px 20px;

}
.topnav .click {
   margin-left: 55%;
  cursor: pointer;
  font-size: large;
  border-radius: 8px;
  height: 50px;
}
.click:hover{
  background-color: rgb(230, 223, 223);
}
</style>  
<!-- 
  <script>
   // import { onMount } from "svelte/types/runtime/internal/lifecycle";

    import {createEventDispatcher, onMount} from'svelte';

    const dispatch = createEventDispatcher();


export let userData;
export let getData;

onMount(()=>{
  getData();
})

const handleDeleteEvent = (data)=>{
    dispatch('userDelete', data.id);
  }
</script>

<table>
 <thead>
    <tr>
        <th>Full Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Address</th>
        <th>DOB</th>
        
        <th>Operations</th>
    </tr>
</thead>
<tbody>
    {#each userData as user}

    <tr>
        <td>{user.Name}</td>
        <td>{user.Email}</td>
        <td>{user.Gender}</td>
        <td>{user.Address}</td>
        <td>{user.DOB}</td>
        <td><button class="edit">&#8593;</button><button class="delete" on:click={handleDeleteEvent(user)}> &#10006</button></td>
    </tr>
   {/each} 
</tbody>
</table>
 -->