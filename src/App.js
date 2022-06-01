import React from "react";
import store from "./redux/store";

import { useDispatch } from "react-redux";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 
// function App() {


//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(resp => {
//       setPizzas(resp.data.pizzas)
//     });
//   }, [])

//   console.log(pizzas);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <BrowserRouter>
//           <Route path="/" render={() => <Home items={pizzas} />} exact />
//           <Route path="/cart" render={() => <Cart />} exact />
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// }

function App(props) {

  return (
    <div>
     
      <Header />
      <div className="wrapper">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
        {/* <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart}  />
        </BrowserRouter> */}
      </div>
    </div>
    </div>
    
  )
}

export default App;

//   const mapStateToProps = (state) => {
//     return {
//       items: state.pizzas.items
//     }
//   }

//   const mapDispatchToProps = (dispatch) => {
//     return {
//       savePizzas: (items) => dispatch(setPizzasAction(items))
//     }
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
