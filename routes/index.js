const express = require('express');
const router = express.Router();
const IndexController = require('../Controller/index')


/**
 * @swagger
 * /api/thing:
 *  get:
 *     tags:
 *     - Get All Thing
 *     description: Display all item that was created
 *     responses:
 *       200:
 *          description: Success
 *       400:
 *          description: Fail
 */
router.get('/', IndexController.getAllThing);

/**
 * @swagger
 * /api/thing:
 *  post:
 *     tags:
 *     - Create A Thing
 *     description: Create a new thing
 *     parameters:
 *      - name: title
 *        description: title of the thing
 *        in: formData
 *        required: true
 *        type: string
 *      - name: price
 *        description: price of the thing
 *        in: formData
 *        required: true
 *        type: number
 *      - name: description
 *        description: description of the thing
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *          description: Success
 *       400:
 *          description: Fail
 */
router.post('/', IndexController.createThing);

/**
 * @swagger
 * /api/thing/{thingId}:
 *  get:
 *     tags:
 *     - Get A Thing
 *     description: To get a single item
 *     parameters:
 *      - name: thingId
 *        in: path
 *        description: The id of the item to be displaed
 *        required: true
 *     responses:
 *       200:
 *          description: Success
 *       404:
 *          description: Fail
 */
router.get('/:id', IndexController.getOneThing);

/**
 * @swagger
 * /api/thing/{thingId}:
 *  put:
 *     tags:
 *     - Update A Thing
 *     description: Update a thing
 *     parameters:
 *      - name: thingId
 *        in: path
 *        description: The id of the item to be update
 *        required: true
 *      - name: title
 *        description: title of the thing to be updated
 *        in: formData
 *        required: true
 *        type: string
 *      - name: price
 *        description: price of the thing to be updated
 *        in: formData
 *        required: true
 *        type: number
 *      - name: description
 *        description: description of the thing to be updated
 *        in: formData
 *        required: true
 *        type: string
 *     responses:
 *       201:
 *          description: Success
 *       400:
 *          description: Fail
 */
router.put('/:id', IndexController.modifyThing);

/**
 * @swagger
 * /api/thing/{thingId}:
 *  delete:
 *     tags:
 *     - Delete A Thing
 *     description: To delete a single item
 *     parameters:
 *      - name: thingId
 *        in: path
 *        description: The id of the item to be deleted
 *        required: true
 *     responses:
 *       200:
 *          description: Success
 *       400:
 *          description: Fail
 */
router.delete('/:id', IndexController.deleteThing);

module.exports = router