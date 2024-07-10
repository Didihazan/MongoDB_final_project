const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post("/q6", async (req, res) => {
    try {
      const newCompany = new CompanyModel({ id: "5", name: "LG", country: "Korea" });
      await newCompany.save();
      res.json(newCompany);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.put("/q7", async (req, res) => {
    try {
      const updatedCompany = await CompanyModel.findOneAndUpdate({ name: "LG" }, { country: "South Korea" }, { new: true });
      res.json(updatedCompany);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.delete("/q8", async (req, res) => {
    try {
      await CompanyModel.findOneAndDelete({ id: "5" });
      res.json({ message: "Deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });


module.exports = router;
