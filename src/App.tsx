import useRouter from "./hooks/use-router";
import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

function App() {
  const router = useRouter();
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
