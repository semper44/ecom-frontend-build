import React, { useEffect, useState } from 'react'
import { adminOverview } from './CartContxt'

function AdminOverviewFetch(props) {

    // const[MonthlyOrders, SetMonthlyOrders]= useState()
    const[MonthlyUsers, SetMonthlyUsers]= useState()
    const[MostBoughtCategory, SetMostBoughtCategory]= useState()
    const[TotalUsers, SetTotalUsers]= useState()
    const[Orders, SetOrders]= useState()

    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

    // http://127.0.0.1:8000/
    useEffect(()=>{
      let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ token?.access
          }
      };
      Promise.all([
        fetch(" https://cras.serveo.net/product/mostboughtcategory/", requestOptions),
        fetch(" https://cras.serveo.net/product/monthlyorders/", requestOptions),
        fetch(" https://cras.serveo.net/profile/monthlyusers/", requestOptions),
        fetch(" https://cras.serveo.net/profile/totalusers/", requestOptions),
      ])
      .then(([resMostBoughtCategory, resMonthlyOrders, resMonthlyUsers, resTotalUsers])=>
        Promise.all([resMostBoughtCategory.json(), resMonthlyOrders.json(), resMonthlyUsers.json(), resTotalUsers.json()]))
      .then(([dataCategory, dataOrders, dataMonthlyUsers, dataTotalUsers])=>{
        SetMonthlyUsers(dataMonthlyUsers)
        SetOrders(dataOrders)
        SetTotalUsers(dataTotalUsers)
        SetMostBoughtCategory(dataCategory)
      })}, [token?.access])

  return (
    <adminOverview.Provider 
    value={{MostBoughtCategory:MostBoughtCategory, TotalUsers:TotalUsers, MonthlyUsers:MonthlyUsers, Orders:Orders}}>
    {props.children}
    </adminOverview.Provider>
  )
    
}

export default AdminOverviewFetch