"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var RemainingEdges = /*#__PURE__*/ function() {
    function RemainingEdges(edges) {
        _classCallCheck(this, RemainingEdges);
        this.edges = edges;
    }
    _createClass(RemainingEdges, [
        {
            key: "areCyclesPresent",
            value: function areCyclesPresent() {
                var edgesLength = this.edges.length, cyclesPresent = edgesLength !== 0;
                return cyclesPresent;
            }
        },
        {
            key: "forEachEdgeByVertexNames",
            value: function forEachEdgeByVertexNames(callback) {
                this.edges.forEach(function(edge) {
                    var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName();
                    callback(sourceVertexName, targetVertexName);
                });
            }
        }
    ]);
    return RemainingEdges;
}();
exports.default = RemainingEdges;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1haW5pbmdFZGdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtYWluaW5nRWRnZXMge1xuICBjb25zdHJ1Y3RvcihlZGdlcykge1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7XG4gICAgY29uc3QgZWRnZXNMZW5ndGggPSB0aGlzLmVkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBjeWNsZXNQcmVzZW50ID0gKGVkZ2VzTGVuZ3RoICE9PSAwKTtcblxuICAgIHJldHVybiBjeWNsZXNQcmVzZW50O1xuICB9XG5cbiAgZm9yRWFjaEVkZ2VCeVZlcnRleE5hbWVzKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5lZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXhOYW1lID0gZWRnZS5nZXRUYXJnZXRWZXJ0ZXhOYW1lKCk7XG5cbiAgICAgIGNhbGxiYWNrKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVMsY0FBYzthQUFkLGNBQWMsQ0FDckIsS0FBSzs4QkFERSxjQUFjO2FBRTFCLEtBQUssR0FBRyxLQUFLOztpQkFGRCxjQUFjOztZQUtqQyxHQUFnQixHQUFoQixnQkFBZ0I7NEJBQWhCLGdCQUFnQixHQUFHLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQyxXQUFXLFFBQVEsS0FBSyxDQUFDLE1BQU0sRUFDL0IsYUFBYSxHQUFJLFdBQVcsS0FBSyxDQUFDO3VCQUVqQyxhQUFhO1lBQ3RCLENBQUM7OztZQUVELEdBQXdCLEdBQXhCLHdCQUF3Qjs0QkFBeEIsd0JBQXdCLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQzdCLEtBQUssQ0FBQyxPQUFPLFVBQUUsSUFBSSxFQUFLLENBQUM7b0JBQzVCLEdBQUssQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQzNDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUI7b0JBRWpELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0I7Z0JBQzdDLENBQUM7WUFDSCxDQUFDOzs7V0FuQmtCLGNBQWM7O2tCQUFkLGNBQWMifQ==