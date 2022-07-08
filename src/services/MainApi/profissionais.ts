import baseApi from "..";

interface PsicologoPayload {
    nome: string,
    email: string,
    numero_conselho: string,
    senha: string,
    regiao_atuacao: string,
    profissao_id: number
}

export function preCadastroProfissional(payload:PsicologoPayload){
    return baseApi.post("/precadastro", payload);
}