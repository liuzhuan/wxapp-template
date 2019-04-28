const template = require('./index');

var tpl = 'Hello <%= username %>!';
var data = {
    username: 'Spiderman',
}

print();

tpl = 'Hello <%- token %>!';
data = {
    token: '<img src="a.png">'
}
print();

tpl = '<%- token %> | <%- token %> | <%- token %>'
print();

tpl = '[<% if (token) { %> <%= token %> <% } %>]';
print();

tpl = '<% if (username) { %>Username is <%= username %>. <% } %><% if (token) { %>Token is <%= token %>. <% } %>'
data = {
    token: 'TOKEN'
}
print();

data.username = 'Iron Man';
print();

function print() {
    console.log(template(tpl)(data));
}