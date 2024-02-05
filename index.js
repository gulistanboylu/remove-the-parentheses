function removeParentheses(s){

    const pharantesies = /\([^()]+\)/
    
    while(s.match(pharantesies)) {
     s = s.replace(pharantesies, '')
    }
    
    return s
  }

module.exports = removeParentheses