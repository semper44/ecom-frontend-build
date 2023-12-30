import React, { useEffect, useState, useMemo, memo } from 'react'
import { adminOverview } from './CartContxt'

function AdminOverviewFetch(props) {

    // const[MonthlyOrders, SetMonthlyOrders]= useState()
    const[MonthlyUsers, SetMonthlyUsers]= useState()
    const[MostBoughtCategory, SetMostBoughtCategory]= useState()
    const[TotalUsers, SetTotalUsers]= useState()
    const[Orders, SetOrders]= useState()

    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

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
        (window.location.pathname==="/admin")&& fetch(`${process.env.REACT_APP_URLS}/product/mostboughtcategory/`, requestOptions),
        (window.location.pathname==="/admin")&& fetch(`${process.env.REACT_APP_URLS}/product/monthlyorders/`, requestOptions),
        (window.location.pathname==="/admin")&& fetch(`${process.env.REACT_APP_URLS}/profile/monthlyusers/`, requestOptions),
        (window.location.pathname==="/admin")&& fetch(`${process.env.REACT_APP_URLS}/profile/totalusers/`, requestOptions),
      ])
      .then(([resMostBoughtCategory, resMonthlyOrders, resMonthlyUsers, resTotalUsers])=>
        Promise.all([resMostBoughtCategory.json(), resMonthlyOrders.json(), resMonthlyUsers.json(), resTotalUsers.json()]))
      .then(([dataCategory, dataOrders, dataMonthlyUsers, dataTotalUsers])=>{
        SetMonthlyUsers(dataMonthlyUsers)
        SetOrders(dataOrders)
        SetTotalUsers(dataTotalUsers)
        SetMostBoughtCategory(dataCategory)
      })}, [token?.access])

      const adminData=useMemo(
        () => ({MostBoughtCategory:MostBoughtCategory, 
          TotalUsers:TotalUsers, MonthlyUsers:MonthlyUsers, Orders:Orders}))
  return (
    <adminOverview.Provider 
    value={adminData}>
    {props.children}
    </adminOverview.Provider>
  )
    
}

export default memo(AdminOverviewFetch)