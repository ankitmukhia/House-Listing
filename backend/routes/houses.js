import express from "express";
import { check, validationResult } from "express-validator";
import House from "../models/Schema.js";

const router = express.Router();

const validation = [
  check("title")
    .isLength({ min: 3, max: 50 })
    .withMessage("Title should be between 3 to 50 characters"),
  check("description")
    .isLength({ min: 10, max: 200 })
    .withMessage("Description should be between 10 to 200 characters"),
  check("price").isNumeric().withMessage("Price should be Numeric"),
];

// /api/houses

router.post("/", validation, (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.send({ error: result.array() });
  }

  const house = new House({
    title: req.body.title,
    address: req.body.address,
    homeType: req.body.homeType,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    yearBuilt: req.body.yearBuilt,
  });
  house
    .save()
    .then((result) => {
      res.send({
        message: "House data created successfully",
        data: result,
      });
    })
    .catch((err) => console.log(err));
});

// /api/houses

router.get("/", (req, res) => {
  House.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// /api/houses/id

router.get("/:id", (req, res) => {
  const houseId = req.params.id;

  House.findById(houseId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.put("/:id", validation, (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.send({ error: result.array() });
  }

  const houseId = req.params.id;

  House.findById(houseId)
    .then((result) => {
      result.title = req.body.title;
      result.address = req.body.address;
      result.homeType = req.body.homeType;
      result.description = req.body.description;
      result.price = req.body.price;
      result.image = req.body.image;
      result.yearBuilt = req.body.yearBuilt;

      return result.save();
    })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

// /api/houses/id

router.delete("/:id", (req, res) => {
  const houseId = req.params.id;

  House.findByIdAndRemove(houseId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

export default router;
