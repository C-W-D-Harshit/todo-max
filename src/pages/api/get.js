import Todo from "../../../components/Todo";
import initDB from "../../../helpers/initDB";
import todo from "../../../models/todoModel";

export default async function handler(req, res) {
  const todos = await todo.find();
  if (!todos) {
    res.status(500);
  }
  res.status(200).json({
    todos,
  });
}
