import React from "react";
import AppHeader from "../components/header";
import AppInput from "../components/input";
import $ from "jquery";

const MainApp = (): JSX.Element => 
{
  const handleSubmit = (event: SubmitEvent):void  =>
  {   
      event.preventDefault();
      console.log(event.target[0]?.value);
      $("search-input-element").val(" ");
  }
  return (
    <React.Fragment>
      <section className="container-fluid p-0 m-0">
        <AppHeader></AppHeader>
        <section className="my-5 p-3"></section>
       <section className="app-input-container m-2">
          <h3 className="fw-bold text-capitalize text-center my-4 py-2">Youtube downloader</h3>
         <AppInput onSubmit={(event:SubmitEvent)=>handleSubmit(event)}></AppInput>
       </section>
       
      </section>
    </React.Fragment>
  );
};

export default MainApp;