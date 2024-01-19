import { Person } from "../models/Person.js"

export class ReadPersonController {

    async Getpeople(req, res){
        try{
            const people = await Person.find()
            res.status(200).json(people)
        }
        catch (error) {
            return res.status(500).json({
              error: error,
              message: 'Error getting people'
            })
        }   
    }

    async GetPerson(req, res){
        try{
            const id = req.params.id

            const person = await Person.findOne({_id: id})

            res.status(200).json(person)
        }
        catch (error) {
            return res.status(500).json({
              error: error,
              message: 'Error getting person'
            })
        }   
    }
}