module.exports = {
  index: async (req, res) => {
    try {
      res.render("admin/category/view_category");
    } catch (e) {
      console.log(e);
    }
  },
};
