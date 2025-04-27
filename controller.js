const Model = {
    dados: null,

    cadastrar(dadosVeiculo) {
        this.dados = dadosVeiculo;
    },

    obter() {
        return this.dados;
    },

    remover() {
        this.dados = null;
    }
};

const Controller = {
    init() {
        this.formCadastro = document.getElementById('formCadastro');
        this.botaoCadastrar = document.getElementById('botaoCadastrar');
        this.verLista = document.getElementById('verLista');
        this.removerCadastro = document.getElementById('removerCadastro');
        this.lista = document.getElementById('lista');
        this.conteudoLista = document.getElementById('conteudoLista');

        this.adicionarEventos();
        this.carregarDadosIniciais();
    },

    adicionarEventos() {
        this.formCadastro.addEventListener('submit', (event) => {
            event.preventDefault();
            this.cadastrar();
        });

        this.verLista.addEventListener('click', () => {
            this.exibirLista();
        });

        this.removerCadastro.addEventListener('click', () => {
            this.remover();
        });
    },

    carregarDadosIniciais() {
        const exemplo = {
            placa: 'ABC-1234',
            nome: 'João da Silva',
            ap: '101',
            bloco: 'A',
            modelo: 'Honda Civic',
            cor: 'Preto',
            vaga: '12'
        };
        Model.cadastrar(exemplo);
    },

	cadastrar() {
		const novoCadastro = {
			placa: document.getElementById('placa').value,
			nome: document.getElementById('nome').value,
			ap: document.getElementById('ap').value,
			bloco: document.getElementById('bloco').value,
			modelo: document.getElementById('modelo').value,
			cor: document.getElementById('cor').value,
			vaga: document.getElementById('vaga').value
		};

		console.log('Cadastrado com sucesso!');
		console.log('Informação cadastrada ->');
		console.log('Placa no veículo: ', novoCadastro.placa);
		console.log('Nome do proprietário: ', novoCadastro.nome);
		console.log('Número do apartamento: ', novoCadastro.ap);
		console.log('Bloco do apartamento: ', novoCadastro.bloco);
		console.log('Modelo do veículo: ', novoCadastro.modelo);
		console.log('Cor do veículo: ', novoCadastro.cor);
		console.log('Número da vaga de estacionamento: ', novoCadastro.vaga);
		
        Model.cadastrar(novoCadastro);
        alert('Cadastro realizado com sucesso!');
        this.formCadastro.reset();
    },

    exibirLista() {
        const dados = Model.obter();

        if (dados) {
            this.conteudoLista.innerHTML = `
                <p><strong>Placa:</strong> ${dados.placa}</p>
                <p><strong>Nome do Proprietário:</strong> ${dados.nome}</p>
                <p><strong>Apartamento:</strong> ${dados.ap}</p>
                <p><strong>Bloco:</strong> ${dados.bloco}</p>
                <p><strong>Modelo:</strong> ${dados.modelo}</p>
                <p><strong>Cor:</strong> ${dados.cor}</p>
                <p><strong>Vaga:</strong> ${dados.vaga}</p>
            `;
        } else {
            this.conteudoLista.innerHTML = `<p>Cadastro removido!</p>`;
        }

        this.lista.style.display = 'flex';
    },

    remover() {
        Model.remover();
        this.exibirLista();
    }
};

Controller.init();