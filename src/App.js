import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Routes';

function App({children}) {
  return (
    <div className='pr-20 pl-20 pt-8' data-theme="cupcake">
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;
