$('#pushme').click(function(){
  console.log('Push push');
  let space = $('#results');
  space.empty(300);
  let url = 'http://localhost:7001/api'
  let single = $('#search').val();
  let fetchContent = {originalUrl: single};
  let fetchOptions = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(fetchContent)
  };
  fetch(url, fetchOptions)
    .then((res) => {
      if (res.status === 200) {
        console.log('200 Ok');
        return res.json();
      } else if (res.status === 401) {
        let caller = 'Invalid url';
        $('#results').addClass('text-warning');
        $('#results').append(caller);
        $('#keeps').removeClass('hidden');
        return console.log('Invalid url');
      }
      let caller = 'Please try again';
      $('#results').addClass('text-warning');
      $('#results').append(call);
      $('#keeps').removeClass('hidden');

      return console.log('Please try again');
    })
    .then((data) => {
      let call = data;
      console.log(call);

      $('#results').addClass('text-success');
      $('#results').append(call);
      $('#keeps').removeClass('hidden');

    return console.log(JSON.stringify(data));
  }).catch((e) => {
    console.log(e);
  })
});
$('#findme').click(function() {
  let space = $('#results');
  space.empty(300);
  let single = $('#search').val();
  let url = `http://localhost:7001/api`
  let fetchContent = {originalUrl: single};
  let fetchOptions = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(fetchContent)
  };

})
