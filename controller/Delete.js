import { Person } from "../models/Person.js"

export class DeletePersonController{
    async DeletePerson(req, res) {
        try{
            const id = req.params.id

            await Person.deleteOne({_id: id})

            res.status(200).json({message: "person deleted successfully"})
        }
        catch (error) {
            return res.status(500).json({
              error: error,
              message: 'Error deeleting person'
            })
        }   
    }

    
}