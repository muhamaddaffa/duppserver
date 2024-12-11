const Category = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alerMessages = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alerMessages, status: alertStatus };
      const category = await Category.find();
      res.render("admin/category/view_category", { category, alert });
    } catch (e) {
      req.flash("alertStatus", `${e.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },

  viewCreate: async (req, res) => {
    try {
      res.render("admin/category/create");
    } catch (e) {
      console.log(e);
    }
  },
  activeCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category({ name }).save();
      req.flash("alertMessage", "Kategori berhasil ditambahkan");
      req.flash("alertStatus", "success");
      res.redirect("/category");
    } catch (e) {
      req.flash("alertStatus", `${e.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
  viewEdit: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.render("admin/category/edit", { category });
    } catch (e) {
      req.flash("alertStatus", `${e.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },

  activeEdit: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.findByIdAndUpdate(req.params.id, {
        name,
      });
      req.flash("alertMessage", "Kategori berhasil di edit");
      req.flash("alertStatus", "success");
      res.redirect("/category");
    } catch (e) {
      req.flash("alertStatus", `${e.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },

  activeDelete: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      if (!category) {
        return res.status(404).send("Category not found");
      }
      req.flash("alertMessage", "Kategori berhasil di hapus");
      req.flash("alertStatus", "success");
      res.redirect("/category");
    } catch (e) {
      req.flash("alertStatus", `${e.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
};
