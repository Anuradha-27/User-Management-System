
<script>
    
        import Table from "./Table.svelte";
        import Form from './Form.svelte';
   
     
        let displayStatus="default"
        const home=() =>{
          displayStatus="default"         
        }
        const registerUser=() => {
         displayStatus="openForm"
        }

        let userData=[];
         //Getting the data

         let editUserData;
      const displayForm = (e)=>{
    displayStatus="updateDataForm"
    editUserData=e.detail
  }
      
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
  displayStatus="formSubmit"
    let userDetailObj = e.detail;
    try {
    const res = await fetch('http://localhost:3000/',{
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
      Name:userDetailObj.Name,
      mName:userDetailObj.mName,
      lName:userDetailObj.lName,
      Gender: userDetailObj.Gender,
      State:userDetailObj.State,
      pincode:userDetailObj.pincode,
      Address: userDetailObj.Address,
      DOB:userDetailObj.DOB,
      Email:userDetailObj. Email,
      Password: userDetailObj.Password
      })
    })
    console.log(userDetailObj)
    getData();
    
    } catch (error) {
      console.log(error)
    }

  }


  const handleUserUpdateDetail = (e) =>{
    displayStatus="updateDataShow"
    console.log(e.detail);
    let id =editUserData.id;
    console.log(id);
    let index = userData.findIndex(res => res.id === id);
    if(index>-1){
      
      fetch(`http://localhost:3000/`+ editUserData.id,{
      method:  'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      
      Name: editUserData.Name,
      mName:editUserData.mName,
      lName:editUserData.lName,
      Gender: editUserData.Gender,
      DOB:editUserData.DOB,
      Email:editUserData.Email,
      Password: editUserData.Password,
      Address: editUserData.Address,
      State:editUserData.State,
      pincode:editUserData.pincode,
      })
    })
      .then(response => response.json())
      .then(result => console.log(result)).then(getData())
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
  }

</script>
<div class="container-xl">
  <div class="table-responsive">
      <div class="table-wrapper">
          <div class="table-title">
              <div class="row">
                  <div class="col-sm-5">
                      <h2>User <b>Management</b></h2>
                  </div>
                  <div class="col-sm-7">
                      <a href="#" class="btn btn-secondary" on:click={registerUser}><i class="material-icons">&#xE147;</i> <span>Add New User</span></a>
                      <a href="#" class="btn btn-secondary" on:click={home}><i class="material-icons">home</i> <span>Home</span></a>						
                  </div>
              </div>
          </div>
          
          <!-- {#if displayStatus==='default'||displayStatus==='addClicked'||displayStatus==="updateDataShow"}
          <Table {userData} {getData} on:userDelete={handleUserDelete} on:userUpdate={displayForm} />
        {:else if displayStatus==='openForm' ||displayStatus ==="updateDataFrom"}
          <Form on:userObject={doPost}  on:userUpdate={handleUserUpdateDetail} />
        {/if} -->

      {#if displayStatus==="addClicked"||displayStatus==="updateDataForm"||displayStatus==="openForm"}
  
        <Form  on:userObject={doPost} on:onUpdate={handleUserUpdateDetail}  {editUserData}{displayStatus}{userData} />
        {:else if displayStatus==="formSubmit"|| displayStatus==="default" ||displayStatus==="updateDataShow"}
        <Table {userData}  on:userDelete={handleUserDelete} on:userUpdate={displayForm} {getData} />
        {/if}
        
      </div>
  </div>
</div>  

<style>
  .container-xl{
    margin-left: 0px;
    margin-right: 0px;
    max-width: 1294px;
    padding: 0px;
  }
 .table-responsive{
  margin-top:-10px;
 }
body {
    color: #566787;
    background: #f5f5f5;
    font-family: 'Varela Round', sans-serif;
    font-size: 13px;
}

.table-wrapper {
    width: 100%;
    background: #fff;
    padding-left: 0px;
    padding-right: 0px;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {
  padding-top: 15px;

    padding-bottom: 15px;
    background: #299be4;
    color: #fff;
    padding: 16px 30px;
    /* margin: -1px -25px 10px; */
    border-radius: 3px 3px 0 0;
}
.table-title h2 {
    margin: 5px 0 0;
    font-size: 24px;
}
.table-title .btn {
    color: #566787;
    float: right;
    font-size: 13px;
    background: #fff;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}
.table-title .btn:hover, .table-title .btn:focus {
    color: #566787;
    background: #f2f2f2;
}
.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}
.table-title .btn span {
    float: left;
    margin-top: 2px;
}
  </style>  
