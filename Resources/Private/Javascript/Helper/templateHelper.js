import nunjucks from 'nunjucks';

const env = nunjucks.configure({
    tags: {
        blockStart: '[%',
        blockEnd: '%]',
        variableStart: '[[',
        variableEnd: ']]',
        commentStart: '[#',
        commentEnd: '#]'
    }
});

env.addFilter('currency', (number, locales = 'de-DE', currency = 'EUR') => {
    if(!isNaN(parseFloat(number)) && isFinite(number)) {
        return new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency
        }).format(parseFloat(number))
    } else {
        return number
    }
});

env.addFilter('localDate', (date) => {
    return new Date(date).toLocaleDateString()
});

export const replaceTemplatePlaceholder = (template, data) => {
    return env.renderString(template, data);
}