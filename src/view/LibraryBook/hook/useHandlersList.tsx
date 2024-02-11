import  { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

export const useHandlersList = () => {

  //state para almacenar los datos
  const [myPersonLibraryBook, setMyPersonLibraryBook] = useState<any[]>([])
  const [listBook, setListBook] = useState([])
  const [valueGender, setValueGender] = useState<any>(null);
  const [ gender ] = useState([
    { label: 'Fantasía', value: 'Fantasía'},
    { label: 'Terror', value: 'Terror' },
    { label: 'Ciencia ficción', value: 'Ciencia ficción' },
    { label: 'Zombies', value: 'Zombies' },
  ])

  

  //Peticion hecha mediante react query para peticionar los datos de la api
  const { data } = useQuery({
    queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://jelou-prueba-tecnica1-frontend.rsbmk.workers.dev').then((res) =>
        res.json(),
      ),
  })

 //useEffect que esta la escucha de los datos de la peticion para almacenarlos o del valor del select para filtrar 
  useEffect(() => {
    if(!data) return
    if(valueGender){
      const result = data?.default?.library.filter((x:any) => x?.book?.genre === valueGender)
      setListBook(result)
    }
    else{
      setListBook(data?.default?.library)
    }
  }, [data, valueGender])
  
  useEffect(() => {
    const data = localStorage.getItem("booksMyLibrary")
    setMyPersonLibraryBook(JSON.parse(data) || [])
  }, [])  
  


  //Handler para los cambios realizados en el select
  const handleChange = (value:string) => {
    setValueGender(value);
  };

  const handleBooks = useCallback(( book:any ) => {
    const searchId = myPersonLibraryBook?.find((x)=> x?.ISBN === book?.ISBN)
    if(!searchId){
      setMyPersonLibraryBook(prev => [...prev, book])
    }
  }, [myPersonLibraryBook]);

    useEffect(() => {
      if(!myPersonLibraryBook?.length) return  
      localStorage.setItem("booksMyLibrary",JSON.stringify(myPersonLibraryBook));

  }, [myPersonLibraryBook])
  

  const handleDelete = useCallback(( ID: string ) => {
    setMyPersonLibraryBook(prev => prev.filter((x)=> x?.ISBN !== ID))
    myPersonLibraryBook?.length === 1 && localStorage.removeItem("booksMyLibrary")
  }, [myPersonLibraryBook]);

  return { gender, myPersonLibraryBook, valueGender, handleChange, listBook, setMyPersonLibraryBook, handleBooks, handleDelete }
}
