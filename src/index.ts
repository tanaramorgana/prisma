import express, { Request, Response } from "express";

const app = express();

app.use("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log("A API está rodando!");
});
