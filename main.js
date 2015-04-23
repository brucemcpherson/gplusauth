

function makeApiCall() {
  // Step 4: Load the Google+ API
  gapi.client.load('plus', 'v1').then(function() {
    // Step 5: Assemble the API request
    var request = gapi.client.plus.people.get({
      'userId': 'me'
    });
    // Step 6: Execute the API request
    request.then(function(resp) {
      var heading = document.createElement('h4');
      var image = document.createElement('img');
      image.src = resp.result.image.url;
      heading.appendChild(image);
      heading.appendChild(document.createTextNode(resp.result.displayName));

      document.getElementById('content').appendChild(heading);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  });
}
