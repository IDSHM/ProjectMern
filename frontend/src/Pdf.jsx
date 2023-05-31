import React,{useRef} from 'react'
import ReactPrint from 'react-to-print'

function Pdf() {
    const ref = useRef()
  return (
    <div>
        <div ref={ref}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, beatae quaerat suscipit odit eum debitis distinctio temporibus accusamus officia modi voluptates aliquid rem explicabo maxime porro, officiis adipisci aperiam velit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quidem maxime quia ad voluptatibus voluptas provident fuga doloribus modi eaque delectus veniam magni, pariatur dolorem nisi molestiae similique nulla facere.
        </div>
        <ReactPrint trigger={()=><button>Print</button> }content ={()=>ref.current}/>
    </div>
  )
}

export default Pdf