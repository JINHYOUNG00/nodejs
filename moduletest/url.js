const myURL = new URL('http://example.org:8080/foo?username=choi#bar');

console.log(myURL);
console.log(myURL.hash);

const params = myURL.searchParams.get('username');

console.log(params)

