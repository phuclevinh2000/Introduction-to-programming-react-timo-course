import { useTable } from 'react-table'
import React, { useMemo } from 'react'
import birdData from "./bird.json"
import './App.css';

 function Bird() {
    //  console.log(birdData)
   const data = useMemo(
     () => birdData,
     []
   )

   const columns = useMemo(
     () => [
       {
         Header: 'Finnish',
         accessor: 'finnish', // accessor is the "key" in the data
       },
       {
         Header: 'English',
         accessor: 'english',
       },
       {
        Header: 'Swedish',
        accessor: 'swedish',
      },
      {
        Header: 'Short',
        accessor: 'short',
      },
      {
        Header: 'Latin',
        accessor: 'latin',
      },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   
   return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                //    borderBottom: 'solid 3px red',
                   background: 'lightgrey',
                   color: 'black',
                   fontWeight: 'bold',
                   textAlign:"left",
                //    fontWeight: 'bolder'
                 }}
                 className="topName"
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '5px',
                       borderBottom: 'solid 1px lightgray',
                       textAlign:"left",
                       width: '200px'
                    //    background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }
 export default Bird