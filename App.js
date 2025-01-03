import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]=useState('');
  const [datetime,setDatetime]=useState('');
  const [description,setdescription]=useState('');
  function addNewTransaction(){
   const url=" ";
   fetch(url)
  }
  return (
     
     <main>
      <h1>$400<span>0.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type='text'
          value={name}
          onChange={ev => setName(ev.target.value)}
           placeholder={'+200 new samsung tv'}/>
          <input value={datetime}
          onChange={ev => setDatetime(ev.target.value)} 
          type='datetime-local'/>
        </div>
        <div className='description'>
        <input type='text' 
        value={description}
        onChange={ev => setdescription(ev.target.value)}
        placeholder={'description'}/>
        </div>
        <button type='submit'>ADD NEW TRANSACTION</button>
        <div className='transactions'>
          <div className='transaction'>
            <div className='left'>
            <div className='name'>New Samsung Tv</div>
            <div className='description'>it was time for new tv</div>
            </div>
          <div className='right'>
          <div className='price red'>-$500</div>
          <div className='datetime'>2024-12-21</div>
          </div>
          </div>
          <div className='transaction'>
            <div className='left'>
            <div className='name'>Salary</div>
            <div className='description'>it was time for new tv</div>
            </div>
          <div className='right'>
          <div className='price green'>+$900</div>
          <div className='datetime'>2024-12-21</div>
          </div>
          </div>
          <div className='transaction'>
            <div className='left'>
            <div className='name'>Iphone</div>
            <div className='description'>Bought an iphone</div>
            </div>
          <div className='right'>
          <div className='price red'>-$700</div>
          <div className='datetime'>2024-12-21</div>
          </div>
          </div>
        </div>

      </form>
     </main>
  );
}

export default App;
