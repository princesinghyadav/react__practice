import axios from 'axios'



export default function Crud(){
    let real=`https://jsonplaceholder.typicode.com/posts`
let page="https://jsonplaceholder.typicode.com/posts?_page=3";
let filter='https://jsonplaceholder.typicode.com/posts?userId=2'
    async function getrequest(){
   try {
    
    //  let res= await axios({
    //         method:'get',
    //         url: 'https://jsonplaceholder.typicode.com/posts', {
    //         params:{
    //         page:3
    //         }
    //         }
           
            
    //     })
   let res= await  axios.get('https://jsonplaceholder.typicode.com/posts', {
  params: {
    page: 1
  }
})
        console.log(res.data)// use res.data because it gives two or more extra data comare to fetch.
   } catch (error) {
    console.log('error',error)
   }
       
    }

    

     async function postrequest(){
   try {
    
     let res= await axios({
            method:'post',
            url:'https://jsonplaceholder.typicode.com/posts',
            data:{
                body:'this a post bopdy',
                title:'this is a title',
                id:1 
            }
        })
        console.log(res.data)// use res.data because it gives two or more extra data comare to fetch.
   } catch (error) {
    console.log('error',error)
   }
       
    }


     async function putrequest(){
   try {
    
     let res= await axios({
            method:'put',
            url:'https://jsonplaceholder.typicode.com/posts/2',
            data:{
                body:'this a post bopdy',
                title:'this is a title',
                id:1 
            }
        })
        console.log(res.data)// use res.data because it gives two or more extra data comare to fetch.
   } catch (error) {
    console.log('error',error)
   }
       
    }


     async function patchrequest(){
   try {
    
     let res= await axios({
            method:'patch',
            url:'https://jsonplaceholder.typicode.com/posts/2',
            data:{
                body:'this a post bopdy',
                title:'this is a title',
                id:1 
            }
        })
        console.log(res.data)// use res.data because it gives two or more extra data comare to fetch.
   } catch (error) {
    console.log('error',error)
   }
       
    }


     async function deleterequest(){
   try {
    
     let res= await axios({
            method:'delete',
            url:'https://jsonplaceholder.typicode.com/posts/2',
            data:{
                body:'this a post bopdy',
                title:'this is a title',
                id:1 
            }
        })
        console.log(res.data)// use res.data because it gives two or more extra data comare to fetch.
   } catch (error) {
    console.log('error',error)
   }
       
    }
    return (
        <>
        <h2>this is the page dedicated to axios learning. </h2>
        
        <button onClick={getrequest}>Get request .. </button>
        <button onClick={postrequest}>post request .. </button>
        <button onClick={putrequest}>Put  request .. </button>
 
        <button onClick={patchrequest}>patch request .. </button>
       <button onClick={deleterequest}>Delete Request  </button>
        
        
        </>

    )
}


 