
import AllRoutes from './AllRoutes/allRoutes';
import './App.css';
import AuthProvider from './Authcontext/appcontext';
import FooterP from './component/fotter';
import Navbar from "./paages/navbar";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
      <FooterP></FooterP>
      </AuthProvider>
    </div>
  );
}

export default App;
