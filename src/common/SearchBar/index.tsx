import { useState } from 'react'

export const SearchBar = ({ onClick }:any) => {
  const [dataForm, setDataForm] = useState<any>({})

  const handleChange = (e:any) => {
    setDataForm({
      ...dataForm,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className="w-full md:w-auto flex items-center">
      <div className="w-full md:full flex border border-blue-100 rounded">
          <input
              type="text"
              className="w-full md:full px-4 py-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Buscar..."
              name='search'
              value={dataForm?.search || ''}
              onChange={handleChange}
          />
          <button type='button' onClick={()=> onClick(dataForm?.search)} className="px-4 text-white bg-blue-600 border-l rounded ">
              Search
          </button>
      </div>
    </div>
  )
}
