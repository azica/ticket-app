import React from 'react';
import { BrowserRouter} from "react-router-dom";
import { useRoutes } from './routes';
import { GlobalStyle } from './globalStyles';
import {Header} from './components/Header';


const App:React.FC =()=> {
  const isAuth= true

  const routes = useRoutes(isAuth)
    return (
      <BrowserRouter>
	  	<GlobalStyle/>
        <Header/>
			{routes}
      </BrowserRouter>

    );
}

export default App;
