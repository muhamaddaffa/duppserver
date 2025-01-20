const { activeCategory } = require("../category/controller");
const Category = require("../category/model");
const Voucher = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alerMessages = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alerMessages, status: alertStatus };
      const voucher = await Voucher.find();

      res.render("admin/voucher/view_voucher", { voucher, alert });
    } catch (e) {
      req.flash("alertStatus", `${e.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/voucher");
    }
  },

  viewCreate: async (req, res) => {
    try {
      const Category = await Category.find();
      res.render("admin/voucher/create");
    } catch (e) {
      req.flash("alertStatus", `${e.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/voucher");
    }
  },

  activeCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Voucher({ name }).save();
      req.flash("alertMessage", "Voucher berhasil ditambahkan");
      req.flash("alertStatus", "success");
      res.redirect("/voucher");
    } catch (e) {
      req.flash("alertStatus", `${e.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/voucher");
    }
  },
};
