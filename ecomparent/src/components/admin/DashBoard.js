import React, { useContext, useEffect} from 'react'
import styles from "./dashboard.module.css"
import { BarChart } from '../extra comp/admin/BarChart'
import { PieChart } from '../extra comp/admin/PieChart'
import { LineChart } from '../extra comp/admin/LineChart'
import StatBox from '../extra comp/admin/StatBox'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { adminOverview } from '../../stores/CartContxt'
import Loading from "../extra comp/Loading"


// import PieChart

function DashBoard() {
  const{fetchdata, Orders, MostBoughtCategory, TotalUsers, MonthlyUsers}=useContext(adminOverview)
  
  useEffect(()=>{
    fetchdata();
  }, [fetchdata])
  return (
    <>
    {(Orders,MostBoughtCategory,TotalUsers,MonthlyUsers)?<div className={styles.container}>
      <div className={styles.parent}>
        <div className={styles.statbox}>
          <StatBox
            title={TotalUsers?.seller+TotalUsers["no-seller"]}
            subtitle="Total Users"
            progress={(TotalUsers?.previousBuyers2 !== 0)?(((TotalUsers?.currentBuyers-TotalUsers?.previousBuyers2)*100)/TotalUsers?.previousBuyers2):TotalUsers?.currentBuyers/100}
            // progress={'0.75'}
            increase={TotalUsers?.seller+(TotalUsers["no-seller"]-1)}
            icon={
              <EmailOutlinedIcon
              sx={{color:"gray", fontSize:"26px"}} />
            }
          />
          <StatBox
            title={TotalUsers?.seller}
            subtitle="Total Sellers"
            progress={(TotalUsers?.previousSellers2 !== 0)?(((TotalUsers?.currentSellers-TotalUsers?.previousSellers2)*100)/TotalUsers?.previousSellers2):TotalUsers?.currentSellers/100}
            // progress={'0.01'}
            increase={TotalUsers?.seller}
            icon={
              <EmailOutlinedIcon
              sx={{color:"gray", fontSize:"26px"}} />
            }
          />
          <StatBox
            title={TotalUsers&&TotalUsers["no-seller"]}
            subtitle="Total Buyers"
            progress={(TotalUsers?.previousBuyers2 !== 0)?(((TotalUsers?.currentBuyers-TotalUsers?.previousBuyers2)*100)/TotalUsers?.previousBuyers2):TotalUsers?.currentBuyers/100}
            // progress={'0.9'}
            increase={TotalUsers["no-seller"]-1}
            icon={
              <EmailOutlinedIcon
              sx={{color:"gray", fontSize:"26px"}} />
            }
          />
          <StatBox
            title={TotalUsers?.goods}
            subtitle="Total Goods"
            progress={(TotalUsers?.previousGoods2 !== 0)?(((TotalUsers?.currentGoods-TotalUsers?.previousGoods2)*100)/TotalUsers?.previousGoods2):TotalUsers?.currentGoods/100}
            increase={TotalUsers?.goods}
            icon={
              <EmailOutlinedIcon
              sx={{color:"gray", fontSize:"26px"}} />
            }
          />
        </div>
        <div className={styles.infographics}>
          <div className={styles.charts} id={styles.barchart}>
            <PieChart values={
              [TotalUsers['electronics'], TotalUsers['computing'], TotalUsers['home&office'],TotalUsers['fashion'],TotalUsers['baby product'], TotalUsers['game']]}/>        
          </div>
          <div className={styles.charts} id={styles.chart2}>
              <BarChart />
          </div>
          <div className={styles.charts} id={styles.chart3}>
              <LineChart />
          </div>

        </div>
        </div>
    </div>: 
    <div className="loading-parent" style={{height:'100vh',position:'relative',width: '100%', display: 'flex', justifyContent: 'center', marginTop:'2rem'}}>
      <div className="loading-child" style={{position:'absolute'}}>
        <Loading />
      </div>
    </div>
     }
    
    </>
  )
}

export default DashBoard