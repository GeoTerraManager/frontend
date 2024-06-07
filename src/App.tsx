import AppRouter from "./routers/navigation";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { PageDataProvider } from "./context/PageDataContext";
import ExportButton from "./components/dadosprojeto/dadosCargo/CustomButton";

function App() {
  return (
    <AuthProvider>
      <PageDataProvider>
        
        <AppRouter />
      </PageDataProvider>
    </AuthProvider>
  );
}

export default App;
