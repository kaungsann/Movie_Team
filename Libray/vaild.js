module.exports = {
  validBody: (Schema) => {
    return (req, res, next) => {
      let results = Schema.validate(req.body);
      if (results.error) {
        next(new Error(results.error.details[0].message));
      } else {
        next();
      }
    };
  },
  validId: (Schema, id) => {
    return (req, res, next) => {
      let obj = {};
      obj[`${id}`] = req.params`${id}`;
      let results = Schema.validate(obj);
      if (results.error) {
        next(new Error(results.error.details[0].message));
      } else {
        next();
      }
    };
  },
};
