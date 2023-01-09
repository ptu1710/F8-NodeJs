const Course = require("../models/Course");
const { mongoosesToObject } = require("../../utils/mongoose");

class SiteControllers {
  // [GET] /
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mongoosesToObject(courses),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteControllers();
