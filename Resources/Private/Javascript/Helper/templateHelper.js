import nunjucks from 'nunjucks';

export const replaceTemplatePlaceholder = (template, data) => {
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
    return env.renderString(template, data);
}