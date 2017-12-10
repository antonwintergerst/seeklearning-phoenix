import React from 'react';

const OrderSummary = ({ products }) => (
  <div className="ui basic segment ad-selection-form">
    <table className="ui celled striped table">
      <thead className="center aligned">
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>
              <div className="ui ribbon label">{product.name}</div>
            </td>
            <td className="center aligned">
              {product.quantity}
            </td>
            <td className="center aligned">
              <span className="price">${product.price}</span>
              <span className="price-suffix">+GST</span>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="center aligned">
        <tr>
          <th>Total</th>
          <th>{products.reduce((acc, p) => acc + p.quantity, 0)}</th>
          <th>
            <span className="price">${products.reduce((acc, p) => acc + (p.quantity * p.price), 0)}</span>
            <span className="price-suffix">+GST</span>
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
);

export default OrderSummary;
