import app from "./app.js";
import config from "./utils/config.js";

app.get("/", (_req, res) => {
  res.send("Project EASE");
});

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
