const router = require('express').Router();
const { getAll, getSingleItem, createItem, deleteItem, updateItem} = require("./funcs");

router.route("/").get(getAll).post(createItem);
router.route("/:id").get(getSingleItem).delete(deleteItem).put(updateItem);

module.exports = router;