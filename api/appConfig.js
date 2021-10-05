// ------------------------------------------------
// * Application: DocQ App
// * Author: chanduthedev@gmail.com
// ------------------------------------------------

module.exports = {
  configuration: {
    appServer: { host: "http://localhost", port: 7777 },
    testServer: { host: "http://chdocqserver.herokuapp.com" },

    mongoDB: {
      host: "mongodb://localhost",
      port: 27017,
      dbName: "docq_app",
    },
    api: {
      user: {
        create: "/user/register",
        login: "/user/login",
        updateDetails: "/user/update",
        deteleUser: "/user/",
        read: "/user/",
        readAll: "/users/all",
        readPending: "/users/pending",
        readApproved: "/users/approved",
        readRejected: "/users/rejected",
      },
      organization: {
        create: "/org/register",
        read: "/org/",
        update: "/org/update",
        detele: "/org/",
      },
      doc: {
        readAll: "/docs/all",
        readPending: "/docs/pending",
        readApproved: "/docs/approved",
        readRejected: "/docs/rejected",
      },
    },
  },
};
