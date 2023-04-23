import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Todo() {
  const [task, setTask] = useState();
  const [dt, setDt] = useState([]);
  const [todo, setTodo] = useState([]);
  const [bj, setBj] = useState({});
  const [comp, setComp] = useState();
  const [tj, setTj] = useState();
  useEffect(() => {
    setDt(task);
    handleGet();
  }, [setDt, task]);

  const addTasks = (e) => {
    let b = e.target.value;
    setTask(b);
  };
  async function handleGet() {
    const noob = await axios.get("/api/get");
    setTodo(noob.data.todos);
  }
  async function handleUpdate() {
    const noob = await axios.post("/api/update", bj);
    handleGet();
  }

  const bb = () => {
    console.log(task);
  };
  const initial = {
    task: dt,
    completed: false,
  };
  const ui = {};
  async function handleCreate() {
    await axios.post("/api/post", initial);
    handleGet();
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Add a Task
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          Added tasks will be shown below
        </Text>
        <FormControl id="email">
          <Input
            placeholder="Add tasks here!"
            _placeholder={{ color: "gray.500" }}
            type="text"
            onChange={(e) => addTasks(e)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleCreate}
          >
            ADD
          </Button>
        </Stack>
        <Stack>
          {todo &&
            todo.map((tod) => (
              <ul key={tod._id}>
                <li style={{ margin: "5px" }}>
                  {tod.task}-{" "}
                  <Badge colorScheme={tod.completed ? "green" : "red"}>
                    {tod.completed ? "completed" : "incomplete"}
                  </Badge>
                  <Button
                    marginX={"5"}
                    size={"sm"}
                    onClick={() => {
                      const gg = {
                        _id: tod._id,
                        task: tod.task,
                        completed: true,
                      };
                      setBj(gg);
                      handleUpdate();
                      setComp(tod.completed);
                      const bh = {
                        _id: tod._id,
                      };
                      setTj(bh);
                    }}
                  >
                    Toggle
                  </Button>
                </li>
              </ul>
            ))}
          <Button
            onClick={() => {
              async function handleDelete() {
                const noob = await axios.post("/api/delete", tj);
                handleGet();
              }
              handleDelete();
              handleGet();
            }}
          >
            {" "}
            Clear All Completed
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
