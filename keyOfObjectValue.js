function keyOfObjectValue(object, target) {
  for (var key in object) {
    if (object[key] === target) {
      return key;
    }
  }
  return -1
}
