import PostBusiness from "./business/PostBusiness";
import ShowBusiness from "./business/ShowBusiness";
import { UserBusiness } from "./business/UserBusiness";
import { app } from "./controller/app";
import PostController from "./controller/PostController";
import ShowController from "./controller/ShowController";
import UserController from "./controller/UserController";
import PostData from "./data/PostData";
import ShowData from "./data/ShowData";
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


const showBusiness = new ShowBusiness(
  new ShowData(),
  new Authenticator(),
  new IdGenerator()
);
const showController = new ShowController(showBusiness)
app.post("/shows", showController.addShow)






const postBusiness = new PostBusiness(
  new PostData(),
  new IdGenerator(),
  new Authenticator()
);
const postController = new PostController(postBusiness);

app.post("/user/signup", userController.signup);
app.post("/user/login", userController.login);
app.post("/post/create", postController.postCreator);
app.get("/post/list", postController.postList);
app.get("/post/:id", postController.postById);