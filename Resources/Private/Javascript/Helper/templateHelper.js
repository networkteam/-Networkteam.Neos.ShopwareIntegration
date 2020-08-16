export const getTemplatePlaceholder = (template) => {
    return [...new Set(template.match(/%(.*?)%/g))];
};

export const replaceTemplatePlaceholder = (template, data) => {
    const placeholder = getTemplatePlaceholder(template);
    let regex = []
    let map = {};

    placeholder.forEach((element) => {
        const isCurrency = element.endsWith('->currency%');
        const variable = element.slice(1, isCurrency ? -11 : -1);
        const unformattedValue = getDeepObjectValue(data, variable);
        const value = isCurrency ? currencyFormatter(unformattedValue) : unformattedValue;

        regex.push(element);
        map[element] = value;
    });

    regex = regex.join('|');

    return template.replace(new RegExp(regex, 'g'), (matched) => {
        return map[matched];
    });
}

const getDeepObjectValue = (object, path) => {
    return path.split('.').reduce((segment, value) => {
        return segment[value] === undefined ? path : segment[value]
    }, object);
}

// TODO: get selected currency dynamically
export const currencyFormatter = (number) => {
    return new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2
    }).format(number);
}