const pendingFiles = [
  {
    id: 12,
    docName: "reports1",
    userName: "Geetha",
    fileStatus: "Pending",
    awsFileRef: "Geetha_reports1",
  },
  {
    id: 122,
    docName: "reports1",
    userName: "Geetha",
    fileStatus: "Pending",
    awsFileRef: "Geetha_reports1",
  },
  {
    id: 129,
    docName: "reports1",
    userName: "Geetha",
    fileStatus: "Pending",
    awsFileRef: "Geetha_reports1",
  },
  {
    id: 120,
    docName: "reports1",
    userName: "Geetha",
    fileStatus: "Pending",
    awsFileRef: "Geetha_reports1",
  },
  {
    id: 162,
    docName: "reports1",
    userName: "Geetha",
    fileStatus: "Pending",
    awsFileRef: "Geetha_reports1",
  },
  {
    id: 612,
    docName: "reports1",
    userName: "Geetha",
    fileStatus: "Pending",
    awsFileRef: "Geetha_reports1",
  },
  {
    id: 912,
    docName: "reports1",
    userName: "Geetha",
    fileStatus: "Pending",
    awsFileRef: "Geetha_reports1",
  },
];

const rejectedFiles = [
  {
    id: 143,
    docName: "reports4",
    userName: "Geetha",
    fileStatus: "Rejected",
    awsFileRef: "Geetha_reports4",
  },
  {
    id: 22,
    docName: "reports5",
    userName: "Seetha",
    fileStatus: "Rejected",
    awsFileRef: "Seetha_reports5",
  },
  {
    id: 130,
    docName: "reports4",
    userName: "Geetha",
    fileStatus: "Rejected",
    awsFileRef: "Geetha_reports4",
  },
  {
    id: 27,
    docName: "reports5",
    userName: "Seetha",
    fileStatus: "Rejected",
    awsFileRef: "Seetha_reports5",
  },
  {
    id: 135,
    docName: "reports4",
    userName: "Geetha",
    fileStatus: "Rejected",
    awsFileRef: "Geetha_reports4",
  },
  {
    id: 24,
    docName: "reports5",
    userName: "Seetha",
    fileStatus: "Rejected",
    awsFileRef: "Seetha_reports5",
  },
  {
    id: 313,
    docName: "reports4",
    userName: "Geetha",
    fileStatus: "Rejected",
    awsFileRef: "Geetha_reports4",
  },
  {
    id: 21,
    docName: "reports5",
    userName: "Seetha",
    fileStatus: "Rejected",
    awsFileRef: "Seetha_reports5",
  },
];

const approvedFiles = [
  {
    id: 185,
    docName: "reports7",
    userName: "Geetha",
    fileStatus: "Approved",
    awsFileRef: "Geetha_reports7",
  },
  {
    id: 972,
    docName: "reports8",
    userName: "Seetha",
    fileStatus: "Approved",
    awsFileRef: "Seetha_reports8",
  },
  {
    id: 743,
    docName: "reports9",
    userName: "Meetha",
    fileStatus: "Approved",
    awsFileRef: "Meetha_reports9",
  },
  {
    id: 155,
    docName: "reports7",
    userName: "Geetha",
    fileStatus: "Approved",
    awsFileRef: "Geetha_reports7",
  },
  {
    id: 712,
    docName: "reports8",
    userName: "Seetha",
    fileStatus: "Approved",
    awsFileRef: "Seetha_reports8",
  },
  {
    id: 433,
    docName: "reports9",
    userName: "Meetha",
    fileStatus: "Approved",
    awsFileRef: "Meetha_reports9",
  },
  {
    id: 125,
    docName: "reports7",
    userName: "Geetha",
    fileStatus: "Approved",
    awsFileRef: "Geetha_reports7",
  },
  {
    id: 712,
    docName: "reports8",
    userName: "Seetha",
    fileStatus: "Approved",
    awsFileRef: "Seetha_reports8",
  },
  {
    id: 413,
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
      console.log(" lenght : ", state.length);
      return state;

    case "APPROVED_FILES":
      console.log("In approved files");
      state = approvedFiles;
      console.log(" lenght : ", state.length);
      return state;

    case "REJECTED_FILES":
      console.log("In rejected files");
      state = rejectedFiles;
      console.log(" lenght : ", state.length);
      return state;
    default:
      return state;
  }
};
export default DocListReducer;
