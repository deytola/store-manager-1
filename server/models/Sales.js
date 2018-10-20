import Model from './Model';
import records from '../database/sales';
import products from '../database/products';
import saleProduct from '../database/sale_product';

/**
 * Handles data requests for the Sales resource
 *
 * @class Sales
 * @extends {Model}
 */
export default class Sales extends Model {
  /**
   * Creates an instance of Sales.
   * @memberof Sales
   */
  constructor() {
    const fields = ['id', 'attendantId', 'customerName', 'createdAt', 'totalPay'];
    super(records, fields);
    this.productPivot = saleProduct;
  }

  /**
   * This function gets all the products
   * attached to the sale with the specified id
   *
   * @param {Number} salesId - the id of the sales
   * @returns {Array} - the array of products contained in the sale
   */
  getProducts(salesId) {
    const sales = this.productPivot.filter(item => item.salesId === salesId);
    const productIdArray = [];
    sales.forEach((item) => {
      productIdArray.push(item.productId);
    });

    const productsArray = [];

    productIdArray.forEach((id) => {
      productsArray.push(products.find(item => item.id === id));
    });

    return productsArray;
  }
}
