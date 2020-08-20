export const debounce = (callback, wait) => {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}

export const formatCurrency = (number, locales = 'de-DE', currency = 'EUR') => {
    return new Intl.NumberFormat(locales, {
        style: 'currency',
        currency: currency
    }).format(number)
}

export const formatLocalDate = (date) => {
    return new Date(date).toLocaleDateString()
}

export const classList = (classes) => {
    return Object
        .entries(classes)
        .filter(entry => entry[1])
        .map(entry => entry[0])
        .join(' ');
}

export const fireEvent = (name) => {
    document.dispatchEvent(new Event(name));
}