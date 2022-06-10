function printName(u = null){
    if(u && u.name)
        console.log(u.name);
}

const authUser = {
    userId: 1,
    name: 'varsha',
}

printName(authUser);