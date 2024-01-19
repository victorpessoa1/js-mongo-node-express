import { Person } from "../models/Person.js"

export class CreatePersonController{

    async CreatePerson(req, res) {
        try{
            const {name, salary, genderIdentity} = req.body

            if(!name) {res.status(422).json({message: "Error: missing name"})}

            const person = {
                name, 
                salary,
                genderIdentity
            }

            await Person.create(person)

            res.status(201).json({message: "Created person"})
        }
        catch (error) {
            return res.status(500).json({
              error: error,
              message: 'Error creating Person'
            })
        }  
    }
    
}