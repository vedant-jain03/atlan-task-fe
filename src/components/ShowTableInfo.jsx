import React, { useEffect, useState } from 'react'
import TableChartIcon from '@mui/icons-material/TableChart';
import customerData from '../assets/data/customer.json'
import productData from '../assets/data/product.json'
import supplierData from '../assets/data/supplier.json'

function ShowTableInfo({ setQuery, fullScreen }) {
  const [hideBar, setHideBar] = useState(false);

  // hard coded
  const tableMeta = [
    {
      name: "Customer",
      fields: Object.keys(customerData[0])
    },
    {
      name: "Product",
      fields: Object.keys(productData[0])
    },
    {
      name: "Supplier",
      fields: Object.keys(supplierData[0])
    }
  ]
  const toggleBar = () => {
    setHideBar(!hideBar)
  }
  useEffect(() => {
    setHideBar(fullScreen);
  }, [fullScreen])
  return (
    <div className={`pb-4 relative ${hideBar ? 'w-[10px] p-4' : 'w-[350px]'}`}>
      <button className={`absolute p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-[5px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[25px] h-[25px] flex justify-center items-center left-[-12px] top-[12px] outline-none`}
        onClick={() => toggleBar()}
      >{hideBar ? '<' : '>'}</button>
      <div className={`${hideBar ? 'hidden' : 'block'}`}>
        <div className='pl-5 border-b-[1px] border-[#ffffff33] h-[50px] flex items-center justify-between'><span className=''>Available Tables</span></div>
        <div className='p-4'>
          {
            tableMeta.map((item) => {
              return (
                <div className='mb-4'>
                  <span className='flex items-center cursor-pointer' onClick={()=>setQuery(`SELECT * FROM ${item.name};`)}><TableChartIcon className='pr-1' /> {item.name} [-]</span>
                  <ul>
                    {
                      item.fields?.map((fieldItem) => (<li className='text-sm cursor-pointer'> <span className=' border-[#ffffff9c] border-b border-l h-4 w-2 inline-block ml-4 relative top-[-3px]'></span> <span onClick={() => setQuery(`SELECT ${fieldItem} FROM ${item.name};`)}>{fieldItem}</span> <span className='text-[#2463eb]'>[{typeof(fieldItem)}]</span></li>))
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ShowTableInfo