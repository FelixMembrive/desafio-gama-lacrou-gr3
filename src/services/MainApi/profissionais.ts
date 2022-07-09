import baseApi from "..";

interface PsicologoPayload {
    nome: string,
    email: string,
    regiao_atuacao: string,
    profissao_id: number
    numero_conselho?: string,
    senha?: string,
    
}

export function preCadastroProfissional(payload:PsicologoPayload){
    return baseApi.post("/precadastro", payload);
}

export function listaDeEsperaProfissional(payload:PsicologoPayload){
    return baseApi.post("/precadastro", payload);
}