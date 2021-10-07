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
    userStatus: {
      all: "all",
      approved: "approved",
      pending: "pending",
      rejected: "rejected",
    },
    api: {
      user: {
        create: "/user/register",
        login: "/user/login",
        update: "/user/update",
        deteleUser: "/user/",
        read: "/user/",
        readUsers: "/users/",
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
    roles: { admin: "admin", staff: "staff" },
  },
};
