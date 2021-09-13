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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW1haW5pbmdFZGdlcy5qcyJdLCJuYW1lcyI6WyJSZW1haW5pbmdFZGdlcyIsImNvbnN0cnVjdG9yIiwiZWRnZXMiLCJhcmVDeWNsZXNQcmVzZW50IiwiZWRnZXNMZW5ndGgiLCJsZW5ndGgiLCJjeWNsZXNQcmVzZW50IiwiZm9yRWFjaEVkZ2VCeVZlcnRleE5hbWVzIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZWRnZSIsInNvdXJjZVZlcnRleE5hbWUiLCJnZXRTb3VyY2VWZXJ0ZXhOYW1lIiwidGFyZ2V0VmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVTLGNBQWMsaUJBQXBCLFFBQVE7YUFBRixjQUFjLENBQ3JCLEtBQUs7OEJBREUsY0FBYztRQUUvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7O2lCQUZELGNBQWM7O1lBS2pDLEdBQWdCLEdBQWhCLGdCQUFnQjttQkFBaEIsUUFBUSxDQUFSLGdCQUFnQixHQUFHLENBQUM7Z0JBQ2xCLEdBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQy9CLGFBQWEsR0FBSSxXQUFXLEtBQUssQ0FBQztnQkFFeEMsTUFBTSxDQUFDLGFBQWE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBd0IsR0FBeEIsd0JBQXdCO21CQUF4QixRQUFRLENBQVIsd0JBQXdCLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBUCxJQUFJLEVBQUssQ0FBQztvQkFDNUIsR0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsSUFDM0MsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQjtvQkFFakQsUUFBUSxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQjtnQkFDN0MsQ0FBQztZQUNILENBQUM7OztXQW5Ca0IsY0FBYzs7a0JBQWQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1haW5pbmdFZGdlcyB7XG4gIGNvbnN0cnVjdG9yKGVkZ2VzKSB7XG4gICAgdGhpcy5lZGdlcyA9IGVkZ2VzO1xuICB9XG5cbiAgYXJlQ3ljbGVzUHJlc2VudCgpIHtcbiAgICBjb25zdCBlZGdlc0xlbmd0aCA9IHRoaXMuZWRnZXMubGVuZ3RoLFxuICAgICAgICAgIGN5Y2xlc1ByZXNlbnQgPSAoZWRnZXNMZW5ndGggIT09IDApO1xuXG4gICAgcmV0dXJuIGN5Y2xlc1ByZXNlbnQ7XG4gIH1cblxuICBmb3JFYWNoRWRnZUJ5VmVydGV4TmFtZXMoY2FsbGJhY2spIHtcbiAgICB0aGlzLmVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKTtcblxuICAgICAgY2FsbGJhY2soc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==