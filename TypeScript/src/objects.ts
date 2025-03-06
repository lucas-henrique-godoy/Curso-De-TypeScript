//Type
type Order = {
    productId: string;
    price: number;
};

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[],
    register(): string;
};

const user: User = {
    firstName: "Lucas",
    age: 27,
    email: "lucas@email.com",
    password: "12345",
    orders: [{productId: "1", price: 200}],
    register(){
        return 'a';
    }    
};



const printLog = (message: string) =>{};

printLog(user.password!);


// Unions
type Author = {
    livros: string[];
};

const author: Author & User = {
    age: 2,
    livros: ["1"],
    email: "author@gmail.com",
    firstName: "Godoy",
    orders: [],
    register() {
       return 'a'; 
    },
};

//Interfaces
interface UserInterface {
    readonly firstName: string; //readonly é apenas leitura, e não pode modificar o valor
    email: string;
    login(): string;
}

const emailUser: UserInterface = {
    email: "lucas@email.com",
    firstName: "Lucas",
    login(){
        return 'a';
    }
};

interface AuthorInteerface {
    livros: string[]
};

const newAuthor: UserInterface & AuthorInteerface = {
    email: "author@gmail.com",
    firstName: "Lucas",
    livros: [],
    login(){
        return 'a';
    }
};

type Grade = number | string
const grade: Grade = 1;