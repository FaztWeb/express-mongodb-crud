import { Router } from "express";
import Task from "../model/Task";

const router = Router();

// Render all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
});

router.post("/tasks/add", async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
});

router.get("/tasks/:id/toggleDone", async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
});

router.get("/tasks/:id/edit", async (req, res, next) => {
  const task = await Task.findById(req.params.id).lean();
  res.render("edit", { task });
});

router.post("/tasks/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  await Task.updateOne({ _id: id }, req.body);
  res.redirect("/");
});

router.get("/tasks/:id/delete", async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({ _id: id });
  res.redirect("/");
});

export default router;
