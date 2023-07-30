const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'product.json');

const getProductsFromFile = (cb) => {

  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      return cb(JSON.parse(fileContent));
    }
  });
}

module.exports = class Product {

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;

  }

  save() {

    getProductsFromFile(products => {
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      })
    });

    // const p = path.join(path.dirname(require.main.filename), 'data', 'product.json');
    // fs.readFile(p, (err, fileContent) => {
    //   getProductsFromFile();  
    //   let products = [];

    //   if (!err) {
    //     products = JSON.parse(fileContent);
    //   }
    //   products.push(this);
    //   fs.writeFile(p, JSON.stringify(products), (err) => {
    //     console.log(err);
    //   })
    //   return JSON.parse(fileContent);
    // });
  }


  static fetchAll(cb) {
    getProductsFromFile(cb);
  }


}