import React, { useState } from "react";
import {Date} from "./components/Date";
import {Did} from "./components/Did";
import {Todo} from "./components/Todo";

export const App=()=> {
// --------------------------------------------------------------------

  // Dateコンポーネントのinputタグに関するstate
  const [inputDate,setInputDate]=useState('');

  // 次回面談日に関するstate
  const [date,setDate]=useState('');

  // disabled属性に関するstate
  const [disabled,setDisAbled]=useState(false);

  // inputタグに文字が打たれている時の処理
  const onChangeInput=(e)=>{
    setInputDate(e.target.value);
  };

  // 決定ボタンが押された時の処理
  const onClickDesition=()=>{
    if(inputDate===''){
      return;
    }
    setDate(inputDate);
    setInputDate('');
    setDisAbled(true);
  };

  // 削除ボタンが押された時の処理
  const onClickDelete=()=>{
    setDate('');
    setDisAbled(false);
  };

// --------------------------------------------------------------------

  // Didコンポーネントのinputタグに関するstate
  const [inputDid,setInputDid]=useState('');

  // didリストに関するstate
  const [dids,setDids]=useState([]);

  // textareaタグに文字が打たれている時の処理
  const onChangeDidTextarea=(e)=>{
    setInputDid(e.target.value);
  };

  // 追加ボタンが押された時の処理
  const onClickAddDid=()=>{
    if(inputDid===''){
      return;
    }
    const newDids=[...dids,inputDid];
    setDids(newDids);
    setInputDid('');
  };

  // 削除ボタンが押された時の処理
  const onClickDeleteDid=(index)=>{
    const newDids=[...dids];
    newDids.splice(index,1)
    setDids(newDids);
  };

// --------------------------------------------------------------------

// Todoコンポーネントのinputタグに関するstate
const [inputTodo,setInputTodo]=useState('');

// Todoリストに関するstate
const [todos,setTodos]=useState([]);

// textareaタグに文字が打たれている時の処理
const onChangeTodoTextarea=(e)=>{
  setInputTodo(e.target.value);
};

// 追加ボタンが押された時の処理
const onClickAddTodo=()=>{
  if(inputTodo===''){
    return;
  }
  const newTodos=[...todos,inputTodo];
  setTodos(newTodos);
  setInputTodo('');
};

// 削除ボタンが押された時の処理
const onClickDeleteTodo=(index)=>{
  const newTodos=[...todos];
  newTodos.splice(index,1)
  setTodos(newTodos);
};

  return (
  <>
    <Date
      input={inputDate}
      onChange={onChangeInput}
      onClickDesition={onClickDesition}
      date={date}
      onClickDelete={onClickDelete}
      disabled={disabled}
    />
    <Did 
      input={inputDid}
      onChange={onChangeDidTextarea}
      onClickAdd={onClickAddDid}
      dids={dids}
      onClickDelete={onClickDeleteDid}
    />
    <Todo 
      input={inputTodo}
      onChange={onChangeTodoTextarea}
      onClickAdd={onClickAddTodo}
      todos={todos}
      onClickDelete={onClickDeleteTodo}
    />
  </>
  )
};