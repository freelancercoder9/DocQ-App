// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

const appConfig = require("../appConfig").configuration;
module.exports = {
  userStatusList: [
    appConfig.userStatus.all,
    appConfig.userStatus.approved,
    appConfig.userStatus.pending,
    appConfig.userStatus.rejected,
  ],
  roles: [appConfig.roles.admin, appConfig.roles.staff],
};
