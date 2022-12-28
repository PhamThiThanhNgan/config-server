import { useState,useEffect } from 'react'
import { callApiFromId } from "components/callApiFromId";
export default function Product() {
  const [params,setSearchParams] = useState('');
  const [product,setProduct]=useState([]);
  const [pageSize,setPageSize] = useState(5);

  useEffect(() => {
    getProduct();
  },[params])

  const getProduct = () => {
    const paramsSearch : {} = {
      search_key: params,
      page_size: pageSize
    };
    var urlSearchParams = new URLSearchParams(paramsSearch);
    const response = callApiFromId('https://dev-api.digiex.asia/calobye-be-dev/api/product?' + urlSearchParams);
      response?.then((response)=>{
          console.log(response.data);
          setProduct(response.data.data.content)
      })
      .catch((error)=>error);
  }
  useEffect(()=>{
    getProduct()
  },[])

 const handleDelete =(index:number)=>{
    product.splice(index,1);
    setProduct([...product]);
    console.log(index)
 }
  return (
    <div className='w-full h-full bg-white'>
      <p className='p-14 m-4 text-xl font-semibold'>Product management</p>
      <div className='px-14 mx-4 flex justify-between items-center '>
        <div className='flex  px-1 '>
        <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="productName" name='productName' onChange={(evt) => setSearchParams(evt.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product" required/>
    </div>
        </div>
        <button className='border py-2.5 px-4 rounded-lg bg-purple-600 text-white' >+ Add product</button>
      </div>
      <div className='px-10 mx-4 mt-5 border-spacing-y-5'>
       <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
       <thead className='text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope="col" className='py-3 px-6'>Image</th>
            <th scope="col" className='py-3 px-6'>Product name</th>
            <th scope="col" className='py-3 px-6'>Price</th>
            <th scope="col" className='py-3 px-6'>Created date</th>
            <th scope="col" className='py-3 px-6'>Status</th>
            <th scope="col" className='py-3 px-6'>Action</th>
          </tr>
      </thead>
        <tbody>
              {product.map((item:any,index)=>{
                 return (
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={item.id}>
                
                  <td className='py-4 px-6 max-w-xl'>
                    <img  src={item.thumbnail} alt={item.product_name} />
                  </td>
                  <td className='py-4 px-6'>{item.product_name}</td>
                  <td className='py-4 px-6'>{item.price}</td>
                  <td className='py-4 px-6'>{item.product_name}</td>
                  <td className='py-4 px-6'> {item.status} </td>
                  <td className='py-4 px-6'> 
                    <button type='button' className='border px-6 py-2 rounded-lg my-1' >Edit </button> 
                    <br />
                    <button type='button' onClick={()=>handleDelete(index)} className='border px-4 py-2 rounded-lg mb-1'>Delete</button>
                    
                  </td>
                </tr>
                 )
              })}
        </tbody>
       </table>
      </div>
      <div className='px-14 mx-4 mt-5 text-center'>
                <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
              </li>
              <li>
                <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
            </ul>
          </nav>

      </div>
    </div>
  )
}
