"use strict";
var _index ///
 = require("./index");
var graph = _index.Graph.fromVertexLiterals([
    [
        "a",
        [
            "b"
        ]
    ],
    [
        "b",
        [
            "c"
        ]
    ],
    [
        "d",
        [
            "c"
        ]
    ],
    [
        "e",
        []
    ],
    [
        "f",
        [
            "g"
        ]
    ],
    [
        "h",
        [
            "g"
        ]
    ]
]);
var cyclesPresent = graph.areCyclesPresent(), remainingEdges = graph.getRemainingEdges(), orderedVertices = graph.getOrderedVertices();
debugger;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCIuL2luZGV4XCIgLy8vXG5cbmNvbnN0IGdyYXBoID0gR3JhcGguZnJvbVZlcnRleExpdGVyYWxzKFtcblxuICBbXCJhXCIsIFtcImJcIl1dLFxuICBbXCJiXCIsIFtcImNcIl1dLFxuICBbXCJkXCIsIFtcImNcIl1dLFxuICBbXCJlXCIsIFtdXSxcbiAgW1wiZlwiLCBbXCJnXCJdXSxcbiAgW1wiaFwiLCBbXCJnXCJdXVxuXG5dKTtcblxuY29uc3QgY3ljbGVzUHJlc2VudCA9IGdyYXBoLmFyZUN5Y2xlc1ByZXNlbnQoKSxcbiAgICAgIHJlbWFpbmluZ0VkZ2VzID0gZ3JhcGguZ2V0UmVtYWluaW5nRWRnZXMoKSxcbiAgICAgIG9yZGVyZWRWZXJ0aWNlcyA9IGdyYXBoLmdldE9yZGVyZWRWZXJ0aWNlcygpO1xuXG5kZWJ1Z2dlclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7QUFFVSxHQUFTLENBQVQsTUFBUyxBQUFDLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7QUFFbkMsR0FBSyxDQUFDLEtBQUssR0FGVyxNQUFTLE9BRVgsa0JBQWtCOztTQUVuQyxDQUFHOzthQUFHLENBQUc7Ozs7U0FDVCxDQUFHOzthQUFHLENBQUc7Ozs7U0FDVCxDQUFHOzthQUFHLENBQUc7Ozs7U0FDVCxDQUFHOzs7O1NBQ0gsQ0FBRzs7YUFBRyxDQUFHOzs7O1NBQ1QsQ0FBRzs7YUFBRyxDQUFHOzs7O0FBSVosR0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLElBQ3RDLGNBQWMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLElBQ3hDLGVBQWUsR0FBRyxLQUFLLENBQUMsa0JBQWtCIn0=