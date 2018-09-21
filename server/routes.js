const api = require('./controller');
const bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    // users
    app.get('/api/users', api.allUsers);
    app.get('/api/users/:id', api.getUser);
    app.post('/api/users', api.createUser);
    app.delete('/api/users/:id', api.deleteUser);
    app.put('/api/users/:id', api.updateUser);
    // products
    app.get('/api/products', api.allProducts);
    app.get('/api/products/:id', api.getProduct);
    app.patch('/api/users/products/:id', api.createProduct);
    app.delete('/api/products/:id', api.deleteProduct);
    app.put('/api/products/:id', api.updateProduct);
}