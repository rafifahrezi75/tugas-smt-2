import { useContext, useEffect } from 'react';
import SkillContext from '../../Context/SkillContext';
import { useParams } from 'react-router-dom';

export const PelangganEdit = () => {
  const { formValues, onChange, errors, setErrors, getPelanggan, updatePelanggan} = useContext(SkillContext);
  let { id } = useParams();

  useEffect(() => {
    getPelanggan(id);
    setErrors({});
  }, [])
  return (
    <div className="mt-12">
      <form onSubmit={updatePelanggan} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="pelanggan" className="block mb-2 text-sm font-medium">
              Pelanggan
            </label>
            <input name="pelanggan" value={formValues["pelanggan"]} onChange={onChange} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
            {errors.pelanggan && <span className="text-sm text-red-400">{errors.pelanggan[0]}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="alamat" className="block mb-2 text-sm font-medium">
              Adress
            </label>
            <input name="alamat" value={formValues["alamat"]} onChange={onChange}  className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
            {errors.alamat && <span className="text-sm text-red-400">{errors.alamat[0]}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="telp" className="block mb-2 text-sm font-medium">
              Telp Number
            </label>
            <input name="telp" value={formValues["telp"]} onChange={onChange} type="number" className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2" />
            {errors.telp && <span className="text-sm text-red-400">{errors.telp[0]}</span>}
          </div>
          <div className="my-4">
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
