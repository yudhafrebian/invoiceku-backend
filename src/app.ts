import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Request, Response, NextFunction, Application } from "express";

const PORT = process.env.PORT || 4000;

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.route();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private route(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).send("BASE API");
    });
  }

  public async start():Promise<void> {
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}

export default App;