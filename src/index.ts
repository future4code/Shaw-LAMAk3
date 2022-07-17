import BandBusiness from "./business/BandBusiness";
import ShowBusiness from "./business/ShowBusiness";
import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import BandController from "./controller/BandController";
import ShowController from "./controller/ShowController";
import UserController from "./controller/UserController";
import BandData from "./data/BandData";
import ShowData from "./data/ShowData";
import UserData from "./data/UserData";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/idGenerator";

const userBusiness = new UserBusiness(
  new UserData(),
  new IdGenerator(),
  new HashManager(),
  new Authenticator()
);
const userController = new UserController(userBusiness);

const showBusiness = new ShowBusiness(
  new ShowData(),
  new Authenticator(),
  new IdGenerator()
);
const showController = new ShowController(showBusiness);

const bandBusiness = new BandBusiness(
  new BandData(),
  new IdGenerator(),
  new Authenticator()
);
const bandController = new BandController(bandBusiness);

app.post("/user/signup", userController.signup);
app.post("/user/login", userController.login);
app.post("/shows", showController.addShow);
app.post("/band", bandController.addBand);
app.get("/shows", showController.getShowByDate);
app.get("/banda/:id", bandController.getBand);
