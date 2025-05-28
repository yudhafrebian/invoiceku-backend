import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Request, Response, NextFunction, Application } from "express";
import UserController from "./controllers/auth.controller";
import AuthRouter from "./routers/auth.router";

const PORT = process.env.PORT || 4000;

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.route();
    this.errorHandler();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private route(): void {
    const authRouter = new AuthRouter()
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).send("BASE API");
    });

    this.app.use("/auth", authRouter.getRouter());
  }

  private errorHandler():void {
    this.app.use((error:any, req:Request, res:Response, next:NextFunction) => {
      console.log(error)
      res.status(500).send({
        success: false,
        message: "Server Error",
        error
      })
    })
  }

  public async start():Promise<void> {
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }


}

export default App;