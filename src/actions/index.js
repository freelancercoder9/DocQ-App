export const getAllFiles = () => {
  return {
    type: "ALL_FILES",
  };
};
export const getPendingFiles = () => {
  return {
    type: "PENDING_FILES",
  };
};
export const getApprovedFiles = () => {
  return {
    type: "APPROVED_FILES",
  };
};
export const getRejectedFiles = () => {
  return {
    type: "REJECTED_FILES",
  };
};
