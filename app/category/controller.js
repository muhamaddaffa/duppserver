module.exports = {
  index: async (req, res) => {
    try {
      res.render("index", { title: "Express" });
    } catch (e) {
      console.log(e);
    }
  },
};
