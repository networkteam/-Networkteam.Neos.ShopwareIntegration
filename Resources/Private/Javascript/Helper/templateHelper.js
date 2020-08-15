export const getTemplatePlaceholder = (template) => {
    return [...new Set(template.match(/%(.*?)%/g))];
};

export const replaceTemplatePlaceholder = (template, data) => {
    const placeholder = getTemplatePlaceholder(template);
    let regex = []
    let map = {};

    placeholder.forEach((element) => {
        const variable = element.slice(1, -1);
        const value = getDeepObjectValue(data, variable);

        regex.push(element);
        map[element] = value;
    });

    regex = regex.join('|');

    return template.replace(new RegExp(regex, 'g'), (matched) => {
        return map[matched];
    });
}

export const getDeepObjectValue = (object, path) => {
    const pathSegments = path.split('.');
    let current = object;

    pathSegments.forEach((segment) => {
        current = current[segment]; 
    }); 

    return current;
};