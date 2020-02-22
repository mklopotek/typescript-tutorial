const four: number = 2 + 2

type Salutation = {greeting: string, name: string}

function greet({greeting, name}: Salutation) {
return `${greeting}, ${name}`
}

const message: string = greet({greeting: 'Hi', name: 'Jarek'})

const input = document.getElementById('input') as HTMLInputElement
input.autofocus = true
input.addEventListener('input', event => {
    const i = event.currentTarget as HTMLInputElement
})

function fill<IDontKnow> (array:any[], value: IDontKnow):IDontKnow[] {
return array.map(() => value)
}
function fill2<T> (array:any[], value: T):T[] {
return array.map(() => value)
}

const result = fill([1,2,3], 'a')
result.map(e => e.toUpperCase)
// result.map(e => e.toFixed) does not exist
const values = fill(['a', 'b', 'c'], 4)
// values.map(e => e.toUpperCase) does not exist
values.map(e => e.toFixed)
