import Model from './Model';
import userSchema from '../migrations/users';

/**
 * Handles data requests for the User resource
 *
 * @class User
 * @extends {Model}
 */
export default class User extends Model {
  /**
   * Creates an instance of User.
   * @memberof User
   * @param {String} table - Resource table name
   * @param {Array} fields - List of table fields
   * @param {Array} fieldTypes - List of table field types
   */
  constructor(
    table = userSchema.table,
    fields = userSchema.fields,
    fieldTypes = userSchema.fieldTypes,
  ) {
    super(table, fields, fieldTypes);
  }
}