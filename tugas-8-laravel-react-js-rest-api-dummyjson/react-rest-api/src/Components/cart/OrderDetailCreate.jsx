import { useContext, useState, useEffect } from 'react';
import axios from "axios";
import SkillContext from '../../Context/SkillContext';
import { useNavigate} from 'react-router-dom';

export const OrderDetailCreate = () => {
  const { productCart, pelangganCart } = useContext(SkillContext);

  const navigate = useNavigate();

  const [ count, setCount ] = useState(0);
  const tambah = () => {
    setCount(count + 1);
  };

  const kurang = () => {
    setCount(count - 1);
    if (count <= 0) {
      window.location.reload();
    }
  };

  const checkout = () => {
    let data = {
      idpelanggan: pelangganCart.id,
      pelanggan: pelangganCart.pelanggan,
      alamat: pelangganCart.alamat,
      idproduct: productCart.id,
      product: productCart.product,
      amount: count,
      price: productCart.price
    };

    axios.post("orderdetail", data);
    navigate("/orderdetail");
    alert("Thanks For Buying !");
  };

  useEffect(() => {}, []);

  return (
    <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Pelanggan
                        </th>
                      <th scope="col" className="px-6 py-3">
                          Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price
                      </th>
                  </tr>
              </thead>
              <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">
                            {pelangganCart.pelanggan}
                        </td>
                        <td className="px-6 py-4">
                            {productCart.product}
                        </td>
                        <td className="px-6 py-4">
                            {productCart.description}
                        </td>
                        <td className="px-6 py-4">
                            {productCart.category}
                        </td>
                        <td className="px-6 py-4">
                          <button onClick={kurang} className="px-4 py-2 mx-2 bg-emerald-500 hover:bg-emerald-700 text-white rounded-md"> 
                            -
                          </button>
                            {count}
                          <button onClick={tambah} className="px-4 py-2 mx-2 bg-emerald-500 hover:bg-emerald-700 text-white rounded-md"> 
                            +
                          </button>
                        </td>
                        <td className="px-6 py-4">
                            $ {productCart.price * count}
                        </td>
                      </tr>
              </tbody>
          </table>
          <div className="m-6 flex justify-center">
            <button onClick={checkout} className="px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-white rounded-md">
              Checkout
            </button>
          </div>
      </div>
  )
}
