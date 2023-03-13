import { Routes, Route, Link } from 'react-router-dom';
import { SkillProvider } from './Context/SkillContext';

import { Home } from './Components/Home';
import { SkillIndex } from './Components/skills/SkillIndex';
import { SkillCreate } from './Components/skills/SkillCreate';
import { SkillEdit } from './Components/skills/SkillEdit';
import { PelangganIndex } from './Components/pelanggan/PelangganIndex';
import { PelangganCreate } from './Components/pelanggan/PelangganCreate';
import { PelangganEdit } from './Components/pelanggan/PelangganEdit';
import { ProductIndex } from './Components/product/ProductIndex';
import { ProductCreate } from './Components/product/ProductCreate';
import { ProductEdit } from './Components/product/ProductEdit';
import { OrderDetailCreate } from './Components/cart/OrderDetailCreate';
import { OrderDetailIndex } from './Components/cart/OrderDetailIndex';

function App() {
  return (
    <SkillProvider>
      <div className="bg-slate-200">
      <div className='max-w-7xl mx-auto min-h-screen'>
        <nav>
          <ul className='flex'>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/">Home</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/skills">Skills</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/product">Product</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/pelanggan">Pelanggan</Link>
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to="/orderdetail">OrderDetail</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillIndex />} />
          <Route path="/skills/create" element={<SkillCreate />} />
          <Route path="/skills/:id/edit" element={<SkillEdit />} />
          <Route path="/product" element={<ProductIndex />} />
          <Route path="/product/create" element={<ProductCreate />} />
          <Route path="/product/:id/edit" element={<ProductEdit />} />
          <Route path="/pelanggan" element={<PelangganIndex />} />
          <Route path="/pelanggan/create" element={<PelangganCreate />} />
          <Route path="/pelanggan/:id/edit" element={<PelangganEdit />} />
          <Route path="/orderdetail" element={<OrderDetailIndex />} />
          <Route path="/orderdetail/create" element={<OrderDetailCreate />} />
        </Routes>
      </div>
    </div>
    </SkillProvider>
  );
}

export default App;
