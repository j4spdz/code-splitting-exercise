import React, { useState } from 'react';
import './App.css';
import loadable from '@loadable/component'

const App = () => {
  const [ route, setRoute ] = useState('page1');

  const onRouteChange = (route) => setRoute(route);
  const AsyncPage = loadable(props => import(`./Components/${props.page}`));

  if (route === 'page1') {
    return <AsyncPage page="Page1" onRouteChange={onRouteChange}/>
  } else if (route === 'page2') {
    return <AsyncPage page="Page2" onRouteChange={onRouteChange}/>
  } else {
    return <AsyncPage page="Page3" onRouteChange={onRouteChange}/>
  }
}

export default App;
