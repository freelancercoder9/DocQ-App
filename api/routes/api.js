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
    .route("/user/update")
    .patch(require("../services/users/userUpdate").process);

  app.route("/users").get(require("../services/users/allUsers").process);
  app
    .route("/:orgId/users")
    .get(require("../services/users/allUsersForOrgId").process);

  app
    .route("/:orgId/users/:status")
    .get(require("../services/users/allUsersForOrgIdWithStatus").process);

  app
    .route("/users/:status")
    .get(require("../services/users/userStatusRead").process);

  app
    .route("/user/:id")
    .get(require("../services/users/userView").process)
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
  app.route("/docs/:status").get(require("../services/docs/docRead").process);
}
module.exports = apiRoutes;
