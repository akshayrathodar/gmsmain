const DEBUG = process.env.NODE_ENV === "development";

module.exports = {
  serverPrefixes: {
    BACKEND_SERVER_PREFIX: DEBUG
      ? "http://localhost:8000"
      : "https://gmsserver.com",
  },
};
