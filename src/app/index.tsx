import Todo from "@/pages/Todo";
import { TodoProvider } from "@/shared/context";
import { Layout } from "../widgets";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Layout>
        <Todo />
      </Layout>
    </TodoProvider>
  );
}

export default App;
