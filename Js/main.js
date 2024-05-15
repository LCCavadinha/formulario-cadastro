$(document).ready(function () {
    $('form').on('submit', function(e){
        e.preventDefault();

    })
    $('#cpf').mask('000.000.000-00',{
        placeholder: '000.000.000-00'
    });
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            cidade: {
                required: true
            },
            bairro: {
                required: true
            },
            cep: {
                required: true
            },
            logradouro: {
                required: true
            },
            numero: {
                required: true
            },
            complemento: {
                required: false
            }
        },
        messages: {
            nome: 'Este campo é obrigatório.',
            email: 'Este campo é obrigatório, e-mail incompleto.',
            cpf: 'Este campo é obrigatório, CPF incompleto.',
            telefone: 'Este campo é obrigatório,telefone imcompleto.',
            cidade: 'Este campo é obrigatório.',
            bairro: 'Este campo é obrigatório.',
            cep: 'Este campo é obrigatório, cep incompleto.',
            logradouro: 'Este campo é obrigatório.',
            numero: 'Este campo é obrigatório.'
        },
        submitHandler: function(form){
            form.submit();
            alert('Inscrição feita com sucesso!')
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
