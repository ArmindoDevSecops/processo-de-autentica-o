import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../../server/api";
import { useRef } from "react";


export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // limpando os campos dos inputs do formulário

    const dataPush = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(dataPush);

    emailRef.current.value = "";
    passwordRef.current.value = "";

    try {
      const {data:token} = await api.post("/login", dataPush);
      console.log(token);
      //salva o token
      localStorage.setItem("token", token.token)
       navigate("/hoome-page")
    } catch (err) {
      console.error("falha ao cadastrar usuário", err);
      alert(err.response?.data?.erro || JSON.stringify(err.response?.data));
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 ">
        login
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email:"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="senha:"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400"
        >
          Cadastrar-se
        </button>
        <Link to="/cadastro" className="text-center text-blue-700 hover:underline mt-4 block">não tem uma conta? cadastra-se</Link>
      </form>
     
    </div>
  );
}
