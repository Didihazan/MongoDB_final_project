const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phoneController');

router.get("/q1", async (req, res) => {
    try {
      const data = await PhoneModel.find({}).sort({ _id: 1 }).limit(10);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q2", async (req, res) => {
    try {
      const data = await PhoneModel.find({}).sort({ price: -1 }).limit(5);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q3", async (req, res) => {
    try {
      const data = await PhoneModel.find({}).sort({ score: -1 }).skip(3).limit(3);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q4", async (req, res) => {
    try {
      const data = await PhoneModel.findOne({ name: "Mi 10" });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q5", async (req, res) => {
    try {
      const data = await PhoneModel.find({ gpu: /Adreno/ });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q9", async (req, res) => {
    try {
      const count = await PhoneModel.countDocuments({});
      res.json({ count });
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q10", async (req, res) => {
    try {
      const count = await PhoneModel.countDocuments({ cpu: /Qualcomm/ });
      res.json({ count });
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q11", async (req, res) => {
    try {
      const data = await PhoneModel.find({ price: { $gte: 1300, $lte: 2000 } }).limit(4).sort({ price: 1 });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q12", async (req, res) => {
    try {
      const data = await PhoneModel.find({ total_score: { $in: [86, 90, 79] } });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q13", async (req, res) => {
    try {
      const data = await PhoneModel.find({}, { name: 1, total_score: 1 }).sort({ company_id: 1 }).limit(10);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q14", async (req, res) => {
    try {
      const data = await PhoneModel.find({
        $or: [{ battery_score: 76 }, { company_id: 2 }]
      }).sort({ price: -1 });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q15", async (req, res) => {
    try {
      const data = await PhoneModel.find({
        $and: [{ battery_score: 76 }, { company_id: 4 }]
      });
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q16", async (req, res) => {
    try {
      const data = await PhoneModel.aggregate([
        { $group: { _id: "$company_id", count: { $sum: 1 } } }
      ]);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q17", async (req, res) => {
    try {
      const data = await PhoneModel.aggregate([
        { $group: { _id: "$company_id", avgPrice: { $avg: "$price" } } }
      ]);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
  router.get("/q18", async (req, res) => {
    try {
      const data = await PhoneModel.aggregate([
        { $group: { _id: "$company_id", minPrice: { $min: "$price" } } }
      ]);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(502).json({ err });
    }
  });
    
router.get('/q19', async (req, res) => {
    try {
      const phones = await Phone.find().populate('companyId', 'name country');
      res.json(phones);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

router.get('/q20', async (req, res) => {
    try {
      const phones = await Phone.find().sort({ price: -1 }).limit(5).populate('companyId', 'country');
      res.json(phones);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  

module.exports = router;
