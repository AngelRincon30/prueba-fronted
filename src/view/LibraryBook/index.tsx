import { HeaderComponent } from '../../common/Header'
import { SelectComponent } from '../../common/Select'
import { useHandlersList } from './hook/useHandlersList'

export const LibraryBookView = () => {
  const { gender, listBook, myPersonLibraryBook, valueGender, handleChange, handleBooks, handleDelete } = useHandlersList()

  return (
    <div>
      <HeaderComponent />
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <div className=" flex space-x-2 text-base space-x-56 min-w-full mx-auto ">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Listado del paginado de la libreria</h2>
          <SelectComponent
            value={gender?.find((x) => x?.value === valueGender)}
            options={gender}
            onChange={(e) => handleChange(e.value)}
          />
        </div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {listBook?.map((listBooks:any, i:number) => {
          const isExist =  myPersonLibraryBook?.find((x:any)=> x?.ISBN === listBooks?.book?.ISBN)
          return(
          <div key={`library-books${i}`} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={listBooks?.book?.cover}
                alt={listBooks?.book?.cover}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="mt-1 text-sm text-gray-500">{listBooks?.book?.title}</p>
                <p className="mt-1 text-sm text-gray-500">{listBooks?.book?.genre}</p>
                <p className="mt-1 text-sm text-gray-500">{`Paginas : ${listBooks?.book?.pages}`}</p>
                <p className="mt-1 text-sm text-gray-500">{`Año : ${listBooks?.book?.year}`}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{listBooks?.book?.price}</p>
            </div>
              <div className="mt-4 flex items-center justify-center">
                <button 
                  type='button'
                  onClick={() =>  !isExist ? handleBooks(listBooks?.book) : handleDelete(listBooks?.book?.ISBN)}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {!isExist ? 'Añadir a mi lista de lectura': 'Eliminar de la lista'}
                </button>
              </div>
          </div>
        )}
        )}
      </div>
    </div>
  </div>
    </div>
  )
}
