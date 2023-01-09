const Course = require("../models/Course");
const { mongoosesToObject, mongooseToObject } = require("../../utils/mongoose");

class CourseControllers {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render("courses/show", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }
}

module.exports = new CourseControllers();
