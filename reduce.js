function extractValue(arr) {
  // console.log(arr)
const names =  arr.reduce((acc, val) => {
    acc.push(val.name)
  return acc;
}, []);
 return names
}

const arrOfObj = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arrOfObj)
