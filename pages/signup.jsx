import Signup from "../app/Signup";
import { useRouter } from "next/router";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post("/api/save-data", formData);
      console.log("Dados enviados com sucesso:", response.data);
      router.push("/home");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return <Signup onSubmit={handleSubmit} />;
}