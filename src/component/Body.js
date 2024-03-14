


import React, { useState } from 'react'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Slider } from 'primereact/slider';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(
    ArcElement, Tooltip, Legend  
)

const Body = () => {
   
    const[amount,setValue]=useState(300)
    const[down,setdown]=useState(60)
    const[loan,setloan]=useState(240)
    const[persentage,setper]=useState(2)
   
   

    function myfunction1(e){
        setValue(e.value)
        setdown( Math.floor((e.value*20)/100))
        setloan(e.value-Math.floor((e.value*20)/100))
       
    }
    function myfunction2(e){
        setdown(e.value)
        setloan(amount-e.value)

    }
    function myfunction3(e){
        setloan(e.value)
        setdown(amount-e.value)

    }
    function myfunction4(e){
   setper(e.value)

    }
    const totalLoanMonths = 5 * 12;
  const interestPerMonth = persentage / 100 / 12;
  const monthlyPayment =
    (loan *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loan;

    
  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"space-between"}}>
    <div style={{marginLeft:"5%", width:"50%"}}>
       
       
        {/* amount */}
       <div  style={{marginTop:"3vw",fontFamily:"sans-serif"}}> 
        <p style={{fontSize:"25px", fontWeight:"bold"}}>$ {amount}</p>
       <div style={{width:"100%", }}><Slider value={amount} max={1000} min={100} onChange={(e) => myfunction1(e)} /></div>
       <div id="fl"><span>$ {0}</span><span>$ {1000}</span></div>
       </div>

{/* downPayment */}
    <div style={{marginTop:"3vw"}}>
    <p style={{fontSize:"25px",fontWeight:"bold"}}>$  {down}</p>
    <div style={{width:"100%", }}><Slider value={down} max={amount} min={0} onChange={(e) => myfunction2(e)} /></div>
    <div id="fl"><span>${0}</span><span>${amount}</span></div>
    </div>
    {/* loan */}
    <div  style={{marginTop:"3vw"}}>
     <p style={{fontSize:"25px",fontWeight:"bold"}}>$  {loan}</p>
    <div style={{width:"100%", }}><Slider value={loan} max={amount} min={0}  onChange={(e) => myfunction3(e)} /></div>
    <div id="fl"><span>${0}</span><span>${amount}</span></div>
    </div>
    {/* percentage */}
    <div  style={{marginTop:"3vw"}}>
    <p style={{fontSize:"25px",fontWeight:"bold"}}>  {persentage}%</p>
    <div style={{width:"100%", }}><Slider value={persentage} max={18} min={2}  onChange={(e) => myfunction4(e)} /></div>
    <div id="fl"><span>${2}</span><span>${18}</span></div>
    </div>
   
    </div >
   
      <div style={{width:"30%", display:"flex", flexDirection:"column",alignItems:"cen"}}> 
      <h3>MonthlyPayment:$ {Math.floor(monthlyPayment)}</h3>
      <Pie data = {{
        labels: [
          'Principal',
          'interest',
          
        ],
        datasets: [{
         
          data: [amount, totalInterestGenerated, ],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            
          ],
          hoverOffset: 4
        }]
      }
    }
></Pie>
 </div>
    </div>
  )
}

export default Body