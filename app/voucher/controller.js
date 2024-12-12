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
      res.render("admin/voucher/create");
    } catch (e) {
      console.log(e);
    }
  },
  //   activeCategory: async (req, res) => {
  //     try {
  //       const { coinName, coinQuantity, price } = req.body;
  //       await Nominal({ coinName, coinQuantity, price }).save();
  //       req.flash("alertMessage", "Nominal berhasil ditambahkan");
  //       req.flash("alertStatus", "success");
  //       res.redirect("/nominal");
  //     } catch (e) {
  //       req.flash("alertStatus", `${e.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/nominal");
  //     }
  //   },
  //   viewEdit: async (req, res) => {
  //     try {
  //       const nominal = await Nominal.findById(req.params.id);
  //       res.render("admin/nominal/edit", { nominal });
  //     } catch (e) {
  //       req.flash("alertStatus", `${e.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/nominal");
  //     }
  //   },

  //   activeEdit: async (req, res) => {
  //     try {
  //       const { coinName, coinQuantity, price } = req.body;
  //       await Nominal.findByIdAndUpdate(req.params.id, {
  //         coinName,
  //         coinQuantity,
  //         price,
  //       });
  //       req.flash("alertMessage", "Nominal berhasil di edit");
  //       req.flash("alertStatus", "success");
  //       res.redirect("/nominal");
  //     } catch (e) {
  //       req.flash("alertStatus", `${e.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/nominal");
  //     }
  //   },

  //   activeDelete: async (req, res) => {
  //     try {
  //       await Nominal.findByIdAndDelete(req.params.id);
  //       if (!nominal) {
  //         return res.status(404).send("Nominal not found");
  //       }
  //       req.flash("alertMessage", "Nominal berhasil di hapus");
  //       req.flash("alertStatus", "success");
  //       res.redirect("/nominal");
  //     } catch (e) {
  //       req.flash("alertStatus", `${e.message}`);
  //       req.flash("alertStatus", "danger");
  //       res.redirect("/nominal");
  //     }
  //   },
};
