const app = require("./src/app");

const PORT = process.env.PORT || 3086;

const server = app.listen(PORT, () => {
  console.log(`run with port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`exit server express`));
});
