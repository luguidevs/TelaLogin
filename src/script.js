/* Guardar todos o valor dos inputs */
const usuarios = [
    {
        nome: "Padrao",
        senha: "Padrao"
    },

]
function exibirToast(mensagem, cor) {
    Toastify({
        text: mensagem,
        duration: 3000, // duração em milissegundos
        close: true, // mostra o botão de fechar
        gravity: "top", // "top" ou "bottom"
        position: "center", // "left", "center" ou "right"
        backgroundColor: cor, // cor de fundo
        stopOnFocus: true, // pausa o temporizador quando o toast está em foco
    }).showToast();
}

// Registrar os usuarios
function registrar() {
    const nomeUsuario = document.getElementById('reg-usuario').value.trim()
    const senhaUsuario = document.getElementById('reg-senha').value.trim()
    // Verifique se os inputs estao vazios 
    if (nomeUsuario === '' || senhaUsuario === '') {
        exibirToast("Você deve colocar um nome de usuário e uma senha.", "#FF1000")
        return
    }
    // Verifique se o usuario ja existe
    for (let i = 0; i < usuarios.length; i++) {
        if (nomeUsuario === usuarios[i].nome) {
            exibirToast("Esse usuário já existe!", "#FF1000")
            return
        }
    }
    usuarios.push({ nome: nomeUsuario, senha: senhaUsuario })
    exibirToast("Registrado com sucesso!", "#32CD32")
    console.log(usuarios);
    document.getElementById('reg-usuario').value = ''
    document.getElementById('reg-senha').value = ''
}

function entrar() {
    const nomeUsuario = document.getElementById('usuario').value.trim()
    const senhaUsuario = document.getElementById('senha').value.trim()

    // Verificar se os inputs estao vazios
    if (nomeUsuario === '' || senhaUsuario === '') {
        exibirToast("Você deve colocar um nome de usuário e uma senha.", "#FF1000")
        return
    }
    // Ve se o usuario existe e a senha correta
    let usuarioExiste = false
    for (let i = 0; i < usuarios.length; i++) {
        if (nomeUsuario === usuarios[i].nome) {
            usuarioExiste = true
            if (senhaUsuario === usuarios[i].senha) {
                exibirToast(nomeUsuario + ", seu login foi feito com sucesso", "#32CD32")
            } else {
                exibirToast("Senha incorreta.", "#FF0000")
            }
        }

    }
    document.getElementById('usuario').value = ''
    document.getElementById('senha').value = ''
}
