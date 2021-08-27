import { PersonType } from "./main";


let props: { person: PersonType };

beforeEach(() => {
    props = {
        person: {
            name: 'alex',
            secondName: 'filippov',
            age: 34,
            adress: {
                country: 'russia',
                city: 'volzhsk',
                street: {
                    title: '107 strelkovoi brygady',
                    prefix: 'street',
                },
                houseNumber: {number: 4, litera:2},
                flat: 60
            }
        }
    }
})

test('shold work', () => {
    expect(props.person.age).toBe(34)

})