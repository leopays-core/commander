'use strict';

/**
 * JSON-RPC 2.0 Request object.
 * https://www.jsonrpc.org/specification 4 Request object
 *
 * @constructor
 * @this  {Request}
 * @param {Object} obj - .
 * @param {String} obj.jsonrpc - A String specifying the version of the JSON-RPC protocol. MUST be exactly "2.0".
 * @param {String} obj.method - A String containing the name of the method to be invoked.
 * @param {Object|Array} obj.params - A Structured value that holds the parameter values to be used during the invocation of the method.
 * @param {String|Number|null} obj.id - An identifier established by the Client that MUST contain a String, Number, or NULL value if included. If it is not included it is assumed to be a notification.
 * @param {Object} opts - .
 * @param {Boolean} opts.notification - Если `true`, тогда `id` не включается.
**/
class Request {
  constructor(obj = {}, opts = {}) {
    this.jsonrpc = "2.0";
    this.method = obj.method || "method";
    this.params = obj.params || "params";
    this.id = opts.notification ? undefinde : obj.id || "id"; ///uuuid
  }

  /**
   * Строковое представление объекта Request.
   *
   * @override
   * @this   {Request}
   * @return {String} Информация об объекте Request.
  **/
  toString() {
    return JSON.stringify(
      Object.assign({}, this.jsonrpc, this.method, this.params, this.id)
    ) || "";
  }

  /**
   * Проверка и нормализация входящего объекта. Возвращает нормализованный объект.
   *
   * @this   {Request}
   * @return {Object} нормализованный объект.
  **/
  check(obj) {
    switch (typeof obj) {
      case "string":
        try {
          obj = JSON.parse(obj);
        } catch (error) {
          break;
        }
      case "object":
        if (obj === null)
          break;
      case "undefined":
      case "boolean":
      case "number":
      case "symbol":
      case "function":
        break;
      default:
        break;
    }

    return Object.assign({}, obj);
  }
}

module.exports.Request = Request;
