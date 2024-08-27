import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

const Products = () => {
    const { companyName } = useParams();
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        price: '',
        category: '',
        rating: '',
        discount: '',
        availability: ''
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const params = { ...filters };
                const response = await axios.get(`http://20.244.56.144/test/companies/${companyName}`, {
                    headers: {
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzM5OTQxLCJpYXQiOjE3MjQ3Mzk2NDEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjA1ZjA4N2VmLWM4OWMtNGUxYy05MWVkLTk1ZTIxNWExMGVmMSIsInN1YiI6ImdzZWVtYWxhQGdpdGFtLmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkbWVkIiwiY2xpZW50SUQiOiIwNWYwODdlZi1jODljLTRlMWMtOTFlZC05NWUyMTVhMTBlZjEiLCJjbGllbnRTZWNyZXQiOiJZTWtHd2JhTVBtaEdxV2Z6Iiwib3duZXJOYW1lIjoiU2VlbWFsYSBHeWFuZXNod2FyIFJhbyIsIm93bmVyRW1haWwiOiJnc2VlbWFsYUBnaXRhbS5pbiIsInJvbGxObyI6IlZVMjFDU0VOMDMwMDA3MCJ9.1-4SCKzNQwoZev55p7-Y9ZDpCeUuhegwsBeM6rZJZa0`
                    },
                    params
                });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [filters, companyName]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="filters mb-4">
                <div className="filter-item">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={filters.name}
                        onChange={handleFilterChange}
                        className="border p-2"
                    />
                </div>
                <div className="filter-item">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={filters.price}
                        onChange={handleFilterChange}
                        className="border p-2"
                    />
                </div>
                <div className="filter-item">
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={filters.category}
                        onChange={handleFilterChange}
                        className="border p-2"
                    >
                        <option value="">Select Category</option>
                        {Categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="filter-item">
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="text"
                        id="rating"
                        name="rating"
                        value={filters.rating}
                        onChange={handleFilterChange}
                        className="border p-2"
                    />
                </div>
                <div className="filter-item">
                    <label htmlFor="discount">Discount:</label>
                    <input
                        type="text"
                        id="discount"
                        name="discount"
                        value={filters.discount}
                        onChange={handleFilterChange}
                        className="border p-2"
                    />
                </div>
                <div className="filter-item">
                    <label htmlFor="availability">Availability:</label>
                    <select
                        id="availability"
                        name="availability"
                        value={filters.availability}
                        onChange={handleFilterChange}
                        className="border p-2"
                    >
                        <option value="">Select Availability</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                </div>
            </div>

            <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product p-4 border border-gray-200 rounded">
                            <h2 className="text-lg font-bold">{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Company: {product.company}</p>
                            <p>Category: {product.category}</p>
                            <p>Rating: {product.rating}</p>
                            <p>Discount: {product.discount}%</p>
                            <p>Availability: {product.availability}</p>
                        </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default Products;
