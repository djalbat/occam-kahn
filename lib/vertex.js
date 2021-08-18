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
var Vertex = /*#__PURE__*/ function() {
    function Vertex(name, incomingEdges, outgoingEdges) {
        _classCallCheck(this, Vertex);
        this.name = name;
        this.incomingEdges = incomingEdges;
        this.outgoingEdges = outgoingEdges;
    }
    _createClass(Vertex, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getIncomingEdges",
            value: function getIncomingEdges() {
                return this.incomingEdges;
            }
        },
        {
            key: "getOutgoingEdges",
            value: function getOutgoingEdges() {
                return this.outgoingEdges;
            }
        },
        {
            key: "isStarting",
            value: function isStarting() {
                var incomingEdgesLength = this.incomingEdges.length, starting = incomingEdgesLength === 0; ///
                return starting;
            }
        },
        {
            key: "addIncomingEdge",
            value: function addIncomingEdge(incomingEdge) {
                this.incomingEdges.push(incomingEdge);
            }
        },
        {
            key: "addOutgoingEdge",
            value: function addOutgoingEdge(outgoingEdge) {
                this.outgoingEdges.push(outgoingEdge);
            }
        },
        {
            key: "removeIncomingEdge",
            value: function removeIncomingEdge(incomingEdge) {
                var index = this.incomingEdges.indexOf(incomingEdge);
                this.incomingEdges.splice(index, 1);
            }
        },
        {
            key: "forEachIncomingEdge",
            value: function forEachIncomingEdge(callback) {
                this.incomingEdges.forEach(callback);
            }
        },
        {
            key: "forEachOutgoingEdge",
            value: function forEachOutgoingEdge(callback) {
                this.outgoingEdges.forEach(callback);
            }
        }
    ], [
        {
            key: "fromVertexName",
            value: function fromVertexName(vertexName) {
                var name = vertexName, incomingEdges = [], outgoingEdges = [], vertex = new Vertex(name, incomingEdges, outgoingEdges);
                return vertex;
            }
        }
    ]);
    return Vertex;
}();
exports.default = Vertex;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRleCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcyA9IGluY29taW5nRWRnZXM7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzID0gb3V0Z29pbmdFZGdlcztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEluY29taW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5jb21pbmdFZGdlcztcbiAgfVxuXG4gIGdldE91dGdvaW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3V0Z29pbmdFZGdlcztcbiAgfVxuICBcbiAgaXNTdGFydGluZygpIHtcbiAgICBjb25zdCBpbmNvbWluZ0VkZ2VzTGVuZ3RoID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmxlbmd0aCxcbiAgICAgICAgICBzdGFydGluZyA9IChpbmNvbWluZ0VkZ2VzTGVuZ3RoID09PSAwKTsgLy8vXG4gICAgXG4gICAgcmV0dXJuIHN0YXJ0aW5nO1xuICB9XG4gIFxuICBhZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzLnB1c2goaW5jb21pbmdFZGdlKTtcbiAgfVxuXG4gIGFkZE91dGdvaW5nRWRnZShvdXRnb2luZ0VkZ2UpIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMucHVzaChvdXRnb2luZ0VkZ2UpO1xuICB9XG5cbiAgcmVtb3ZlSW5jb21pbmdFZGdlKGluY29taW5nRWRnZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmNvbWluZ0VkZ2VzLmluZGV4T2YoaW5jb21pbmdFZGdlKTtcbiAgICBcbiAgICB0aGlzLmluY29taW5nRWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGZvckVhY2hJbmNvbWluZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoT3V0Z29pbmdFZGdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5vdXRnb2luZ0VkZ2VzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0ZXhOYW1lKHZlcnRleE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmVydGV4TmFtZSwgIC8vL1xuICAgICAgICAgIGluY29taW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICBvdXRnb2luZ0VkZ2VzID0gW10sXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChuYW1lLCBpbmNvbWluZ0VkZ2VzLCBvdXRnb2luZ0VkZ2VzKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVMsTUFBTTthQUFOLE1BQU0sQ0FDYixJQUFJLEVBQUUsYUFBYSxFQUFFLGFBQWE7OEJBRDNCLE1BQU07YUFFbEIsSUFBSSxHQUFHLElBQUk7YUFDWCxhQUFhLEdBQUcsYUFBYTthQUM3QixhQUFhLEdBQUcsYUFBYTs7aUJBSmpCLE1BQU07O1lBT3pCLEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sR0FBRyxDQUFDOzRCQUNHLElBQUk7WUFDbEIsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsR0FBRyxDQUFDOzRCQUNOLGFBQWE7WUFDM0IsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsR0FBRyxDQUFDOzRCQUNOLGFBQWE7WUFDM0IsQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FBSyxDQUFDLG1CQUFtQixRQUFRLGFBQWEsQ0FBQyxNQUFNLEVBQy9DLFFBQVEsR0FBSSxtQkFBbUIsS0FBSyxDQUFDLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3VCQUUxQyxRQUFRO1lBQ2pCLENBQUM7OztZQUVELEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3RDLENBQUM7OztZQUVELEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3RDLENBQUM7OztZQUVELEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2hDLEdBQUssQ0FBQyxLQUFLLFFBQVEsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZO3FCQUVoRCxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BDLENBQUM7OztZQUVELEdBQW1CLEdBQW5CLG1CQUFtQjs0QkFBbkIsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3hCLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUTtZQUNyQyxDQUFDOzs7WUFFRCxHQUFtQixHQUFuQixtQkFBbUI7NEJBQW5CLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN4QixhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVE7WUFDckMsQ0FBQzs7OztZQUVNLEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDakMsR0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLEVBQ2pCLGFBQWEsT0FDYixhQUFhLE9BQ2IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxhQUFhO3VCQUVyRCxNQUFNO1lBQ2YsQ0FBQzs7O1dBdkRrQixNQUFNOztrQkFBTixNQUFNIn0=