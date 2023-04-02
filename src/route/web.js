import express from "express";
import req from "express/lib/request";

let router = express.Router();

let initWebRouter = (app) => {
    router.get("/", (req, res) => {
        return res.send("hello world")
    })
    return app.use("/", router)
}

module.exports = initWebRouter;