const pendingFiles = [
  {
    id: 1,
    docName: "reports1",
    userName: "Geetha",
    fileStatus: "Pending",
    awsFileRef: "Geetha_reports1",
  },
  {
    id: 2,
    docName: "reports2",
    userName: "Seetha",
    fileStatus: "Pending",
    awsFileRef: "Seetha_reports2",
  },
  {
    id: 3,
    docName: "reports3",
    userName: "Meetha",
    fileStatus: "Pending",
    awsFileRef: "Meetha_reports3",
  },
];

const rejectedFiles = [
  {
    id: 1,
    docName: "reports4",
    userName: "Geetha",
    fileStatus: "Rejected",
    awsFileRef: "Geetha_reports4",
  },
  {
    id: 2,
    docName: "reports5",
    userName: "Seetha",
    fileStatus: "Rejected",
    awsFileRef: "Seetha_reports5",
  },
  {
    id: 3,
    docName: "reports6",
    userName: "Meetha",
    fileStatus: "Rejected",
    awsFileRef: "Meetha_reports6",
  },
];

const approvedFiles = [
  {
    id: 1,
    docName: "reports7",
    userName: "Geetha",
    fileStatus: "Approved",
    awsFileRef: "Geetha_reports7",
  },
  {
    id: 2,
    docName: "reports8",
    userName: "Seetha",
    fileStatus: "Approved",
    awsFileRef: "Seetha_reports8",
  },
  {
    id: 3,
    docName: "reports9",
    userName: "Meetha",
    fileStatus: "Approved",
    awsFileRef: "Meetha_reports9",
  },
];

const DocListReducer = (state = [], action) => {
  switch (action.type) {
    case "ALL_FILES":
      state = [...pendingFiles, ...approvedFiles, ...rejectedFiles];
      console.log("in reducer ALl 12 files");
      console.log(" lenght : ", state.length);
      return state;

    case "PENDING_FILES":
      console.log("In pending files");
      state = pendingFiles;
      return state;

    case "APPROVED_FILES":
      console.log("In approved files");
      state = approvedFiles;
      return state;

    case "REJECTED_FILES":
      console.log("In rejected files");
      state = rejectedFiles;
      return state;
    default:
      return state;
  }
};
export default DocListReducer;
