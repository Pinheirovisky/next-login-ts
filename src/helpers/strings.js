/**
 * Default polishing when happens on onChange event
 * @param {string} value
 */
const polishingString = (value) => value.split(/\s/g).join('');

export { polishingString };
