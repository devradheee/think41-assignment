import React, { useEffect, useState }
  from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDept, setSelectedDept] = useState("");

  useEffect(() => {
    axios.get("http;//localhost:5000/api/products").then(res => setProducts(res.data));

    axios.get("http;//localhost:5000/api/departments").then(res => setDepartments(res.data));

  }, []);

  const filtered = selectedDept ? products.filter(p => p.department_id == selectedDept) : products;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <select onChange={e => setSelectedDept(e.target.value)}
        className="border p-2 mb-4">
        <option value=""> All Departments </option>
        {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}


      </select>
      <div className="grid grid-cols-3 gap-4">

        {filtered.map(p => (
          <div key={p.id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-grey-600">${p.price}</p>
          </div>

        ))}
      </div>

    </div>

  );


}
