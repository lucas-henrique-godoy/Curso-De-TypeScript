//Type
type Order = {
    productId: string;
    price: number;
};

type User = {
    firstame: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[];
};

const user: User = {
    firstame: "Lucas",
    age: 27,
    email: "lucas@email.com",
    password: "12345",
    orders: [{productId: "1", price: 200}]
};



const printLog = (message: string) =>{}

printLog(user.password!)


//Unions
type Author = {
    
}