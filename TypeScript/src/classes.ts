interface IPerson
{
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}

class Person implements IPerson
{
    readonly id: number;
    protected name: string;
    age: number;

    constructor(id: number, name: string, age: number)
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string
    {
        return this.name;
    }
}

const lucas = new Person(1, "Lucas", 27);
