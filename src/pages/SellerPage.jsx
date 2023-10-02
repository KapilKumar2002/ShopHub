import React, { useState } from "react";
import { Navigate } from "react-router-dom";
const SellerPage = () => {
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price,setPrice] = useState(0);
  const [rating,setRating] = useState(0);
  const [discount,setDiscount] = useState(0);
  const [images,setImages] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  const uploadProduct = async(ev)=>{
    ev.preventDefault();

    const data = new FormData();
    data.set('name', name);
    data.set('description', description);
    data.set('category', category);
    data.set('price', price);
    data.set('rating', rating);
    data.set('discount', discount);
    data.set('image', images[0]);
    const response = await fetch('http://localhost:4000/product', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
console.log(data)
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <section className="max-w-[800px] mx-auto my-10 max-lg:mx-10 max-md:mx-2">
      <form  onSubmit={uploadProduct} action="" className="flex flex-col gap-4">
        <input required={true} type="text" className="input" placeholder="Product Name" onChange={(e)=>setName(e.target.value)}/>
        <input required={true} type="text" className="input" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
        <select required={true} onChange={e=>setCategory(e.target.value)}  name="category" id="category" className="input bg-white">
          <option value="Books">Books</option>
          <option value="Sports">Sports</option>
          <option value="Electronics">Electronics</option>
          <option value="Beauty">Beauty</option>
          <option value="Shoes">Shoes</option>
          <option value="Men Fashion">Men Fashion</option>
          <option value="Women Fashion">Women Fashion</option>
          <option value="Kids Fashion">Kids Fashion</option>
          <option value="New Arrival">New Arrival</option>
          <option value="Trending Fashion">Trending Fashion</option>
          <option value="Featured">Featured</option>

          
        </select>
        <div  className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
          <input required={true} onChange={e=>setPrice(e.target.value)} type="number" className="input w-full" placeholder="Price" />
          <input required={true} onChange={e=>setRating(e.target.value)} type="number" className="input w-full" placeholder="rating" />
          <input required={true} onChange={e=>setImages(e.target.files)} type="file" className="input"/>
          <input
          required={true}
            onChange={e=>setDiscount(e.target.value)}
            type="number"
            className="input"
            placeholder="Discount in percentage"
          />
        </div>

        <button className="py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md">
          Add Product {category}
        </button>
      </form>

    </section>
  );
};

export default SellerPage;
