"use client";

import { userCreate } from "@/application/factory/user-factory";
import { UserCreatedDto } from "@/domain/user/user.dto";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Form from "../components/Form";

type SignupProps = {
  isOpen: boolean;
};

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: UserCreatedDto = {
      email,
      password,
      username,
    };

    try {
      const response = await userCreate(user);
      if (response.id) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Created account failed:", error);
      alert("Erro ao criar conta. Verifique suas credenciais.");
    }
  }

  const fields = [
    {
      label: "Email",
      type: "text",
      name: "email",
      value: email,
      onChange: setEmail,
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      value: password,
      onChange: setPassword,
    },
    {
      label: "Username",
      type: "text",
      name: "username",
      value: username,
      onChange: setUsername,
    },
  ];

  return (
    <Form
      title={"Create Account"}
      fields={fields}
      handleSubmit={handleSubmit}
      buttonText="SIGN UP"
      linkText="I already have an account"
      linkHref="#signin"
    />
  );
}
