import initDB from "../../../helpers/initDB";
import todo from "../../../models/todoModel";

export default async function handler(req, res) {
  await todo.deleteMany({});
}
