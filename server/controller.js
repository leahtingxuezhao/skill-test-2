module.exports = {
  getProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.read_product(+id).then(response => {
      const data = response[0];
      console.log(data);
      res.status(200).send(data);
    });
  },

  getAllProducts: (req, res) => {
    const db = req.app.get("db");
    db.read_products().then(data => res.status(200).send(data));
  },

  createProduct: (req, res) => {
    console.log(req.body);
    const db = req.app.get("db");
    const { url, name, price } = req.body;

    db.create_product([url, name, price]).then(() => res.sendStatus(200));
  },

  updateProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { url, name, price } = req.body;

    db.update_product([id, url, name, price]).then(() => res.sendStatus(200));
  },

  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_product(id).then(data => res.sendStatus(200));
  }
};
