// Desenvolver calculadora de Idade, utilizando template disponibilizado

// Algoritimo

// 1. Pegar os valores
// 2. Calcular a Idade
//       a. Com base no ano
//       b. Com mês (EXTRA)
//       c. Com dia (EXTRA)

// 3. Gerar a faixa etária

//     Resultado           Faixa
//     0 à 12              Criança
//     13 à 17             Adolescente
//     18 à 65             Adulto
//     Acima de 65         Idoso

// 4. Organizar o objeto pessoa para salvar na lista
// 5. Cadastrar a pessoa na lista
// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
// 7. Renderizar o conteúdo da tabela com as pessoas cadastradas
// 8. Botão para limpar os registros;



// Alocar Funções
// function calcularIdade(event) {
//  event.preventDefault()

//      console.log("Funciona");

//      calcularIdade()

//      let dadosUsuario = calcularIdade();

//      let idade = calcular(dadosUsuario.ano);

//      let classificacao = gerarFaixaEtaria(idade);

//  }

////////////RASCUNHO/////////////

//  // 1. Pegar valor 
// function calcularIdade() {
//     let anoRecebido = parseInt(document.getElementById("ano").value);
//      //let diaRecebido = parseInt(document.getElementById("dia").value);
//      // let mesRecebido =parseInt(document.getElementById("mes").value);


//     let dadosUsuario = {
//        // dia: diaRecebido,
//        // mes: mesRecebido,
//         ano: anoRecebido,

//     }


//     let dataNascimento = new Date(ano, mes - 1, dia);
//     let dataAtual = new Date();


//     let diff = dataAtual.getTime() - dataNascimento.getTime();
//     let idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

//     document.getElementById("resultado").innerText = `Idade: ${idade} anos`;

//     // Chamar função para gerar a faixa etária e salvar na lista (passo 3 e 4)
//     gerarFaixaEtaria(idade);

//     console.log(dadosUsuario);

//     return dadosUsuario;
// }

// // 2. Calcular a Idade

//  //function calcular(ano) {


//     //} 

//     function gerarFaixaEtaria(idade) {
//         let faixa;
//         if (idade >= 0 && idade <= 12) {
//             faixa = "Criança";
//         } else if (idade >= 13 && idade <= 17) {
//             faixa = "Adolescente";
//         } else if (idade >= 18 && idade <= 65) {
//             faixa = "Adulto";
//         } else {
//             faixa = "Idoso";
//         }
//     }






// COMECO
// funcao principal

//function calcularIdade(event) {
// event.preventDefault()
//    console.log("Funcionar");

//     pegarValores();

//     let dadosUsuario = pegarValores ();

//     let ano = calcular(dadosUsuario.nome, dadosUsuario.ano);

//   let classificacao = ClassificarFaixaEtaria(idade);


//}





// 1. Pegar os valores
// 1. Pegar os valores


//function pegarValores() {
//    let nomeRecebido = document.getElementById("nome").value.trim();
//    let anoRecebido = parseFloat(document.getElementById("ano").value);
//let mesRecebido = parseFloat(document.getElementById("mes").value);
//let diaRecebido = parseFloat(document.getElementById("dia").value);  

//    let dadosUsuario = {
//        nome: nomeRecebido,
//        ano: anoRecebido,

//    }

//   console.log(dadosUsuario);

//   return dadosUsuario;
//}


// 2. Calcular a Idade
// 2. Calcular a Idade

// function calcular(ano) {
//     return new Date().getFullYear() - ano;

//     console.log(ano);
// }

// 3. Gerar a faixa etária
// 3. Gerar a faixa etária



//  function ClassificarFaixaEtaria(idade) {
//      let faixa;
//      if (idade >= 0 && idade <= 12) {
//          faixa = "Criança";
//      } else if (idade >= 13 && idade <= 17) {
//          faixa = "Adolescente";
//     } else if (idade >= 18 && idade <= 65) {
//          faixa = "Adulto";
//      } else {
//          faixa = "Idoso";
//      }
//  }




//  function organizarDados(dadosUsuario, ClassificarFaixaEtaria, ClassificarFaixaEtaria) {
//     let dataHoraAtual = Intl.DateTimeFormat('pt-BR', {timeStyle: 'long', dateStyle: 
//     'short'}).format(Date.now());

