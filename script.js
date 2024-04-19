const imagemVisu = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const corProduto = document.getElementById('nome-cor-selecionada');

const miniImagem0 = document.getElementById('0-imagem-miniatura')
const miniImagem1 = document.getElementById('1-imagem-miniatura')
const miniImagem2 = document.getElementById('2-imagem-miniatura')
const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};



const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};


const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};


const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};


const opccores= [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];

const opcoesTamanho = ['41 mm', '45 mm'];


let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let Corselecionada = 1;
function trocarImagem(){
    const idOpcSelecionada = document.querySelector('[name = "opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcSelecionada.charAt(0);
    imagemVisu.src = './imagens/opcoes-cores/' + opccores[Corselecionada].pasta +'/imagem-'+ imagemSelecionada +'.jpeg'
    

}

function trocarTamanho(){
    const idOpcSelecionada = document.querySelector('[name = "opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcSelecionada.charAt(0);
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opccores[Corselecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    if (opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisu.classList.add('caixa-pequena');
    }
    if (opcoesTamanho[tamanhoSelecionado] === '45 mm'){
        imagemVisu.classList.remove('caixa-pequena');
    }


}


function trocarCor(){
    const idOpcSelecionada = document.querySelector('[name = "opcao-cor"]:checked').id;
    Corselecionada = idOpcSelecionada.charAt(0);
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opccores[Corselecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    corProduto.innerText = 'Cor - ' + opccores[Corselecionada].nome 
    imagemVisu.src = './imagens/opcoes-cores/' + opccores[Corselecionada].pasta +'/imagem-'+ imagemSelecionada +'.jpeg'
    miniImagem0.src = './imagens/opcoes-cores/' + opccores[Corselecionada].pasta +'/imagem-'+ 0 +'.jpeg'
    miniImagem1.src = './imagens/opcoes-cores/' + opccores[Corselecionada].pasta +'/imagem-'+ 1 +'.jpeg'
    miniImagem2.src = './imagens/opcoes-cores/' + opccores[Corselecionada].pasta +'/imagem-'+ 2 +'.jpeg'
}