import React from "react";

export const Date=(props)=>{
  // propsに対する分割代入
  const {input,onChange,onClickDesition,date,onClickDelete,disabled}=props;

  // boxのスタイル
  const box={
    margin:'40px auto',
    width:'240px',
    height:'240px',
    backgroundColor:'green',
    textAlign:'center',
    paddingTop:'16px',
  };

  // titleのスタイル
  const title={
    padding:'0 0 16px 0',
    margin:'0',
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
      <h3 style={title}>次回面談日</h3>
      <input placeholder="(例) 4/1 21:00~" value={input} onChange={onChange} disabled={disabled} />
      <button onClick={onClickDesition} disabled={disabled}>決定</button>
      <ul>
        {date==='' || <div style={flexBox}><li style={li}>{date}</li><button onClick={onClickDelete}>取消</button></div>}
      </ul>
    </div>
  )
};