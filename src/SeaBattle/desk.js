import react from "react";

function Desk() {

  const table = {
    'A': Array(10).fill(null),
    'B': Array(10).fill(null),
    'C': Array(10).fill(null),
    'D': Array(10).fill(null),
    'E': Array(10).fill(null),
    'F': Array(10).fill(null),
    'G': Array(10).fill(null),
    'H': Array(10).fill(null),
    'I': Array(10).fill(null),
    'J': Array(10).fill(null)
  },
    tableHeader = Object.keys(table),
    style = {
      row : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      wrapper : {
        width:'300px',
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%)'
      }
    }

  return (
    <div className='wrapper' style={style.wrapper}>
      <div style={style.row}>
        {tableHeader.map((key) => (<div>{key}</div>))}
      </div>
    </div>
  )
}


export default Desk