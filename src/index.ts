
import { TodoRepo } from './modules/todos/repos/todoRepo';
const { createLocalServer } = require("./server");

export type Context = { todosRepo: TodoRepo }



const server = createLocalServer();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});