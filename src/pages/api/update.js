import initDB from "../../../helpers/initDB";
import todo from "../../../models/todoModel";

export default async function handler(req, res) {
  const tod = await todo.findByIdAndUpdate(req.body._id, req.body);
  res.json({
    todo,
  });
}
