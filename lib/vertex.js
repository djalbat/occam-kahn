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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0ZXguanMiXSwibmFtZXMiOlsiVmVydGV4IiwiY29uc3RydWN0b3IiLCJuYW1lIiwiaW5jb21pbmdFZGdlcyIsIm91dGdvaW5nRWRnZXMiLCJnZXROYW1lIiwiZ2V0SW5jb21pbmdFZGdlcyIsImdldE91dGdvaW5nRWRnZXMiLCJpc1N0YXJ0aW5nIiwiaW5jb21pbmdFZGdlc0xlbmd0aCIsImxlbmd0aCIsInN0YXJ0aW5nIiwiYWRkSW5jb21pbmdFZGdlIiwiaW5jb21pbmdFZGdlIiwicHVzaCIsImFkZE91dGdvaW5nRWRnZSIsIm91dGdvaW5nRWRnZSIsInJlbW92ZUluY29taW5nRWRnZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImZvckVhY2hJbmNvbWluZ0VkZ2UiLCJjYWxsYmFjayIsImZvckVhY2giLCJmb3JFYWNoT3V0Z29pbmdFZGdlIiwiZnJvbVZlcnRleE5hbWUiLCJ2ZXJ0ZXhOYW1lIiwidmVydGV4Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUyxNQUFNLGlCQUFaLFFBQVE7YUFBRixNQUFNLENBQ2IsSUFBSSxFQUFFLGFBQWEsRUFBRSxhQUFhOzhCQUQzQixNQUFNO1FBRXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWE7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhOztpQkFKakIsTUFBTTs7WUFPekIsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sR0FBRyxDQUFDO2dCQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNsQixDQUFDOzs7WUFFRCxHQUFnQixHQUFoQixnQkFBZ0I7bUJBQWhCLFFBQVEsQ0FBUixnQkFBZ0IsR0FBRyxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDM0IsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCO21CQUFoQixRQUFRLENBQVIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQzNCLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQy9DLFFBQVEsR0FBSSxtQkFBbUIsS0FBSyxDQUFDLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVqRCxNQUFNLENBQUMsUUFBUTtZQUNqQixDQUFDOzs7WUFFRCxHQUFlLEdBQWYsZUFBZTttQkFBZixRQUFRLENBQVIsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3RDLENBQUM7OztZQUVELEdBQWUsR0FBZixlQUFlO21CQUFmLFFBQVEsQ0FBUixlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDdEMsQ0FBQzs7O1lBRUQsR0FBa0IsR0FBbEIsa0JBQWtCO21CQUFsQixRQUFRLENBQVIsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2hDLEdBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWTtnQkFFckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEMsQ0FBQzs7O1lBRUQsR0FBbUIsR0FBbkIsbUJBQW1CO21CQUFuQixRQUFRLENBQVIsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVE7WUFDckMsQ0FBQzs7O1lBRUQsR0FBbUIsR0FBbkIsbUJBQW1CO21CQUFuQixRQUFRLENBQVIsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVE7WUFDckMsQ0FBQzs7OztZQUVNLEdBQWMsR0FBZCxjQUFjO21CQUFyQixRQUFRLENBQUQsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxHQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsRUFDakIsYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUNsQixhQUFhLEdBQUcsQ0FBQyxDQUFDLEVBQ2xCLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsYUFBYTtnQkFFNUQsTUFBTSxDQUFDLE1BQU07WUFDZixDQUFDOzs7V0F2RGtCLE1BQU07O2tCQUFOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW5jb21pbmdFZGdlcywgb3V0Z29pbmdFZGdlcykge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbmNvbWluZ0VkZ2VzID0gaW5jb21pbmdFZGdlcztcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMgPSBvdXRnb2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SW5jb21pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5pbmNvbWluZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0T3V0Z29pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRnb2luZ0VkZ2VzO1xuICB9XG4gIFxuICBpc1N0YXJ0aW5nKCkge1xuICAgIGNvbnN0IGluY29taW5nRWRnZXNMZW5ndGggPSB0aGlzLmluY29taW5nRWRnZXMubGVuZ3RoLFxuICAgICAgICAgIHN0YXJ0aW5nID0gKGluY29taW5nRWRnZXNMZW5ndGggPT09IDApOyAvLy9cbiAgICBcbiAgICByZXR1cm4gc3RhcnRpbmc7XG4gIH1cbiAgXG4gIGFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpIHtcbiAgICB0aGlzLmluY29taW5nRWRnZXMucHVzaChpbmNvbWluZ0VkZ2UpO1xuICB9XG5cbiAgYWRkT3V0Z29pbmdFZGdlKG91dGdvaW5nRWRnZSkge1xuICAgIHRoaXMub3V0Z29pbmdFZGdlcy5wdXNoKG91dGdvaW5nRWRnZSk7XG4gIH1cblxuICByZW1vdmVJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluY29taW5nRWRnZXMuaW5kZXhPZihpbmNvbWluZ0VkZ2UpO1xuICAgIFxuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgZm9yRWFjaEluY29taW5nRWRnZShjYWxsYmFjaykge1xuICAgIHRoaXMuaW5jb21pbmdFZGdlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hPdXRnb2luZ0VkZ2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLm91dGdvaW5nRWRnZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgaW5jb21pbmdFZGdlcyA9IFtdLFxuICAgICAgICAgIG91dGdvaW5nRWRnZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KG5hbWUsIGluY29taW5nRWRnZXMsIG91dGdvaW5nRWRnZXMpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbn1cbiJdfQ==