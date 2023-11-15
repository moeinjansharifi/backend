import express from "express";
import bookingControllers from "../controllers/bookingControllers.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router
  .route("/account/booking")
  .post(protect, bookingControllers.createBooking)
  .get(protect, bookingControllers.getUserBooking);

export default router;
