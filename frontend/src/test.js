import React, { Component } from 'react';

function uploadFile(x) {
  var filename = x.name;
  var fileExtension = filename.split('.').pop();
  fetch('/upics?ext=' + fileExtension,{method: "POST", body: x}) // 
}

class TEST extends Component {
  render() {
    return (
       <input type="file" id="input" onChange={e => uploadFile(e.target.files[0])} /> 

    );
  }
}

export default TEST;