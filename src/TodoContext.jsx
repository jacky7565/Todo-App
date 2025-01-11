import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext(null);

export const UseMyContext = () => {
  return useContext(MyContext);
};
export const MyTodoProvider = ({ children }) => {
  let [add, setAdd] = useState(() => {
    const saveData = localStorage.getItem("addTodaData");
    return saveData ? JSON.parse(saveData) : [];
  });

  let addfun = (e) => {
    setAdd((preVal) => {
      let addStorageData = [{ id: Date.now(), ...e }, ...preVal];
      localStorage.setItem("addTodaData", JSON.stringify(addStorageData));
      return addStorageData;
    });
  };

  const deleteTodo = (_id) => {
    setAdd((preVal) => {
      let filterTodo = preVal.filter((val) => val.id != _id);
      localStorage.setItem("addTodaData", JSON.stringify(filterTodo));
      return filterTodo;
    });
  };

  const updateTodo = (_id, value) => {

    setAdd((preVal) => {
      let filterUpData = preVal.map((val) => {
        if (val.id ==_id) {
        
        return {...val,dodoValue:value}
        } else {
          
         return val;
        
        }
      });


      console.log(filterUpData)
      localStorage.setItem("addTodaData", JSON.stringify(filterUpData));
      return filterUpData
    });
  };
  return (
    <MyContext.Provider value={{ add, setAdd, addfun, deleteTodo, updateTodo }}>
      {children}
    </MyContext.Provider>
  );
};
