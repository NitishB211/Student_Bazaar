// src/Coponent/ItemDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/items/${id}`)
      .then((res) => setItem(res.data));
  }, [id]);

  if (!item) return <p>Loading item...</p>;

  return (
    <div className="container mt-4">
      <h2>{item.Name}</h2>
      <img src={item.image} alt={item.Name} width="300" />
      <p><strong>Description:</strong> {item.Description}</p>
      <p><strong>Price:</strong> ₹{item.price}</p>
      <p><strong>Size:</strong> {item.size}</p>
      <hr />
      <ReviewForm itemId={item.id} />
      <ReviewList itemId={item.id} />
    </div>
  );
}

export default ItemDetail;
