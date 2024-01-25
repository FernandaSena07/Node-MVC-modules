import express from "express";
import { getAllAdms, registerAdm, getAdmsByEmail } from "../controllers/AdmController.js";

const admRoute = express.Router();

admRoute.post("/adm", (req,res)=> {
  const { name, email, password, status } = req.body;
  const newAdm = registerAdm(name, email, password, status);
  res.json({newAdm});
});

admRoute.get("/adms", (req,res)=> {
  const listAdms = getAllAdms();
  res.json(listAdms);
});

admRoute.get("/adm-find", (req,res)=> {
const { email } = req.body;
const adm = getAdmsByEmail(email);
res.json({adm}); 
});


export { admRoute } 