import { FC } from "react";
import { HeaderComponent } from "../../common/Header";

export const AuthViewView: FC = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="md:flex items-center">
        <div className="mt-4 md:mt-0 md:ml-6 p-8">
          <h1 className="uppercase tracking-wide text-2xl text-indigo-600 font-bold text-center">
            Biblioteca entre Páginas
          </h1>
          <div className="mt-4 flex items-center justify-center">
            <p className="mt-3 text-gray-600 ">
              Explora, Imagina y Descubre el Universo de la Literatura: Donde
              Cada Libro es una Puerta hacia Nuevos Mundos y Emociones
              Inolvidables
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <a href="/library-book" className="text-white">
                Ingresar a la Biblioteca
              </a>
            </button>
          </div>
        </div>
        <div className="md:flex-shrink-8 p-7">
          <img className="rounded-lg md:w-90" src="/port.png" alt="" />
        </div>
      </div>
    </div>
  );
};
