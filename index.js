const dataset = `{"2001":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","ananas"],"prix":8.5},"Buratta":{"isClosed":false,"ingredients":["mozzarella","jambon de parme","parmesan","roquette","tomate cerise","burratta","balsamique","huile de truffe","fleur de sel"],"prix":13},"Junior":{"isClosed":false,"ingredients":["tomate", "jambon", "mozzarella"],"prix":6},"Margherita":{"isClosed":false,"ingredients":["tomate","mozzarella","pecorino"],"prix":7.5},"Jambon":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon"],"prix":8},"Champignon":{"isClosed":false,"ingredients":["tomate","mozzarella","champignons"],"prix":8},"Campagnola":{"isClosed":false,"ingredients":["tomate","mozzarella","salami non piquant"],"prix":8},"Bosco":{"isClosed":true,"ingredients":["tomate","mozzarella","champignons","épinards"],"prix":8},"Napolitana":{"isClosed":false,"ingredients":["tomate","mozzarella","anchois"],"prix":8},"Foresta":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","champignons"],"prix":8.5},"Calzone":{"isClosed":true,"ingredients":["tomate","mozzarella","jambon","champignons"],"prix":8.5},"Cacciatore":{"isClosed":false,"ingredients":["tomate","mozzarella","salami piquant"],"prix":8.5},"Bolognese":{"isClosed":false,"ingredients":["tomate","mozzarella","sauce bolognese","pecorino"],"prix":8.5},"Bruschetta":{"isClosed":false,"ingredients":["mozzarella","tomate fraîche","basilic","ail","fromage rapé"],"prix":8.5},"Sole Mio":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","champignons","oeuf"],"prix":9},"Tonnata":{"isClosed":false,"ingredients":["tomate","mozzarella","thon","olives"],"prix":9},"Paesana":{"isClosed":false,"ingredients":["tomate","mozzarella","salami piquant","poivrons"],"prix":9},"Siciliana":{"isClosed":false,"ingredients":["tomate","mozzarella","anchois","olives","câpres"],"prix":9},"Fantasia":{"isClosed":false,"ingredients":["tomate","mozzarella","champignons","jambon","poivrons"],"prix":9},"Estate":{"isClosed":false,"ingredients":["champignons","mozzarella","crème","gorgonzola","parmesan"],"prix":9},"Etna":{"isClosed":false,"ingredients":["tomate","mozzarella","salami piquant","gorgonzola","champignons","oignons"],"prix":9.5},"Dinamite":{"isClosed":false,"ingredients":["tomate","mozzarella","salami piquant","gorgonzola","câpres"],"prix":9.5},"4 fromages":{"isClosed":false,"ingredients":["tomate","mozzarella","gorgonzola","parmesan","pecorino"],"prix":9.5},"4 saisons":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","champignons","artichauts","olives"],"prix":9.5},"Parmiggiana":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","aubergines","parmesan"],"prix":9.5},"Rustica":{"isClosed":false,"ingredients":["tomate","mozzarella","salami non piquant","tomate fraîche","oignons","pecorino"],"prix":9.5},"Exotique":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","gorgonzola","ananas","kiwi"],"prix":9.5},"Del Paese":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","tomate fraîche","pecorino","oignons"],"prix":9.5},"Imperial":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon de Parme","pecorino"],"prix":9.5},"Capricciosa":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","champignons","artichauts","anchois","oeuf"],"prix":10},"Palermitana":{"isClosed":false,"ingredients":["tomate","mozzarella","anchois","oignons","câpres","olives","pecorino"],"prix":10},"Alex":{"isClosed":false,"ingredients":["tomate","mozzarella","gorgonzola","épinards","oignons","champignons","pecorino","oeuf"],"prix":10},"Giardino":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","épinards","oignons","pecorino","merguez","oeuf"],"prix":10},"Caractère":{"isClosed":false,"ingredients":["mozzarella","thon","olives","oignons","aubergines","champignons","ail"],"prix":10},"Azzurra":{"isClosed":false,"ingredients":["tomate","mozzarella","saumon","artichauts","oignons","pecorino"],"prix":10},"Végétarienne":{"isClosed":false,"ingredients":["tomate","mozzarella","olives","aubergines","poivrons","épinards","champignons"],"prix":10},"Carrettino":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","champignons","artichauts","aubergines","épinards","olives"],"prix":10},"Pasta":{"isClosed":false,"ingredients":["tomate","mozzarella","jambon","pâtes Bolognese / pâtes jambon-crème-fromage"],"prix":10.5},"Chèvre":{"isClosed":false,"ingredients":["tomate","mozzarella","chèvre","miel","roquette","noix"],"prix":10.5},"Mediterranea":{"isClosed":false,"ingredients":["mozzarella boufala","champignons","tomate cerise","basilic","parmesan"],"prix":10.5},"Frutti di Mare":{"isClosed":false,"ingredients":["tomate","mozzarella","fruits de mer"],"prix":10.5},"Marina":{"isClosed":false,"ingredients":["tomate","mozzarella","fruits de mer","saumon"],"prix":11},"Royale":{"isClosed":false,"ingredients":["tomate","mozzarella","salami piquant","aubergines","gorgonzola","oignons","wurstel","pecorino"],"prix":11},"Contadina":{"isClosed":false,"ingredients":["tomate","mozzarella","lardons","chèvre","miel","oignons","roquette"],"prix":11.5},"Special":{"isClosed":false,"ingredients":["(avec tout) conseillé pour les gourmands"],"prix":11.5},"Rucola":{"isClosed":false,"ingredients":["mozzarella","roquette","jambon de Parme","parmesan"],"prix":12},"Bresaola":{"isClosed":false,"ingredients":["mozzarella","tomate fraîche","bresaola","roquette","parmesan","pignons de pin","huile d'olive"],"prix":12},"Regina":{"isClosed":false,"ingredients":["mozzarella","ricotta","pesto","bresaola","roquette","tomate cerise","parmesan","olio oliva"],"prix":12}}`;

