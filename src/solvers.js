/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = new Board({'n':n});

  var contains = function(currentRow) {
    if(currentRow === n) {
      return true;
    }

    for(var i = 0; i < n; ++i) {
      //                   row  (y)   column (x)
      solution.togglePiece(currentRow,i);
      if(solution.hasAnyColConflicts(i)) { //failed placement
        solution.togglePiece(currentRow,i);
      } else {
        if(contains(currentRow+1)) {
          return true;
        } else {
          solution.togglePiece(currentRow,i);
        }
      }

    }
    return false;
  };

  contains(0);

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
 var solution = new Board({'n':n});

 //
 var solutionCount = 0;

  var contains = function(currentRow) {
    if(currentRow === n) {
      solutionCount++;
      return true;
    }

    for(var i = 0; i < n; ++i) {
      //                   row  (y)   column (x)
      solution.togglePiece(currentRow,i);
      if(solution.hasAnyColConflicts(i)) { //failed placement
        solution.togglePiece(currentRow,i);
      } else {
        contains(currentRow + 1);
        solution.togglePiece(currentRow,i)
      }

    }
    return false;
  };

  contains(0);

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n':n});

  var contains = function(currentRow) {
    if(currentRow === n) {
      return true;
    }

    for(var i = 0; i < n; ++i) {
      //                   row  (y)   column (x)
      solution.togglePiece(currentRow,i);
      if(solution.hasAnyQueenConflictsOn(currentRow, i)) { //failed placement
        solution.togglePiece(currentRow,i);
      } else {
        if(contains(currentRow+1)) {
          return true;
        } else {
          solution.togglePiece(currentRow,i);
        }
      }

    }
    return false;
  };

  contains(0);

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = new Board({'n':n});

 //
 var solutionCount = 0;

  var contains = function(currentRow) {
    if(currentRow === n) {
      solutionCount++;
      return true;
    }

    for(var i = 0; i < n; ++i) {
      //                   row  (y)   column (x)
      solution.togglePiece(currentRow,i);
      if(solution.hasAnyQueenConflictsOn(currentRow, i)) { //failed placement
        solution.togglePiece(currentRow,i);
      } else {
        contains(currentRow + 1);
        solution.togglePiece(currentRow,i)
      }

    }
    return false;
  };

  contains(0);

  //console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;

};
