import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function ListSong() {
    const {Data} = useContext(Songs)
    return (
    <div className='col-span-2 overflow-y-scroll'>
        <table className='table-auto w-full'>
            <thead className="text-white h-12">
                <th className="w-[10%]">No.</th>
                <th className='text-left'>Title</th>
                <th className='w-[10%]'>Author</th>
                <th className='w-[10%]'>
                    <i class="fa fa-download"></i>
                </th>
            </thead>
            <tbody>
                {
                    Data.map((song,index)=>(
                    <tr key={index} className='bg-slate-800 hover:bg-slate-200 hover:text-teal-300'>
                        <td className="text-center">{index + 1}</td>
                        <td>{song.name}</td>
                        <td className="text-center">{song.author}</td>
                        <td className="text-center">
                            <a href={song.url}>
                                <i className="fa fa-download"></i>
                                </a>
              </td>
            </tr>
                    )
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
