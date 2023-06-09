import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DivHomeStyled from "../../Styles/DivHome";
import * as yup from "yup";
function CreateClient() {
  const FormSchema = yup.object().shape({
    email: yup.string().required("email obrigatório"),
    fullName: yup.string().required("Nome obrigatório"),
    phone: yup.string.required("telefone obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  return (
    <div>
      <DivHomeStyled>
        <div className="center-square">
          <p>Cadastro Clientes</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(CreateClient)(e);
            }}
          >
            <p>Nome Completo:</p>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              {...register("fullName")}
            />
            {errors.fullName?.message}
            <p>E-mail:</p>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email?.message}
            <p>Telefone:</p>
            <input
              type="phone"
              placeholder="Digite seu telefone"
              {...register("phone")}
            />
            {errors.phone?.message}
            <button type="submit" className="buttonRegister">
              Cadastrar
            </button>
          </form>
        </div>
        <div className="divButtons">
          <button>alterar cadastro cliente</button>
          <button> deletar cliente</button>
          <button>listar todos os clientes</button>
          <p>
            {" "}
            Já é cadastrado? <a href="#">Clique aqui</a>{" "}
          </p>
        </div>
      </DivHomeStyled>
    </div>
  );
}

export default CreateClient;
