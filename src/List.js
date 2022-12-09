import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
        const{id,name,age,image}=person;
        return( 
           <article key={id} className="person">
            <img src={image} alt={name}/>
            <div>
              <h4>{name}</h4>
              <p>{age}years</p>
            </div>
            </article>
        );
      })}
    </>
  );
};

export default List;

// arr [{
//   id:123,
//   place:karimnagr

// },
// {
//   id:4536,
//   place:hyderabad
// },
// {
//   id:8697,
//   place:warngal
// },
// {
//   id:1986,
//   place:kerla
// },{
//   id:67483,
//   place:mumbai
// }
// ]

// {arr.map(
//   (data)=>{
//   const[id,place]=data;
//   <div>
//   <li key={id}>{data}</li>
//   </div>
// });
// }
