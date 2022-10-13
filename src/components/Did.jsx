import React from "react";

export const Did=(props)=>{
  // propsに対する分割代入
  const {input,onChange,onClickAdd,dids,onClickDelete}=props;

  // boxのスタイル
  const box={
    margin:'40px auto',
    width:'240px',
    height:'auto',
    backgroundColor:'green',
    textAlign:'center',
    paddingTop:'16px',
    paddingBottom:'24px',
  };

  // titleのスタイル
  const title={
    padding:'0 0 16px 0',
    margin:'0',
  }

  // 縦方向を中心にする
  const alignItems={
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }

  // 横並びにするスタイル
  const flexBox={
    display:'flex',
  }

  // liに対するスタイル
  const li={
    listStyle:'none',
    marginRight:'8px',
  }

  return (
    <div style={box}>
      <h3 style={title}>この2週間でやったこと</h3>
      <div style={alignItems}>
        <textarea placeholder="Nuxt.jsでTODOリストを作る(3h)" value={input} onChange={onChange} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <ul>
        {dids.map((did,index)=>{
          return (
            <div key={index} style={flexBox}>
              <li style={li}>{did}</li>
              <button onClick={()=>{onClickDelete(index)}}>取消</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
};