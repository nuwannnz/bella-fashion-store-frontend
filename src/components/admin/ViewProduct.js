import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/admin/ViewProduct.css'

export default function ViewProduct({pid}) {

    const products = useSelector(state => state.product.products);
    const [selectedProduct, setSelectedProduct] = useState(null);

    
    useEffect(()=>{
		console.log(pid)
		const id = pid;
		const _selectedProduct = products.find(p => p._id === id);
		setSelectedProduct(_selectedProduct);
    }, [products])

        return (
            
            <div>
                {selectedProduct && (
                    <div>
                <div className="row">
                <div className="text-label col-md-4">Product ID :</div>
                <div className="text-viewpage col-md-8">{selectedProduct._id}</div></div> <hr />
                <div className="row">
                <div className="text-label col-md-4">Product Name :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.name}</div></div><hr />
                <div className="row">
                <div className="text-label col-md-4">Product Brand :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.brand}</div></div><hr />
                <div className="row">
                <div className="text-label col-md-4">Product Category :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.subCategory}</div></div> <hr />
                <div className="row">
                <div className="text-label col-md-4">Product Price :</div>
                <div className="text-viewpage col-md-8">LKR. {selectedProduct.price}</div></div> <hr />
                <div className="row">

                <div className="text-label col-md-4">Product Discount :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.discount}</div></div> <hr />
                <div className="row">
                <div className="text-label col-md-4">Product Colors :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.colors}</div></div> <hr />
                <div className="row">
                <div className="text-label col-md-4">Product Tags :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.tags}</div></div> <hr />
                <div className="row">
                <div className="text-label col-md-4">Product Description :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.description}</div></div> <hr />
                <div className="row">
                <div className="text-label col-md-4">Product Added Date :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.addedDate}</div></div> <hr />
                <div className="row">
                <div className="text-label col-md-4">Product Updated Date :</div>
                <div className="text-viewpage col-md-8">{selectedProduct.updatedDate}</div></div> <hr />

                </div>
                )}
            </div>
        )
    
}
