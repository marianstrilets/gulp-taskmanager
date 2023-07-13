// main modul
import gulp from "gulp";

//import of paths
import { path } from "./gulp/config/path.js";

// passing values to global valiable
global.app = {
    path: path,
    gulp: gulp
};

// import of tasks
import { copy } from "./gulp/task/copy.js";

// tasks
gulp.task("default", copy);
