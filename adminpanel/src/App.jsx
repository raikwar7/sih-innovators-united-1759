import Btn from "./Btn";
import Option from "./Option";


function App() {
  const data = [
    {
      label: "Parcel Type",
      sele: "parcel_type",
      opt: [
        {
          val: "paper",
          name: "Paper",
        },
        {
          val: "food",
          name: "Food",
        },
        {
          val: "package",
          name: "Package",
        },
        {
          val: "other",
          name: "Other",
        },
      ],
    },
    {
      label: "Parcel Timing",
      sele: "parcel_timing",
      opt: [
        {
          val: "slot_1",
          name: "9 PM to 12 PM",
        },
        {
          val: "slot_2",
          name: "12 PM to 3 PM",
        },
        {
          val: "slot_3",
          name: "3 PM to 6 PM",
        },
      ],
    },
    {
      label: "Parcel Priority",
      sele: "parcel_priority",
      opt: [
        {
          val: "priority_1",
          name: "High",
        },
        {
          val: "priority_2",
          name: "Medium",
        },
        {
          val: "priority_3",
          name: "Normal",
        },
      ],
    },
  ];

  const btninfo=[
    {
      label: "Next",
      onclick: ()=>{
        console.log("Btn")
      }
    },
  ]
  

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-2">
        <h1 className="text-3xl font-semibold py-2">Admin Page</h1>
        <div className="flex justify-center flex-col  w-1/2">
          {data.map((ele, idx) => {
            return <Option key={idx} opt={ele} />;
          })}
        </div>
        <div className=''>
          {
            btninfo.map((ele,idx)=>{
              return <Btn btninfo={ele} key={idx}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
