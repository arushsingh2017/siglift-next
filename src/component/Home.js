// 'use client'
import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import NetworkBooster from './NetworkBooster';
import CalltoAction from './CalltoAction';
import ProductList from './ProductList';
import WorkProcess from './WorkProcess';
import Industries from './Industries';
import ServiceinCity from './ServiceinCity';
import Customer from './Customer';
import CalltoActiontwo from './CalltoActiontwo';

export default function Home() {
  return (
    <div>
      <Banner/>
      <Categories/>
      <NetworkBooster/>
      <CalltoAction/>
      <ProductList/>
      <Industries/>
      <WorkProcess/>     
      <ServiceinCity/>
      <Customer/>
      {/* <CalltoActiontwo/> */}


      
    
    </div>
  );
}
