import React, { useState } from 'react'; 
import {styles} from './style'; // sharing styles across components
import image from './image/black.jpeg'; 

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    
  };
  

  return (
    <form style={styles.form} onSubmit={handleSubmit}> 
      <h1    // inline styling
        style={{color: 'gold', fontSize: '50px', marginBottom: '30px', textAlign: 'center',}}>Login</h1> 
      <input
        type="text"
        placeholder="Mobile number or Email"
        style={styles.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button  
        style={{ backgroundColor: 'black', color: 'gold', padding: '12px', fontSize: '20px', cursor: 'pointer', borderRadius: '30px', border: 'none', marginTop: '3px'}}>
        Login
      </button>
      <a href='' style={{fontSize: '20px', color: 'white', textAlign: 'center', paddingBottom: '15px', marginTop: '20px'}}>Forgot Password?</a>
     
      <button 
        style={{fontSize: '20px', backgroundColor: 'black', padding: '12px', borderRadius: '30px', cursor: 'pointer', textAlign: 'center', marginTop: '70px', color: 'gold', border: 'none'}}>Create account</button>
    </form>
  );
};

const Body = () => {

  return (
    <div style={background}>
      <LoginForm />
    </div>
  );
};


const background = {  backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }; // style object variable

const App = () => {
  return (
    <div>
      <Body />
    </div>
  );
};

export default App;
