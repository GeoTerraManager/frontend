import AppRouter from "./routers/navigation";
import "./index.css"
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
    <AppRouter/>
    </AuthProvider>
  );
}

export default App;
