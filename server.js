import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import { errorHandler, notFoundError } from './middlewares/error-handler.js'
import userRoutes from './routes/user.js';
import CarRoutes from "./routes/car.js";
import PostRoutes from "./routes/post.js";
import ComRoutes from "./routes/commentaire.js";
import like_postRoute from "./routes/like_post.js";
import like_comRoute from "./routes/like_post.js";
import contact from "./routes/contact.js";
import event from "./routes/event.js";





const app = express();

const port = process.env.PORT || 9091;


const database = 'Car_lovers'
mongoose.connect(`mongodb://localhost:27017/${database}`)
    .then(() => console.log("connected"))
    .catch((error) => console.log(error));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // Pour analyser (parsing) les requetes application/json
app.use(express.urlencoded({ extended: true }));
app.use('/img',express.static('public/images/cars'))
app.use('/imgPost',express.static('public/images/posts'))
 


app.use((req, ers, next) => {
    console.log("middleware just ran");
    next();
});

app.use("/gse", (req, ers, next) => {
    console.log("middleware just ran on a gse route");
    next();
});

// préfixe chaque route ici avec /game
app.use('/user', userRoutes); // Utiliser les routes créés
app.use("/car", CarRoutes);
app.use("/post", PostRoutes);
app.use("/com", ComRoutes);
app.use("/likeP", like_postRoute);
app.use("/likeC", like_comRoute);
app.use("/contact", contact);
app.use("/event", event);



app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});