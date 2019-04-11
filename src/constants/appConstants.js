const appConstants = {
  apiConst: {
    statusOk: 200,
    statusMultiChoice: 300,
    statusError: 400,
    internalServerError: 500,
    notFound: 404,
    unauthorized: 401
  },
  conversionEnum: {
    DAY: { name: "DAY", conversionConstant: 24 * 60 },
    HOURS: { name: "HOURS", conversionConstant: 60 }
  },
  AUTH_COOKIE_KEY: "DEEPAVI"
};

export default appConstants;
