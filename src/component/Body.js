


import React, { useEffect, useState } from 'react'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { TreeSelect } from 'primereact/treeselect';

import { Slider } from 'primereact/slider';


const Body = () => {
   
    const[amount,setValue]=useState(300)
    const[down,setdown]=useState(60)
    const[loan,setloan]=useState(240)
    const[persentage,setper]=useState(2)
    const[selectedNodeKey,setSelectedNodeKey]=useState("shiva")
    const [nodes, setNodes] = useState(["shiva"]);
    useEffect(() => {
        setNodes("rahul");
    }, []);  

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

  return (
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
    <div style={{ marginTop:"2vw"}}>
        <p>Tenure</p>
        <TreeSelect
        style={{color:"black"}}
            value={selectedNodeKey}
            onChange={(e) => setSelectedNodeKey(e.value)}
            options={nodes}
            placeholder="Select Item"
            pt={{
                root: { className: 'w-full md:w-30rem' },
                tree: {
                    content: ({ context }) => ({
                        className: context.expanded ? 'bg-blue-100' : 'undefined'
                    })
                }
            }}
        ></TreeSelect>
       
        </div>
    </div>
  )
}

export default Body