const pizzas = Object.entries(JSON.parse(dataset))
    .map(([name, pizza]) => ({
        name,
        ...pizza,
        ingredients: pizza.ingredients.map(i => i.toLowerCase()).sort().reverse(),
    }));
const contentDiv = document.querySelector('.content');

const zip = arr => arr[0] ? arr[0].map((_, i) => arr.map(row => row[i])) : arr;
const id = x => x;
const colCreator = (mapper = id) => val => {
    const span = document.createElement('span');
    span.textContent = mapper(val);
    return span;
};

const createRadio = (name, value, checked = false) => {
    const el = document.createElement('input');
    el.type = 'radio';
    el.value = value;
    el.name = name;
    if (checked) {
        el.checked = 'checked';
    }
    return el;
};

const ingredients = [...new Set(pizzas.flatMap(({ingredients}) => ingredients))].sort();
const ingredientsEl = document.querySelector('.ingredients');
ingredients.forEach(ingredient => {
    const el = document.createElement('div');
    const numPizzas = pizzas.filter(pizza => pizza.ingredients.some(ing => ingredient === ing)).length;
    el.textContent = `${ingredient} (${numPizzas})`;
    el.append(...['ignore', 'include', 'exclude'].map((val, i) => createRadio(ingredient, val, i === 0)));
    ingredientsEl.appendChild(el);
});

function render(pizzas) {
    contentDiv.textContent = '';
    const mappers = [
        colCreator(),
        colCreator(val => `${val ? 'Oui' : 'Non'}`),
        colCreator(val => `${val.join(', ')}`),
        colCreator(val => `${val}€`),
    ];
    zip([mappers, zip(pizzas.map(Object.values))]).forEach(([mapper, values = []]) => {
        const col = document.createElement('div');
        col.classList.add('col');
        col.append(...values.map(mapper));
        contentDiv.appendChild(col);
    });
}

render(pizzas);

document.body.addEventListener('change', () => {
    const include = [...document.querySelectorAll('input[type=radio][value=include]:checked')].map(el => el.name);
    const exclude = [...document.querySelectorAll('input[type=radio][value=exclude]:checked')].map(el => el.name);
    const toRender = pizzas.filter(pizza => exclude.every(ingredient => !pizza.ingredients.includes(ingredient)))
        .filter(pizza => !include.length || include.every(ingredient => pizza.ingredients.includes(ingredient)));
    render(toRender);
});

[...document.querySelectorAll('button[data-preset]')].forEach(button => {
    button.addEventListener('click', ev => {
        document.querySelectorAll('input[type=radio][value=ignore]').forEach(el => {
            el.checked = 'checked';
        });
        const selectors = [];
        button.dataset.preset.split(',').forEach(value => {
            if (value.startsWith('!')) {
                selectors.push(`input[type=radio][value=exclude][name="${value.substr(1)}"]`);
            } else {
                selectors.push(`input[type=radio][value=include][name="${value}"]`);
            }
        });
        document.querySelectorAll(selectors.join(',')).forEach(el => {
            el.checked = 'checked';
        });
        document.body.dispatchEvent(new Event('change'));
    });
});
