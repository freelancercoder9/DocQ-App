var obj = {
  fileName: "fileName",
  userName: "userName",
};
const SelectedFilesReducer = (state = obj, action) => {
  switch (action.type) {
    case "SELECTEDDOC_DATA":
      return (state = action.payload);

    default:
      return state;
  }
};

export default SelectedFilesReducer;
