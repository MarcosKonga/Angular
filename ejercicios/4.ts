let id:string|number;

function verificarId(id:string|number):string{
    if(typeof id==='number') {
        return 'El ID es un número';
    }else {
        return 'El ID es un string';
    }
}