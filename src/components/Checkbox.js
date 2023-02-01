import React from 'react'

const Checkbox = ({data}) => {

  return (
    <div>
      <select className=' outline-none w-[100%] p-[.5rem] bg-gray-200 border border-gray-400 text-gray-600 mb-[.5rem]'>
        {
            data&&  data.map((item, i) => {
                return <option>
                    {item}
                </option>
            })
        }
      </select>
    </div>
  )
}

export default Checkbox
