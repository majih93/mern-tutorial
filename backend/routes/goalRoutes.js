// 모듈 가져오기
const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

// Update matching id goal
router.put("/:id", updateGoal);

// Delete matching id goal
router.delete("/:id", deleteGoal);

module.exports = router;
