// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Todo from "../../../components/Todo";
import initDB from "../../../helpers/initDB";
import todo from "../../../models/todoModel";

export default function handler(req, res) {
  console.log(req.body);
  const todos = todo.create(req.body);
  if (!todos) {
    res.status(500);
  }
  res.status(200).json({
    success: true,
    todos,
  });
}
