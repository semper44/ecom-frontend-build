import React, {useState} from 'react'
import { showsidebarcontext } from './CartContxt'

function ShowSidebar(props) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const hideSidebar = () => setSidebar(false);
    
    const contextValue = { sidebar, showSidebar, hideSidebar };

  return (
    <>
     <showsidebarcontext.Provider value={contextValue}>
            {props.children}
        </showsidebarcontext.Provider>
    </>
  )
}

export default ShowSidebar