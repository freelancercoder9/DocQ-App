const { RBAC } = require("rbac");

rbacJsonData = {
  roles: ["admin", "staff"],
  permissions: {
    action: ["approve", "reject", "view"],
  },
  grants: {
    admin: ["approve_action", "reject_action", "view_action"],
    staff: ["view_action"],
  },
};

exports.rbacJsonData = rbacJsonData;
function rbacObject() {
  const rbac = new RBAC(rbacJsonData);
  rbac.init();
  return rbac;
}

exports.rbacObject = rbacObject;
