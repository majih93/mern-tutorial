// 모듈 가져오기
const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

// Update matching id goal
router.put("/:id", updateGoal);

// Delete matching id goal
router.delete("/:id", deleteGoal);

module.exports = router;
