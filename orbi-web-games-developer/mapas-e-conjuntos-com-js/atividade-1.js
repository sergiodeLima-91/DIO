// MAPS
// Crie uma função que retorna o nome dos membros de uma Map que tem o papel 'ADMIN' no sistema.
// 1. Crie uma função getAdmins que recebe um Map
// 2. Crie um e popule-o com nomes de usuários e seus papéis no sistema (Ex: Luiz => 'Admin')
// 3. Dentro de getAdmins utilize o looop for...of para retornar uma lista com os nomes dos usuários que são administradores.

function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}


const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios))