import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SkillContext from '../../Context/SkillContext';

export const ProductIndex = () => {
  const { products, getProducts, deleteProduct, getProductCart } = useContext(SkillContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mt-12">
      <div className="flex justify-end m-2 p-2">
        <Link to="/product/create" className="px-4 py-2 bg-teal-500 hover:bg-teal-700 text-white rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </Link>
      </div>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
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
                          Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                          
                      </th>
                      <th scope="col" className="px-6 py-3">
                          
                      </th>
                  </tr>
              </thead>
              <tbody>
              {products.map((product)=> {
                    return (
                      <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4">
                            {product.product}
                        </td>
                        <td className="px-6 py-4">
                            {product.description}
                        </td>
                        <td className="px-6 py-4">
                            {product.category}
                        </td>
                        <td className="px-6 py-4">
                            $ {product.price}
                        </td>
                        <td className="px-6 py-4 flex space-x-4">
                          <Link to={`/product/${product.id}/edit`} className="px-4 py-2 bg-lime-500 hover:bg-lime-700 text-white rounded-md">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                              </svg>
                            </Link>
                            <button onClick={() => deleteProduct(product.id)} className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                              </svg>
                            </button>
                        </td>
                        <td className="px-6 py-4">
                          <Link to={`/orderdetail/create`}>
                            <button onClick={() => getProductCart(product.id)} className="px-4 py-2 bg-amber-500 hover:bg-amber-700 text-white rounded-md">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                              </svg>
                            </button>
                          </Link>
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

