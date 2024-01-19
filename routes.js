import { CreatePersonController } from "./controller/Create.js";
import { ReadPersonController } from "./controller/Read.js"
import { Router } from "express";
import { UpdatePersonController } from "./controller/Update.js";
import { DeletePersonController } from "./controller/Delete.js";

const router = Router()

const create = new CreatePersonController
const read = new ReadPersonController
const update = new UpdatePersonController
const del = new DeletePersonController

router.post('/create', create.CreatePerson)
router.get("/people", read.Getpeople)
router.get("/person/:id", read.GetPerson)
router.put("/update/:id", update.UpdatePerson)
router.delete("/person/:id", del.DeletePerson)

export {router}