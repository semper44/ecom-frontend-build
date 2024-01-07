import React, { useState, useMemo,useCallback } from 'react'
import { adminOverview } from './CartContxt'


function AdminOverviewFetch(props) {
  const [MonthlyUsers, SetMonthlyUsers] = useState();
  const [MostBoughtCategory, SetMostBoughtCategory] = useState();
  const [TotalUsers, SetTotalUsers] = useState();
  const [Orders, SetOrders] = useState();

  const token = JSON.parse(window.localStorage.getItem("authToken")) || null;

  const fetchdata = useCallback(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token?.access
      }
    };

    Promise.all([
      fetch(`${process.env.REACT_APP_URLS}/product/mostboughtcategory/`, requestOptions),
      fetch(`${process.env.REACT_APP_URLS}/product/monthlyorders/`, requestOptions),
      fetch(`${process.env.REACT_APP_URLS}/profile/monthlyusers/`, requestOptions),
      fetch(`${process.env.REACT_APP_URLS}/profile/totalusers/`, requestOptions),
    ])
      .then(([resMostBoughtCategory, resMonthlyOrders, resMonthlyUsers, resTotalUsers]) =>
        Promise.all([resMostBoughtCategory.json(), resMonthlyOrders.json(), resMonthlyUsers.json(), resTotalUsers.json()])
      )
      .then(([dataCategory, dataOrders, dataMonthlyUsers, dataTotalUsers]) => {
        SetMonthlyUsers(dataMonthlyUsers);
        SetOrders(dataOrders);
        SetTotalUsers(dataTotalUsers);
        SetMostBoughtCategory(dataCategory);
      });
  }, [token?.access]);

  const adminData = useMemo(
    () => ({
      fetchdata: fetchdata,
      MostBoughtCategory: MostBoughtCategory,
      TotalUsers: TotalUsers,
      MonthlyUsers: MonthlyUsers,
      Orders: Orders
    }),
    [fetchdata, MostBoughtCategory, TotalUsers, MonthlyUsers, Orders]
  );

  return (
    <adminOverview.Provider value={adminData}>
      {props.children}
    </adminOverview.Provider>
  );
}

export default AdminOverviewFetch;

