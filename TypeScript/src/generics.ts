const returnValue = <T> (value: T): T => value;

const  message = returnValue<string>("Hello, Wolrd");

const count = returnValue<number>(5);


function getFirtsValueFromArray<Type>(array: Type[])
{
   return array[0];
}

const firtsValueFromStringArray = getFirtsValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirtsValueFromArray<number>([10, 20])


// Promises
const returnPromise = async (): Promise<number> => 
{
    return 5;
}

// Generics com classes
class GenericNumber<T>
{
    zeeroValue: T
    sum: (x: T,y: T) => T;

    constructor(zeroValue: T, sum: (x: T, y: T) => T)
    {
        this.zeeroValue = zeroValue;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) =>
{
    return x + y;
});