//     let dadosUsuarioAtualizado ={
//       ...dadosUsuario,
//       imc: valorImc.toFixed(2),
//       classificacao: ClassificarFaixaEtaria,
//       dataCadastro: dataHoraAtual
//     }

//     console.log( dadosUsuarioAtualizado);

//     return dadosUsuarioAtualizado

//   }

////////////RASCUNHO/////////////



///CODE///    

/// 1 Função principal

function calcularIdade(event) {
   // event.preventDefault()

    console.log("Funciona");

    pegarValores();

    let dadosUsuario = pegarValores();

    let idade = calcular(dadosUsuario.ano)

    let classificacao = classificarIdade(idade);

    console.log(classificarIdade(idade));

    let UsuarioAtualizado = organizarDados(dadosUsuario, classificacao, idade)

    // let classificarIdade = classificarIdade(idade);

    // console.log(classificar_Idade);

    cadastrarUsuario(UsuarioAtualizado);

}




/// 1 Pegar valor

function pegarValores() {
    let nomeRecebido = document.getElementById("nome").value.trim();
    let dataRecebida = parseFloat(document.getElementById("dianascimento").value);
    let mesRecebida = parseFloat(document.getElementById("mesnascimento").value);
    let anoRecebido = parseFloat(document.getElementById("anonascimento").value);


    let dadosUsuario = {
        nome: nomeRecebido,
        dia: dataRecebida,
        mes: mesRecebida,
        ano: anoRecebido,

    }

    console.log(dadosUsuario);

    return dadosUsuario;

}




/// 2 Calcular



function calcular(anonascimento) {
    let idade = (new Date().getFullYear()) - anonascimento

    console.log(idade);

    return idade;

}



/// 3 Classificar - rascunho

//  function classificarIdade(idade) {

//     if (idade <= 12 ) {
//       return "Criança";
//     }
//     else if (idade < 17 ){
//         return "Adolescente";
//     }
//     else if (idade < 65 ){
//         return "Adulto";
//     }
//     else{
//         return "idoso";
//     }

// }


/// 3 Classificar


function classificarIdade(idade) {


    if (idade >= 0 && idade <= 12) {
        return "Criança";
    } else if (idade >= 13 && idade <= 17) {
        return "Adolescente";
    } else if (idade >= 18 && idade <= 65) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

/// 4. Organizar o objeto pessoa para salvar na lista

function organizarDados(dadosUsuario, classificarIdade, idade) {
    let dataUsuario = Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'long', dateStyle:
            'short'
    }).format(Date.now());

    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        classificacao: classificarIdade,
        idade: idade,
        datacadastro: dataUsuario,
    }

    console.log(dadosUsuarioAtualizado);

    return dadosUsuarioAtualizado

}


/// 5  Cadastrar a pessoa na lista


function cadastrarUsuario(usuario) {
    let listaUsuarios = [];


    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    listaUsuarios.push(usuario)
    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))

}

/// 6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página



function carregarUsuarios() {
    let listaUsuarios = [];
  
    if (localStorage.getItem("usuariosCadastrados") ) {
      listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }
  
  
  
  if (listaUsuarios.length == 0 ) {
    let tabela = document.getElementById("corpo-tabela");
  
    tabela.innerHTML = `<tr class="corpo-tabela">
    <td colspan="6">
        Nenhum usuario cadastrado !
    </td>
    </tr>`
  }else{
    montarTabela(listaUsuarios)
  }
  
  }


  window.addEventListener('DOMContentLoaded', () => carregarUsuarios())



  /// 7 Renderizar o conteúdo da tabela com as pessoas cadastradas



  function montarTabela(listaDeCadastrados) {
    let tabela = document.getElementById("corpo-tabela");
  
    let template = '';
  
    listaDeCadastrados.forEach(pessoa => {
     template += 
      `<tr>
         <td data-cell="nome">${pessoa.nome}</td>
         <td data-cell="data de nascimento">${pessoa.ano }</td>
         <td data-cell="idade">${pessoa.idade}</td>
         <td data-cell="faixa etaria">${pessoa.classificacao}</td>
     </tr>`  
    });
  
    tabela.innerHTML = template;
  
  
  
  }

  /// 8  Botão para limpar os registros;

  function deletarRegistros() {
    localStorage.removeItem("usuariosCadastrados")
    window.location.reload();
  
  }