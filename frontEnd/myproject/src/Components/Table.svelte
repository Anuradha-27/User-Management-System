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
  const handleUpdateEvent = (data) =>{
    dispatch('userUpdate',data);
  }

</script>
<table class="table table-striped table-hover">
  <thead>
      <tr>
          
          <th>Name</th>						
          <th>Email</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Birthday</th>
          <th>Operation</th>
      </tr>
  </thead>
  <tbody>
    {#each userData as user}
      <tr>
        <td>{user.Name}
            {user.mName}
            {user.lName}
        </td>
        <td>{user.Email}</td>
        <td>{user.Gender}</td>
        <td>{user.Address},
            {user.State},
            {user.pincode}
           
        </td>
        <td>{user.DOB}</td>
        <td>
              <a href="#" class="settings" title="Settings" on:click={handleUpdateEvent(user)}><i class="material-icons">&#xE8B8;</i></a>
              <a href="#" class="delete" title="Delete" on:click={handleDeleteEvent(user)}><i class="material-icons">&#xE872;</i></a>
          </td>
      </tr>
  
    {/each}  
  </tbody>
</table>
<!-- <div class="clearfix">
    <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
    <ul class="pagination">
        <li class="page-item disabled"><a href="#">Previous</a></li>
        <li class="page-item"><a href="#" class="page-link">1</a></li>
        <li class="page-item"><a href="#" class="page-link">2</a></li>
        <li class="page-item active"><a href="#" class="page-link">3</a></li>
        <li class="page-item"><a href="#" class="page-link">4</a></li>
        <li class="page-item"><a href="#" class="page-link">5</a></li>
        <li class="page-item"><a href="#" class="page-link">Next</a></li>
    </ul>
</div> -->
<style>
 .delete{
  color:red;
 }
 table.table tr th, table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}
table.table tr th:first-child {
    width: 200px;
}
table.table tr th:last-child {
    width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}	
table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}
table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
}
table.table td a:hover {
    color: #2196F3;
}
table.table td a.settings {
    color: #2196F3;
}
table.table td a.delete {
    color: #F44336;
}
table.table td i {
    font-size: 19px;
}

/* .pagination {
    float: right;
    margin: 0 0 5px;
}
.pagination li a {
    border: none;
    font-size: 13px;
    min-width: 30px;
    min-height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
    padding: 0 6px;
}
.pagination li a:hover {
    color: #666;
}	
.pagination li.active a, .pagination li.active a.page-link {
    background: #03A9F4;
}
.pagination li.active a:hover {        
    background: #0397d6;
}
.pagination li.disabled i {
    color: #ccc;
}
.pagination li i {
    font-size: 16px;
    padding-top: 6px
}
.hint-text {
    float: left;
    margin-top: 10px;
    font-size: 13px;
} */
  </style>
  