import SkillContext from '../../Context/SkillContext';
import { useContext, useEffect } from 'react';


export const OrderDetailIndex = () => {
  const { carts, getCarts } = useContext(SkillContext);

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <div className="mt-12">
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Adress
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Product
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
                  {carts.map((orderdetail)=> {
                    return (
                      <tr key={orderdetail.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">
                            {orderdetail.pelanggan}
                        </td>
                        <td className="px-6 py-4">
                            {orderdetail.alamat}
                        </td>
                        <td className="px-6 py-4">
                            {orderdetail.product}
                        </td>
                        <td className="px-6 py-4">
                            {orderdetail.amount}
                        </td>
                        <td className="px-6 py-4">
                            $ {orderdetail.price}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
          </table>
      </div>
    </div>
  )
}
