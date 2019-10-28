function verifyStock(recipeMinimums, stockTomatoes, stockOnions) {
  // if stock of tomatoes and stock of onions are both less than minimum
    // return 'We need more tomatoes and more onions.'
  // otherwise if stock of tomatoes is less than minimum but stock of onions is sufficient
    // return 'We need more tomatoes, but have enough onions.'
  // otherwise if stock of tomatoes is sufficient but stock of onions is less than minimum
    // return 'We have enough tomatoes, but need more onions.'
  // otherwise
    // return 'We have enough tomatoes and onions. There will be {excessTomatoes} extra tomato, and {excessOnions} extra onion.'
     var excessTomatoes = stockTomatoes-recipeMinimums.tomatoes 
     var excessOnions = stockOnions-recipeMinimums.onions
    if(stockTomatoes < recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions){
        return 'We need more tomatoes and more onions.'
    }else if(stockTomatoes < recipeMinimums.tomatoes && stockOnions > recipeMinimums.onions){
        return 'We need more tomatoes, but have enough onions.'
    }else if(stockTomatoes > recipeMinimums.tomatoes && stockOnions < recipeMinimums.onions){
        return 'We have enough tomatoes, but need more onions.'
    }
    return 'We have enough tomatoes and onions. There will be ' + excessTomatoes + ' extra tomato, and ' + excessOnions + ' extra onion.'
}
