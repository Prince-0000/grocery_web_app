import React, { useState, useEffect } from 'react'
import CategoryCards from './CategoryCards'
import {client, urlFor} from '../lib/client';

const CategoryBanner = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = '*[_type == "category"]';
        const response = await client.fetch(query);
        
        setState(response);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchData();
  }, []);

  if(state.length===0) return <div>loading...</div>
  return (
    <div className='grid grid-flow-col auto-cols-min bg-white h-[100px] my-4 mx-4'>
      <CategoryCards name={state[0].name} image={urlFor(state[0].image).url()}/>

      {state.map((card)=>(
          <div key={card._id}>
            <CategoryCards name={card.name} image={urlFor(card.image).url()}/>
          </div>
      ))}
     
    </div>
  )
}

export default CategoryBanner
