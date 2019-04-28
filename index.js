const EVALUATE = /<%=\s*\b([^%>]+)\b\s*%>/g;
const ESCAPE = /<%-\s*\b([^%>]+)\b\s*%>/g;
const CONDITION = /<%\s*if\s*\(\s*\b(\w+)\b\s*\)\s*\{\s*%>(.+?)<%\s*\}\s*%>/g;

/**
 * compile template string into string
 * 
 * @param {String} tpl template string
 */
function template(tpl) {
    return function(data) {
        return tpl
            .replace(EVALUATE, function(a, b) {
                return data[b] || ''
            })
            .replace(ESCAPE, function(a, b) {
                return htmlEscape(data[b] || '');
            })
            .replace(CONDITION, function(a, condition, expression) {
                if (data[condition]) {
                    return expression;
                }
                return '';
            })
    }
}

/**
 * convert raw characters into html encoded entities
 * 
 * @param {String} source incoming raw characters
 */
function htmlEscape(source) {
    if (!source) return '';
    return source.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

module.exports = template;