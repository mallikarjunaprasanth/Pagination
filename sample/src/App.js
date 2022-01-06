import React ,{useState,useEffect} from 'react';
function App() {

  const [users,setUsers]=useState();
  const [count,setCount]=useState(0);


  const getDataFetch = async ()=>{
    const response =await fetch (`https://dummyapi.io/data/v1/user?page=${count}&limit=10`,{
      method:'GET',
      headers:{
        'app-id':'61c74eb3ac0adb6c33073ae0',
      }
    })
    const {data} = await response.json() ;
    setUsers(data);
    console.log(data)
  }
  useEffect(()=>{
getDataFetch();
   return ()=>{
    setUsers([]);
   }

  },[count])
 





  return (
    <div>
      {users && users.length>0 ?(
       <div className="container">
         <div className='text-center mt-5'><h1>Dummy Details</h1></div>
          <div className='mt-5 text-end'>
               
      <button disabled={count===0} onClick={()=>setCount(count-1)} className='btn btn-outline-danger me-3'><i class="fas fa-chevron-left"></i></button>
      <button disabled={count===9} onClick={()=>setCount(count+1)} className='btn btn-outline-success '><i class="fas fa-chevron-right"></i></button>
     
                </div>
                <div className="row ">
                    {
                       users && users.map((user)=>(

                            <div className=" col-md-6 mt-5" key={user.id}>
                                <div className="card">
                                <div className="row ">
                                    <div className="col-4 p-4">
                                    <img src={user.picture} alt={user.firstName} />

                                    </div>
                                    <div className="col-8 p-3">
                                        
                                        <p>{user.id}</p>
                                         <p>Name : {user.title} {user.firstName}</p>
                                    </div>

                                </div>
                                </div>
                            </div>

                        )) 
                    }

                </div>
               

            </div>





      
):(
  <div className='text-center '>
  <section>
    <img src='https://www.jain.software/careers/images/loader.gif' className='w-25' alt='loader'/>
  </section>
  </div>
)}
    
    
    </div>
  );
}

export default App;
