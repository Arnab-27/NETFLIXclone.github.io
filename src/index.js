import React from 'react'
import reactDom from 'react-dom';
import Card from "./Cards";
import './index.css';
import Sdata from "./Sdata";

      function acard(val){

        return(
        <Card imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
    />
    )

      }

    reactDom.render( 
      <>

    <h1 className='header_style'> LIST OF TOP 5 NETFLIX SERIES IN 2020 </h1>

          {Sdata.map(acard)}

    </>,
     document.getElementById("root")
  );
