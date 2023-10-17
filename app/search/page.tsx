'use client'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import {useState,useEffect} from 'react'
import Search from '@/components/search/search';
import PeopleSearch from '@/components/search/peopleSearch';


export default function Page() {


  return (
   
  <>
    <Tabs
      defaultActiveKey="movies"
      id="uncontrolled-tab-example"
      className="mb-3"
      
    >
      <Tab eventKey="movies" title="Search Movies" className='m-5'>
   


        <Search/>
      </Tab>
      <Tab eventKey="people" title="Search People" className='m-5'>

         <PeopleSearch/>
      </Tab>

    </Tabs>
</>

  );
}