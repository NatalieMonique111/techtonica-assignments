import React from 'react';


export default function Cell({ details, updateFlag }) {
  return <div onContentMenu={(e) => updateFlag(e)} onClick={() => console.log(details)} style={style.cellStyle}>
    {details.value}
  </div>

}

const style = {
  cellStyle: {
    width: 40, height: 40, background: "grey",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}

