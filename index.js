'use strict';

function displayResults(responseJson) {
  $('#results-list').empty();
  for (let i = 0; i < responseJson.length; i++) {
    $('#results-list').append(
      `<li><h3><a href="${responseJson[i].html_url}">${responseJson[i].name}</a></h3>
      </li>`
    )};
  //display the results section  
  $('#results').removeClass('hidden');
};
  
function getRepos() {
  const searchURL = 'https://api.github.com/users/';
  const githubHandle = $('#js-search-term').val();
  const url = searchURL + githubHandle + "/repos";

  fetch(url)
  .then(response => {
      if (response.ok) {
        return response.json();
      }
  })   
  .then(responseJson => displayResults(responseJson))
}
  
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getRepos(); 
  });
}

$(watchForm);