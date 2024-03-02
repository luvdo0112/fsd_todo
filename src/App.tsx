import Todo from "./pages/Todo";
import { TodoProvider } from "./shared/context/TodoContext";
import { Layout } from "./widgets";

function App() {
  return (
    <TodoProvider>
      <Layout>
        <Todo />
      </Layout>
    </TodoProvider>
  );
}

export default App;
