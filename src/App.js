import React from "react";
import "./App.css";
import Menu from /components/Menu;

class App extends Component{

 render(){
   return (
     <div className="App">
       <header className="App-header">
         <div class="container center">
           <Menu></Menu>
         </div>
       </header>
     </div>
   );
 }
}

export default App;
