import React, { useState, Suspense } from 'react';
import './App.css';
import { lazy } from '@loadable/component'

const App = () => {
  const [ route, setRoute ] = useState('page1');

  const onRouteChange = (route) => setRoute(route);
  const AsyncPage = lazy(props => import(`./Components/${props.page}`));

  const RenderPage = () => {
    if (route === 'page1') {
      return <AsyncPage page="Page1" onRouteChange={onRouteChange}/>
    } else if (route === 'page2') {
      return <AsyncPage page="Page2" onRouteChange={onRouteChange}/>
    } else {
      return <AsyncPage page="Page3" onRouteChange={onRouteChange}/>
    }   
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderPage />
    </Suspense>
  )
}

export default App;
