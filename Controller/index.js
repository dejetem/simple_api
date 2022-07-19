const Thing = require('../models/index');

class App{
   /** Endpoint To create a new thing */
    createThing = (req, res, next) => {
        const thing = new Thing({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
        });
        thing.save().then(
        () => {
           res.status(201).json({
           message: 'Thing saved successfully!'
        });
    }
    ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
      }
    );
   };
    
   /** Endpoint To get one thing */
    getOneThing = (req, res, next) => {
        Thing.findOne({
           _id: req.params.id
        }).then(
         (thing) => {
           res.status(200).json(thing);
        }
       ).catch(
         (error) => {
           res.status(404).json({
           error: error
        });
       }
      );
    };

    /** Endpoint To update a thing */
    modifyThing = (req, res, next) => {
        const thing = new Thing({
           _id: req.params.id,
           title: req.body.title,
           description: req.body.description,
           price: req.body.price,
        });
        Thing.updateOne({_id: req.params.id}, thing).then(
        () => {
            res.status(201).json({
            message: 'Thing updated successfully!'
          });
        }
        ).catch(
          (error) => {
           res.status(400).json({
           error: error
         });
        }
       );
       };

  /** Endpoint To delete a thing */
    deleteThing = (req, res, next) => {
        Thing.deleteOne({_id: req.params.id}).then(
           () => {
            res.status(200).json({
            message: 'Thing Deleted!'
           });
          }
        ).catch(
          (error) => {
           res.status(400).json({
           error: error
          });
         }
       );
    };
     
    /** Endpoint To get thing */
    getAllThing = (req, res, next) => {
        Thing.find().then(
           (things) => {
               res.status(200).json(things);
        }
        ).catch(
           (error) => {
           res.status(400).json({
               error: error
            });
        }
       );
    };
}

const thingApp = new App()
module.exports = thingApp