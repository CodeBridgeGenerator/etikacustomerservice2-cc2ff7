
const refunds = require("./refunds/refunds.service.js");
const complaints = require("./complaints/complaints.service.js");
const commercials = require("./commercials/commercials.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(refunds);
  app.configure(complaints);
  app.configure(commercials);
    // ~cb-add-configure-service-name~
};
