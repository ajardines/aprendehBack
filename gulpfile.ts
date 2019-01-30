import * as gulp from "gulp";

let file = require("gulp-file");
let env = require("./env");

gulp.task("dev", () => {
  let consts = "NODE_ENV=development" + "\n" +
                "SERVERPORT=" + env.dev.SERVERPORT + "\n" +
                "DBCLIENT=" + env.dev.DBCLIENT + "\n" +
                "DBHOST=" + env.dev.DBHOST + "\n" +
                "DBDATABASE=" + env.dev.DBDATABASE + "\n" +
                "DBUSER=" + env.dev.DBUSER + "\n" +
                "DBPASSWORD=" + env.dev.DBPASSWORD + "\n" +
                "DBCHARSET=" + env.dev.DBCHARSET + "\n"

  return file(".env", consts, { src: true })
    .pipe(gulp.dest(""));
});
