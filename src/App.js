import {useState} from 'react'
import './App.css';

function App() {


    const[name,setName] =useState ("")
    const[email,setEmail] = useState ("")
    const[password,setPassword] = useState ("")
    const[cpassword,setCpasswod] = useState ("")
    const[agree , setAgree] = useState(false)
    const[gender ,setGender] = useState('')
    const[option,setOption] = useState('')
    const[submit,setSubmit] =useState ([])
    const[error ,setError] =useState ("")


  
const object ={

  Name:name,
  Email:email,
  password:password,
  Cpassword:cpassword,
  Agree:agree,
  Gender:gender,
  States:option

}



   const submittext = ()=>{
    
    if(name===''){
       
      
      setError('nameError');
       
    }
    else if(email === ''){

      setError('emailError')

    } else if (password.length<4 || password.length >8)   {

       
 
    }
      
    

      console.log("success");
      setSubmit([...submit,object]);

      
      
     

   }
   console.log(submit);



  return (
    <div className="App">
      
      <div>
  
        <div className='form' >


         <form className="formsection">



         <div className="heading"><h1>Registration</h1></div>
         <hr />
         
         <label>
          Name:
          
          <input value={name} onChange={(e)=>setName(e.target.value)} className='inputfield' type= "text"  />
          {error==="nameError" ? <p>name required</p> : ""}
        
          </label>
         
         <hr />
         
         <label>
          Email:
          <input value={email} onChange={(e)=>setEmail(e.target.value)}  className='inputfield' type= "Email"  />
          {error==="emailError" ? <p>email required</p> : ""}

         </label>
         
         <hr />
         
         <label>
          Password:
          <input value={password}  onChange={(e)=>setPassword(e.target.value)}  className='inputfield' type= "Paswword"  />
          {error==="passwordError" ? <p>password is too short</p> : ""}
         
         </label>
         

         <hr />

         <label>
          Confirm Password:
          <input  value={cpassword} onChange={(e)=>setCpasswod(e.target.value)}  className='inputfield' type= "Paswword"  />
         </label>
   
         <hr />
         
         <label>
          Conditions Agree:
          <input  onChange={()=>setAgree(!agree)}  type= "checkbox"  />
         </label>
         

         <hr />

         
         <div>
         <label>
          States:
          <select onChange={(e)=>setOption(e.target.value)} >
          <option value="Kerala" >Kerala</option>
          <option value="Tamilnadu" >Tamilnadu</option>
          <option value="Karnataka" >Karnataka</option>
          <option value= "andhra" >Andhra</option>
          </select>
         </label>
         </div>


         <hr />

         <label>

          Gender :
          <input checked={gender==="male"} value={gender}  onChange={()=>setGender('male')}  type= "radio"  />
          Male
          <input checked={gender==="female"}  value={gender}  onChange={()=>setGender('female')} type= "radio"  />
          Female
          <input checked={gender==="other"} value={gender}  onChange={()=>setGender('other')} type= "radio"  />
          Other
          
         </label>
        
         <hr />

         <button onClick={ () => submittext() }  className='submitbtn'>SUBMIT</button>

         <div><a className="signin" href="#"><h3>signIn</h3></a></div>
            <div><p>Allready Have an Account?</p></div>
         </form>
       

         </div>


      </div>


    </div>
  );
}

export default App;
