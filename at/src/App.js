import './App.css';
import React from 'react';

class ShoppingCart extends React.Component{
  constructor(){ super(); this.items = [];}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Grocery Shopping App
        <ul>
          <li>Bananas</li>
          <li>Eggs</li>
          <li>Kiwi</li>          
        </ul>
    <div class="groceryform">
      <form>
      <fieldset>
        <legend>Grocery List</legend>
        
          <div >
            <input type='radio' id='eggs' name='Eggs' value="addEggs"></input>
            <label for="eggs">Add Eggs</label>
          </div>
          <div >
            <input type='radio' name='Eggs' value="removeEggs"></input>
            <label for="eggs">Remove Eggs</label>
          </div>
        {/* <hr />
        <input type='radio' id='bananas' name='bananas' value="addBananas"></input>
        <label for="eggs">Add Bananas</label>
        <br />
        <input type='radio' id='bananas' name='bananas' value="removeBananas"></input>
        <label for="eggs">Remove Bananas</label>
        <hr />
        <input type='radio' id='plantains' name='Plantains' value="addPlantains"></input>
        <label for="eggs">Add Plantains</label>
        <br />
        <input type='radio' name='Plantains' value="removePlantains"></input>
        <label for="eggs">Remove Plantains</label>
        <hr />
        <input type='radio' id='toiletPaper' name='toiletPaper' value="toiletPaper"></input>
        <label for="eggs">Add Toilet Paper</label>
        <br />
        <input type='radio' id='toiletPaper' name='toiletPaper' value="removetoiletPaper"></input>
        <label for="eggs">Remove Toilet Paper</label> */}

      </fieldset>
      </form> 
      </div>
      <br/>
      <input type='submit' value='Submit'></input>

      </header>

    </div>
  );
}


export default App;
