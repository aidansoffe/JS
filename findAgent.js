function findAgent(agentList, agentToSearchFor) {
  // if agentToSearchFor is present within agentList
    // return '{agentToSearchFor} is present with Agent list'
    for(var i=0; i<agentList.length; i++){
        if(agentList[i] === agentToSearchFor){
        return agentToSearchFor + " is present within Agent list"
    }
    }
    
}
