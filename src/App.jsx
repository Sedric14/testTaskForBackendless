import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const App = ({routes = []}) => {
  const content =  routes.map((item) => {
    const Component = React.lazy(() => import(`./${item.path}`));
      console.log(Component);
      return (<Route key={`/${item.id}`} path={item.id} element={<Suspense><Component /></Suspense>} />) 
  });

  const tabs = routes.map((item) => (
    <li key={item.order}>
      <Link to={item.id} className="link">
        {item.title}
      </Link>
    </li>
  ));
  
  return (
  <main>
    <ul>
      {tabs}
    </ul>
    <Routes>
      {<Route path='/' element={<Navigate to={routes[0].id} />}/>}
      {content}
    </Routes>
  </main>
  )
}


export default App;
