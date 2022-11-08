import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Routes';

function App({children}) {
  return (
    <div className='lg:pr-20 lg:pl-20 md:pr-10 md:pl-10 pr-8 pl-8 pt-8' data-theme="cupcake">
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </div>
  );
}

export default App;
