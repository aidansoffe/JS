let data = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown'
}

for (key in data) {
  if (data.hasOwnProperty(key)) {
    console.log(data[key])
  }
}
