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
var Edge = /*#__PURE__*/ function() {
    function Edge(sourceVertexName, targetVertexName) {
        _classCallCheck(this, Edge);
        this.sourceVertexName = sourceVertexName;
        this.targetVertexName = targetVertexName;
    }
    _createClass(Edge, [
        {
            key: "getSourceVertexName",
            value: function getSourceVertexName() {
                return this.sourceVertexName;
            }
        },
        {
            key: "getTargetVertexName",
            value: function getTargetVertexName() {
                return this.targetVertexName;
            }
        }
    ]);
    return Edge;
}();
exports.default = Edge;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lZGdlLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJjb25zdHJ1Y3RvciIsInNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0U291cmNlVmVydGV4TmFtZSIsImdldFRhcmdldFZlcnRleE5hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVTLElBQUksaUJBQVYsUUFBUTthQUFGLElBQUksQ0FDWCxnQkFBZ0IsRUFBRSxnQkFBZ0I7OEJBRDNCLElBQUk7UUFFckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQjtRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCOztpQkFIdkIsSUFBSTs7WUFNdkIsR0FBbUIsR0FBbkIsbUJBQW1CO21CQUFuQixRQUFRLENBQVIsbUJBQW1CLEdBQUcsQ0FBQztnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDOUIsQ0FBQzs7O1lBRUQsR0FBbUIsR0FBbkIsbUJBQW1CO21CQUFuQixRQUFRLENBQVIsbUJBQW1CLEdBQUcsQ0FBQztnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDOUIsQ0FBQzs7O1dBWmtCLElBQUk7O2tCQUFKLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRnZSB7XG4gIGNvbnN0cnVjdG9yKHNvdXJjZVZlcnRleE5hbWUsIHRhcmdldFZlcnRleE5hbWUpIHtcbiAgICB0aGlzLnNvdXJjZVZlcnRleE5hbWUgPSBzb3VyY2VWZXJ0ZXhOYW1lO1xuICAgIHRoaXMudGFyZ2V0VmVydGV4TmFtZSA9IHRhcmdldFZlcnRleE5hbWU7XG4gIH1cblxuICBnZXRTb3VyY2VWZXJ0ZXhOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVZlcnRleE5hbWU7XG4gIH1cbiAgXG4gIGdldFRhcmdldFZlcnRleE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VmVydGV4TmFtZTtcbiAgfVxufVxuIl19