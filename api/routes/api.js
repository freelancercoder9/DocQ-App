// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

("use strict");

function apiRoutes(app) {
  // User API's
  app
    .route("/user/register")
    .post(require("../services/users/userRegister").process);

  app
    .route("/user/login")
    .post(require("../services/users/userLogin").processRequest);

  app
    .route("/user/:status")
    .get(require("../services/users/userStatusRead").process);

  app
    .route("/user/:id")
    .get(require("../services/users/userRead").process)
    .delete(require("../services/users/userDelete").process);

  // Organization API's
  app
    .route("/org/register")
    .post(require("../services/organizations/orgRegister").process);

  app
    .route("/org/:orgId")
    .get(require("../services/organizations/orgView").process)
    .delete(require("../services/organizations/orgDelete").process);
  app
    .route("/org/update")
    .patch(require("../services/organizations/orgUpdate").process);

  // Docs API's
  app
    .route("/docs/:status")
    .get(require("../services/docs/docStatusRead").process);
}
module.exports = apiRoutes;
