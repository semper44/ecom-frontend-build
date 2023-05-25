import React, {useState} from 'react'
import { showsidebarcontext } from './CartContxt'

function ShowSidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const hideSidebar = () => setSidebar(false);

  return (
    <>
     <showsidebarcontext.Provider value={{sidebar:sidebar, showSidebar:showSidebar, hideSidebar:hideSidebar}}>
            {props.children}
        </showsidebarcontext.Provider>
    </>
  )
}

export default ShowSidebar