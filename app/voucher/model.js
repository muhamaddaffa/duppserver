const mongoose = require("mongoose");
const { use } = require("../voucher/router");
let voucherSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama game harus diisi"],
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },

  thumbnail: {
    type: String,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },

  nominal: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "nominal",
    },
  ],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
module.exports = mongoose.model("voucher", voucherSchema);
