import { Person } from "../models/Person.js"

export class UpdatePersonController{
    async UpdatePerson(req, res) {
        try{
            const id = req.params.id;

            const {name, salary, genderIdentity} = req.body;

            const person = {
                name, 
                salary,
                genderIdentity
            }

            const updatedPerson = await Person.updateOne({_id: id}, person)

            res.status(200).json(person)
        }
        catch (error) {
            return res.status(500).json({
              error: error,
              message: 'Error updating Person'
            })
        } 
    }

    
}