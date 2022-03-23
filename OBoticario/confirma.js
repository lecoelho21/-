function valida(){
    let nome = formulario.nome.value;
    let sobrenome = formulario.sobrenome.value;
    let email = formulario.email.value;
    let mensagem = formulario.mensagem.value;

 
    if (nome == ""){
        alert('Erro no envio: Preencha o campo Nome.');
        formulario.nome.focus();
        return false;
    }
 
    if (sobrenome == ""){
        alert('Erro no envio: Preencha o campo Sobrenome.');
        formulario.nome.focus();
        return false;
    }
 
    if (email == ""){
        alert('Erro no envio: Preencha o campo Email.');
        formulario.email.focus();
        return false;
    }else{
        email = formulario.email.value;

        if (email.indexOf("@") >= 0){
            const fatiaEmail = email.split("@");
    
            let usuario = fatiaEmail[0];
            let fatiaDominio = fatiaEmail[1].split(".com");
            let dominio = fatiaDominio[0];
    
            if (usuario.indexOf("&")>=0 || usuario.indexOf("=")>=0 || usuario.indexOf("%")>=0 || usuario.indexOf("!")>=0 || usuario.indexOf("#")>=0 ||
            usuario.indexOf("'")>=0 || usuario.indexOf("+")>=0 || usuario.indexOf(",")>=0 || usuario.indexOf("!")>=0 ||
            usuario.indexOf("<")>=0 || usuario.indexOf(">")>=0 || usuario.indexOf(" ")>=0 || usuario.indexOf("$")>=0){
                alert('Erro no envio: Endereço de email inválido. O nome de usuário não pode conter caracteres especiais.');
                formulario.email.focus();
                return false;
            }
            
            if(usuario.length > 32){
                alert('Erro no envio: Endereço de email inválido. Não pode ter mais de 32 caracteres.');
                formulario.email.focus(); 
                return false;
            }
            
            if (dominio.indexOf("&")>=0 || dominio.indexOf("=")>=0 || dominio.indexOf("%")>=0 || dominio.indexOf("!")>=0 || dominio.indexOf("#")>=0 ||
            dominio.indexOf("'")>=0 || dominio.indexOf("+")>=0 || dominio.indexOf(",")>=0 || dominio.indexOf("!")>=0 ||
            dominio.indexOf("<")>=0 || dominio.indexOf(">")>=0 || dominio.indexOf(" ")>=0 || dominio.indexOf("$")>=0){
                alert('Erro no envio: Endereço de email inválido. O nome de domínio não pode conter caracteres especiais.');
                formulario.email.focus();
                return false;
            }
            
            if(dominio.length > 16){
                 alert('Erro no envio: Endereço de email inválido. O nome de domínio não pode exceder a quantidade de 16 caracteres.');
                formulario.email.focus();
                return false;
            }
    
        }else{
            alert('Erro no envio: Endereço de email inválido');
            formulario.email.focus();
            return false;
        }
    }

    if (mensagem == ""){
        alert('Erro no envio: Insira uma mensagem.');
        formulario.mensagem.focus();
        return false;
    }

    else{
        alert(`Obrigado pelo contato, ${nome}!`)
        nome = formulario.nome.value="";
        sobrenome = formulario.nome.value="";
        email = formulario.email.value="";
        mensagem = formulario.mensagem.value="";
        return false;
    }

}