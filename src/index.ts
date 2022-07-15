import BandBusiness from "./business/bandBusiness";
import PostBusiness from "./business/PostBusiness";
import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import BandController from "./controller/BandController";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import BandData from "./data/BandData";
import PostData from "./data/PostData";
import UserData from "./data/UserData";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userBusiness = new UserBusiness(
  new UserData(),
  new IdGenerator(),
  new HashManager(),
  new Authenticator()
);

const userController = new UserController(userBusiness);

const postBusiness = new PostBusiness(
  new PostData(),
  new IdGenerator(),
  new Authenticator()
);

const postController = new PostController(postBusiness);


//criação da banda -- início
const bandBusiness = new BandBusiness(
  new BandData(),
  new IdGenerator(),
  new Authenticator()
)

const bandController = new BandController(bandBusiness)

app.post("/band", bandController.addBand)
// -- fim --

app.post("/user/signup", userController.signup);
app.post("/user/login", userController.login);
app.post("/post/create", postController.postCreator);
app.get("/post/list", postController.postList);
app.get("/post/:id", postController.postById);



