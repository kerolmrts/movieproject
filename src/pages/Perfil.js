import React from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Layout from "@/Components/Layout";
import { InputButton } from "@/Components/InputButton";
import { Input } from "@/Components/Input";
import { Avatar } from "@/Components/Avatar";

import { SideBar } from "@/Components/Sidebar";
import { Footer } from "@/Components/Footer";


function Perfil() {
  return (
    <Layout>
      <div className="h-full min-h-screen flex flex-col">
        <div className="flex flex-1">
          <SideBar />
 
              <div className="flex w-full flex-col  mx-5 my-10">
              <h1 className="flex font-semibold text-3xl m-10">Faça login e acesse conteúdos exclusivos </h1>
                     <div className="flex w-full my-10 items-center justify-center">  
                <form>
                  <Avatar srcImage="https://github.com/kerolmrts.png" />

                  <div>
                    <Input placeholder="Nome" type="text" icon={FiUser}/>
                  </div>

                    <div className="flex">
                      <Input placeholder="E-mail" type="text" icon={FiMail} />
                    </div>
                 
                    <div className="flex">
                      <Input
                        placeholder="Senha"
                        type="password"
                        icon={FiLock}
                      />
                    </div>
                   
                  <InputButton
                    title="Salvar"
                   
                  >
                    Salvar
                  </InputButton>
                </form>
                </div>
                </div>
            
              
        
        </div>
      </div>
      <Footer
          />
      </Layout>
  );
}

export default Perfil;
