import "dotenv/config";
import express from "express";
import morgan from "morgan";
import routes from "./Routes";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(morgan("tiny"));
routes(app);

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});

export default app;
