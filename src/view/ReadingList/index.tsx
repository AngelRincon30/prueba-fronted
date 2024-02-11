import { HeaderComponent } from "../../common/Header";
import { SelectComponent } from "../../common/Select";
import { useHandlersList } from "../LibraryBook/hook/useHandlersList";

export const ReadingListView = () => {
  const {
    gender,
    listBook,
    myPersonLibraryBook,
    valueGender,
    handleChange,
    handleBooks,
    handleDelete,
  } = useHandlersList();
  console.log(myPersonLibraryBook);
  return (
    <div>
      <HeaderComponent />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
          <div className=" flex space-x-2 text-base space-x-56 min-w-full mx-auto ">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Listado del paginado de la libreria
            </h2>
            <SelectComponent
              value={gender?.find((x) => x?.value === valueGender)}
              options={gender}
              onChange={(e) => handleChange(e.value)}
            />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {myPersonLibraryBook?.map((listBooks: any, i: number) => {
              const isExist = listBook?.find(
                (x: any) => listBooks?.book?.ISBN === x?.ISBN,
              );
              return (
                <div key={`library-books${i}`} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={listBooks?.cover}
                      alt={listBooks?.cover}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" />
                        {listBooks?.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {listBooks?.genre}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">{`Paginas : ${listBooks?.pages}`}</p>
                      <p className="mt-1 text-sm text-gray-500">{`Año : ${listBooks?.year}`}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {listBooks?.price}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() =>
                        !isExist
                          ? handleBooks(listBooks?.book)
                          : handleDelete(listBooks?.ISBN)
                      }
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {!isExist
                        ? "Añadir a mi lista de lectura"
                        : "Eliminar de la lista"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
