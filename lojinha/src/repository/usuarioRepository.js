import Usuario from '../model/Usuario';

export const createTable = async () => {
    await Usuario.createTable();
};

export const verify = async (usuario, senha, setListaUsuarios, listaUsuarios, navigation) => {
    const novoUsuario = new Usuario({
        usuario: usuario,
        senha: senha,
    });

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (novoUsuario.usuario == listaUsuarios[i].usuario && novoUsuario.senha == listaUsuarios[i].senha) {
            navigation.navigate("Home");
        };
    };
};

export const signUp = async (usuario, senha, setListaUsuarios, listaUsuarios) => {
    let sign = false;
    const novoUsuario = new Usuario({
        usuario: usuario,
        senha: senha,
    });
    novoUsuario.save();
    setListaUsuarios(getAllUsers());

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (novoUsuario.usuario == listaUsuarios[i].usuario && novoUsuario.senha == listaUsuarios[i].senha) {
            sign = true
            break
        } else {
            sign = false
        };
    };

    if (sign == false) {
        return (
            console.log('usuario cadastrado'),
            setListaUsuarios(getAllUsers()))
    } else {
        return (
            console.log('usuario ja cadastrado'));
    }
};

export const getAllUsers = async () => {
    return await Usuario.query();
};