import { useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../server/api";

export default function Cadastro() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    // limpando os campos dos inputs do formulário

    const newdate = {
      nome: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";

    try {
      const dados = await api.post("/cadastrar", newdate);
      console.log(dados);
      alert("usuário cadastrado com sucesso!")
    } catch (err) {
      console.error("falha ao cadastrar usuário", err);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 ">
        Cadastro
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Nome:"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
        />
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
      </form>
      <Link
        to="/"
        className=" text-center text-blue-700 hover:underline mt-4 block"
      >
        já tem uma conta? faça Login
      </Link>
    </div>
  );
}
