import { Outlet } from '@tanstack/react-router';
import './App.css';
import { Header } from './View/Header';

export function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
