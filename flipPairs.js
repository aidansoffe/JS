function flipPairs(input) {
  var output = [];
  // input = input.split('');

  // console.log(input);

  for( let i = 0; i < input.length; i+=2) {
    output.push(input[i + 1], input[i]);
  }
  return output.join('');
}


var input = 'check out how interesting this problem is, it\'s insanely interesting!';

flipPairs(input);

=> 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!'
