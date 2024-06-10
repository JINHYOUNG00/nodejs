let url = `http://localhost:3000/posts`;
const axios = require('axios');
const { resolve } = require('path');

let data = { "id": '4', "title": 'axisdfsdf수정'};
// fetchpost(); // 호이스팅
// axiospost();
// fetchput();
// axiosput();
// fetchdelete();
// axiosdelete();

axiospatch()

//fetch get
function fetchget(){
    fetch(url)
        .then(resolve => resolve.json())
        .then(result => console.log(result));
}

//fetch post
function fetchpost(){
    fetch(url, {
        method: 'post',
        headers : {"content-type" : "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    })
        .then(resolve => resolve.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
}

//fetch put
function fetchput(){
    fetch(url+"/4", {
        method: 'put',
        headers : {"content-type" : "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    })
        .then(resolve => resolve.json())
        .then(result => console.log(result))
        .catch(err => console.log(err))
}

// fetch delete
function fetchdelete(){
    fetch(url+"/12", {
        method: 'delete'
    })
        .then(resolve => resolve.json())
        .then(result => console.log(result));
}

// axios get
function axiosget(){
    axios.get(url)
        .then(res => console.log(res.data));
}

// axios post
function axiospost() {
    axios.post(url, data)
        .then(res => console.log(res.data));
}

// axios put
function axiosput(){
    axios.put(url+"/4", data)
        .then(res => console.log(res.data));
}
// axios patch
function axiospatch(){
    axios.patch(url+"/4", data)
        .then(res => console.log(res.data));
}

// axios delete
function axiosdelete() {
    axios.delete(url+"/12")
        .then(res => console.log(res.data));
}