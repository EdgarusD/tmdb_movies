import React from 'react'
import * as M from "@mantine/core"
import DisplayDataMovie from './DisplayDataMovie'
import { FaRegTimesCircle } from "react-icons/fa";
import { manageSearchStateAtom } from './state-global/UserAtom';
import { useAtom } from 'jotai';
import "../styles/search.css"

export default function Search({data}:any) {
  const [, setStateSearch] = useAtom(manageSearchStateAtom);
  return (
    <M.Box sx={{width:"70%", marginTop:"45px", position:"relative"}} >
      <M.Box className='close-search'><FaRegTimesCircle className='item-close-search' onClick={()=>setStateSearch(false)}/></M.Box>
      <DisplayDataMovie data={data} src={'movie'} searchBool={true}/>
    </M.Box>
  )
}
