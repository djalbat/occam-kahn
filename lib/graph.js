"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _necessary = require("necessary");
var _edge = _interopRequireDefault(require("./edge"));
var _vertex = _interopRequireDefault(require("./vertex"));
var _remainingEdges = _interopRequireDefault(require("./remainingEdges"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var Graph = /*#__PURE__*/ function() {
    function Graph(orderedVertices, remainingEdges) {
        _classCallCheck(this, Graph);
        this.orderedVertices = orderedVertices;
        this.remainingEdges = remainingEdges;
    }
    _createClass(Graph, [
        {
            key: "getOrderedVertices",
            value: function getOrderedVertices() {
                return this.orderedVertices;
            }
        },
        {
            key: "getRemainingEdges",
            value: function getRemainingEdges() {
                return this.remainingEdges;
            }
        },
        {
            key: "areCyclesPresent",
            value: function areCyclesPresent() {
                return this.remainingEdges.areCyclesPresent();
            }
        }
    ], [
        {
            key: "fromVertexLiterals",
            value: function fromVertexLiterals(vertexLiterals) {
                var vertexMap = vertexMapFromVertexLiterals(vertexLiterals), edges = edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap), orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges), remainingEdges = new _remainingEdges.default(edges), graph = new Graph(orderedVertices, remainingEdges);
                return graph;
            }
        },
        {
            key: "fromVertexNamesAndEdges",
            value: function fromVertexNamesAndEdges(vertexNames, edges) {
                edges = edges.slice(); ///
                var vertexMap = vertexMapFromVertexNamesAndEdges(vertexNames, edges), orderedVertices = orderedVerticesFromVertexMapAndEdges(vertexMap, edges), remainingEdges = new _remainingEdges.default(edges), graph = new Graph(orderedVertices, remainingEdges);
                return graph;
            }
        }
    ]);
    return Graph;
}();
exports.default = Graph;
function vertexMapFromVertexNamesAndEdges(vertexNames, edges) {
    var vertexMap = {
    };
    vertexNames.forEach(function(vertexName) {
        var vertexExists = vertexMap.hasOwnProperty(vertexName);
        if (!vertexExists) {
            var vertex = _vertex.default.fromVertexName(vertexName);
            vertexMap[vertexName] = vertex;
        }
    });
    edges.forEach(function(edge) {
        var sourceVertexName = edge.getSourceVertexName(), targetVertexName = edge.getTargetVertexName(), sourceVertexExists = vertexMap.hasOwnProperty(sourceVertexName), targetVertexExists = vertexMap.hasOwnProperty(targetVertexName);
        if (!sourceVertexExists) {
            var sourceVertex = _vertex.default.fromVertexName(sourceVertexName);
            vertexMap[sourceVertexName] = sourceVertex;
        }
        if (!targetVertexExists) {
            var targetVertex = _vertex.default.fromVertexName(targetVertexName);
            vertexMap[targetVertexName] = targetVertex;
        }
        var sourceVertex = vertexMap[sourceVertexName], targetVertex = vertexMap[targetVertexName], incomingEdge = edge, outgoingEdge = edge; ///
        sourceVertex.addOutgoingEdge(outgoingEdge);
        targetVertex.addIncomingEdge(incomingEdge);
    });
    return vertexMap;
}
function vertexMapFromVertexLiterals(vertexLiterals) {
    var vertexMap = {
    };
    vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first(vertexLiteral), vertexName = firstVertexLiteralElement, vertexExists = vertexMap.hasOwnProperty(vertexName);
        if (!vertexExists) {
            var vertex = _vertex.default.fromVertexName(vertexName);
            vertexMap[vertexName] = vertex;
        }
        var secondVertexLiteralElement = second(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement; ///
        ancestorVertexNames.forEach(function(ancestorVertexName) {
            var ancestorVertexExists = vertexMap.hasOwnProperty(ancestorVertexName);
            if (!ancestorVertexExists) {
                var ancestorVertex = _vertex.default.fromVertexName(ancestorVertexName);
                vertexMap[ancestorVertexName] = ancestorVertex;
            }
        });
    });
    return vertexMap;
}
function edgesFromVertexLiteralsAndVertexMap(vertexLiterals, vertexMap) {
    var edges = [];
    vertexLiterals.forEach(function(vertexLiteral) {
        var firstVertexLiteralElement = first(vertexLiteral), secondVertexLiteralElement = second(vertexLiteral), ancestorVertexNames = secondVertexLiteralElement, vertexName = firstVertexLiteralElement; ///
        ancestorVertexNames.forEach(function(ancestorVertexName) {
            var sourceVertexName = ancestorVertexName, targetVertexName = vertexName, sourceVertex = vertexMap[sourceVertexName], targetVertex = vertexMap[targetVertexName], edge = new _edge.default(sourceVertexName, targetVertexName), incomingEdge = edge, outgoingEdge = edge; ///
            edges.push(edge);
            sourceVertex.addOutgoingEdge(outgoingEdge);
            targetVertex.addIncomingEdge(incomingEdge);
        });
    });
    return edges;
}
function orderedVerticesFromVertexMapAndEdges(vertexMap, edges) {
    var orderedVertexNames = [], startingVertexNames = startingVertexNamesFromVertexMap(vertexMap), removedEdges = [];
    var startingVertexNamesLength = startingVertexNames.length;
    while(startingVertexNamesLength > 0){
        var startingVertexName = startingVertexNames.pop(), orderedVertexName = startingVertexName; ///
        orderedVertexNames.push(orderedVertexName);
        backwardsForEach(edges, function(edge, index) {
            var sourceVertexName = edge.getSourceVertexName(), edgeStarting = sourceVertexName === startingVertexName; ///
            if (edgeStarting) {
                edges.splice(index, 1);
                var targetVertexName = edge.getTargetVertexName(), targetVertex = vertexMap[targetVertexName], incomingEdge = edge, removedEdge = edge; ///
                targetVertex.removeIncomingEdge(incomingEdge);
                removedEdges.push(removedEdge);
                var targetVertexStarting = targetVertex.isStarting();
                if (targetVertexStarting) {
                    var startingVertexName = targetVertexName; ///
                    startingVertexNames.push(startingVertexName);
                }
            }
        });
        startingVertexNamesLength = startingVertexNames.length;
    }
    var edgesLength = edges.length;
    if (edgesLength === 0) {
        removedEdges.forEach(function(removedEdge) {
            var targetVertexName = removedEdge.getTargetVertexName(), targetVertex = vertexMap[targetVertexName], incomingEdge = removedEdge; ///
            targetVertex.addIncomingEdge(incomingEdge);
        });
    }
    var orderedVertices = orderedVertexNames.map(function(orderedVertexName) {
        return vertexMap[orderedVertexName];
    });
    return orderedVertices;
}
function startingVertexNamesFromVertexMap(vertexMap) {
    var vertexNames = Object.keys(vertexMap), startingVertexNames = vertexNames.reduce(function(startingVertexNames, vertexName) {
        var vertex = vertexMap[vertexName], vertexStarting = vertex.isStarting();
        if (vertexStarting) {
            var startingVertexName = vertexName; ///
            startingVertexNames.push(startingVertexName);
        }
        return startingVertexNames;
    }, []);
    return startingVertexNames;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ncmFwaC5qcyJdLCJuYW1lcyI6WyJhcnJheVV0aWxpdGllcyIsIkVkZ2UiLCJWZXJ0ZXgiLCJSZW1haW5pbmdFZGdlcyIsImZpcnN0Iiwic2Vjb25kIiwiYmFja3dhcmRzRm9yRWFjaCIsIkdyYXBoIiwiY29uc3RydWN0b3IiLCJvcmRlcmVkVmVydGljZXMiLCJyZW1haW5pbmdFZGdlcyIsImdldE9yZGVyZWRWZXJ0aWNlcyIsImdldFJlbWFpbmluZ0VkZ2VzIiwiYXJlQ3ljbGVzUHJlc2VudCIsImZyb21WZXJ0ZXhMaXRlcmFscyIsInZlcnRleExpdGVyYWxzIiwidmVydGV4TWFwIiwidmVydGV4TWFwRnJvbVZlcnRleExpdGVyYWxzIiwiZWRnZXMiLCJlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFsc0FuZFZlcnRleE1hcCIsIm9yZGVyZWRWZXJ0aWNlc0Zyb21WZXJ0ZXhNYXBBbmRFZGdlcyIsImdyYXBoIiwiZnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJ2ZXJ0ZXhOYW1lcyIsInNsaWNlIiwidmVydGV4TWFwRnJvbVZlcnRleE5hbWVzQW5kRWRnZXMiLCJmb3JFYWNoIiwidmVydGV4TmFtZSIsInZlcnRleEV4aXN0cyIsImhhc093blByb3BlcnR5IiwidmVydGV4IiwiZnJvbVZlcnRleE5hbWUiLCJlZGdlIiwic291cmNlVmVydGV4TmFtZSIsImdldFNvdXJjZVZlcnRleE5hbWUiLCJ0YXJnZXRWZXJ0ZXhOYW1lIiwiZ2V0VGFyZ2V0VmVydGV4TmFtZSIsInNvdXJjZVZlcnRleEV4aXN0cyIsInRhcmdldFZlcnRleEV4aXN0cyIsInNvdXJjZVZlcnRleCIsInRhcmdldFZlcnRleCIsImluY29taW5nRWRnZSIsIm91dGdvaW5nRWRnZSIsImFkZE91dGdvaW5nRWRnZSIsImFkZEluY29taW5nRWRnZSIsInZlcnRleExpdGVyYWwiLCJmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50Iiwic2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQiLCJhbmNlc3RvclZlcnRleE5hbWVzIiwiYW5jZXN0b3JWZXJ0ZXhOYW1lIiwiYW5jZXN0b3JWZXJ0ZXhFeGlzdHMiLCJhbmNlc3RvclZlcnRleCIsInB1c2giLCJvcmRlcmVkVmVydGV4TmFtZXMiLCJzdGFydGluZ1ZlcnRleE5hbWVzIiwic3RhcnRpbmdWZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhNYXAiLCJyZW1vdmVkRWRnZXMiLCJzdGFydGluZ1ZlcnRleE5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwic3RhcnRpbmdWZXJ0ZXhOYW1lIiwicG9wIiwib3JkZXJlZFZlcnRleE5hbWUiLCJpbmRleCIsImVkZ2VTdGFydGluZyIsInNwbGljZSIsInJlbW92ZWRFZGdlIiwicmVtb3ZlSW5jb21pbmdFZGdlIiwidGFyZ2V0VmVydGV4U3RhcnRpbmciLCJpc1N0YXJ0aW5nIiwiZWRnZXNMZW5ndGgiLCJtYXAiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwidmVydGV4U3RhcnRpbmciXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRW1CLEdBQVcsQ0FBWCxVQUFXO0FBRXpCLEdBQVEsQ0FBUixLQUFRO0FBQ04sR0FBVSxDQUFWLE9BQVU7QUFDRixHQUFrQixDQUFsQixlQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxHQUFLLENBQUcsS0FBSyxHQU5rQixVQUFXLGdCQU1sQyxLQUFLLEVBQUUsTUFBTSxHQU5VLFVBQVcsZ0JBTTNCLE1BQU0sRUFBRSxnQkFBZ0IsR0FOUixVQUFXLGdCQU1uQixnQkFBZ0I7SUFFbEIsS0FBSyxpQkFBWCxRQUFRO2FBQUYsS0FBSyxDQUNaLGVBQWUsRUFBRSxjQUFjOzhCQUR4QixLQUFLO1FBRXRCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZTtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7O2lCQUhuQixLQUFLOztZQU14QixHQUFrQixHQUFsQixrQkFBa0I7bUJBQWxCLFFBQVEsQ0FBUixrQkFBa0IsR0FBRyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGVB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QUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRVgsTUFBTSxDQUFDLG1CQUFtQjtBQUM1QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9lZGdlXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuaW1wb3J0IFJlbWFpbmluZ0VkZ2VzIGZyb20gXCIuL3JlbWFpbmluZ0VkZ2VzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoIHtcbiAgY29uc3RydWN0b3Iob3JkZXJlZFZlcnRpY2VzLCByZW1haW5pbmdFZGdlcykge1xuICAgIHRoaXMub3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzO1xuICAgIHRoaXMucmVtYWluaW5nRWRnZXMgPSByZW1haW5pbmdFZGdlcztcbiAgfVxuXG4gIGdldE9yZGVyZWRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcmRlcmVkVmVydGljZXM7XG4gIH1cblxuICBnZXRSZW1haW5pbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmdFZGdlcztcbiAgfVxuXG4gIGFyZUN5Y2xlc1ByZXNlbnQoKSB7IHJldHVybiB0aGlzLnJlbWFpbmluZ0VkZ2VzLmFyZUN5Y2xlc1ByZXNlbnQoKTsgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhNYXAgPSB2ZXJ0ZXhNYXBGcm9tVmVydGV4TGl0ZXJhbHModmVydGV4TGl0ZXJhbHMpLFxuICAgICAgICAgIGVkZ2VzID0gZWRnZXNGcm9tVmVydGV4TGl0ZXJhbHNBbmRWZXJ0ZXhNYXAodmVydGV4TGl0ZXJhbHMsIHZlcnRleE1hcCksXG4gICAgICAgICAgb3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzRnJvbVZlcnRleE1hcEFuZEVkZ2VzKHZlcnRleE1hcCwgZWRnZXMpLFxuICAgICAgICAgIHJlbWFpbmluZ0VkZ2VzID0gbmV3IFJlbWFpbmluZ0VkZ2VzKGVkZ2VzKSxcbiAgICAgICAgICBncmFwaCA9IG5ldyBHcmFwaChvcmRlcmVkVmVydGljZXMsIHJlbWFpbmluZ0VkZ2VzKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgICBlZGdlcyA9IGVkZ2VzLnNsaWNlKCk7ICAvLy9cblxuICAgIGNvbnN0IHZlcnRleE1hcCA9IHZlcnRleE1hcEZyb21WZXJ0ZXhOYW1lc0FuZEVkZ2VzKHZlcnRleE5hbWVzLCBlZGdlcyksXG4gICAgICAgICAgb3JkZXJlZFZlcnRpY2VzID0gb3JkZXJlZFZlcnRpY2VzRnJvbVZlcnRleE1hcEFuZEVkZ2VzKHZlcnRleE1hcCwgZWRnZXMpLFxuICAgICAgICAgIHJlbWFpbmluZ0VkZ2VzID0gbmV3IFJlbWFpbmluZ0VkZ2VzKGVkZ2VzKSxcbiAgICAgICAgICBncmFwaCA9IG5ldyBHcmFwaChvcmRlcmVkVmVydGljZXMsIHJlbWFpbmluZ0VkZ2VzKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJ0ZXhNYXBGcm9tVmVydGV4TmFtZXNBbmRFZGdlcyh2ZXJ0ZXhOYW1lcywgZWRnZXMpIHtcbiAgY29uc3QgdmVydGV4TWFwID0ge307XG5cbiAgdmVydGV4TmFtZXMuZm9yRWFjaCgodmVydGV4TmFtZSkgPT4ge1xuICAgIGNvbnN0IHZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gZWRnZS5nZXRTb3VyY2VWZXJ0ZXhOYW1lKCksXG4gICAgICAgICAgdGFyZ2V0VmVydGV4TmFtZSA9IGVkZ2UuZ2V0VGFyZ2V0VmVydGV4TmFtZSgpLFxuICAgICAgICAgIHNvdXJjZVZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VWZXJ0ZXhOYW1lKSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXhFeGlzdHMgPSB2ZXJ0ZXhNYXAuaGFzT3duUHJvcGVydHkodGFyZ2V0VmVydGV4TmFtZSk7XG5cbiAgICBpZiAoIXNvdXJjZVZlcnRleEV4aXN0cykge1xuICAgICAgY29uc3Qgc291cmNlVmVydGV4ID0gVmVydGV4LmZyb21WZXJ0ZXhOYW1lKHNvdXJjZVZlcnRleE5hbWUpO1xuXG4gICAgICB2ZXJ0ZXhNYXBbc291cmNlVmVydGV4TmFtZV0gPSBzb3VyY2VWZXJ0ZXg7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXRWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgIGNvbnN0IHRhcmdldFZlcnRleCA9IFZlcnRleC5mcm9tVmVydGV4TmFtZSh0YXJnZXRWZXJ0ZXhOYW1lKTtcblxuICAgICAgdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdID0gdGFyZ2V0VmVydGV4O1xuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZVZlcnRleCA9IHZlcnRleE1hcFtzb3VyY2VWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgaW5jb21pbmdFZGdlID0gZWRnZSwgIC8vL1xuICAgICAgICAgIG91dGdvaW5nRWRnZSA9IGVkZ2U7ICAvLy9cblxuICAgIHNvdXJjZVZlcnRleC5hZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKTtcblxuICAgIHRhcmdldFZlcnRleC5hZGRJbmNvbWluZ0VkZ2UoaW5jb21pbmdFZGdlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZlcnRleE1hcDtcbn1cblxuZnVuY3Rpb24gdmVydGV4TWFwRnJvbVZlcnRleExpdGVyYWxzKHZlcnRleExpdGVyYWxzKSB7XG4gIGNvbnN0IHZlcnRleE1hcCA9IHt9O1xuXG4gIHZlcnRleExpdGVyYWxzLmZvckVhY2goKHZlcnRleExpdGVyYWwpID0+IHtcbiAgICBjb25zdCBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50ID0gZmlyc3QodmVydGV4TGl0ZXJhbCksXG4gICAgICAgICAgdmVydGV4TmFtZSA9IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleEV4aXN0cyA9IHZlcnRleE1hcC5oYXNPd25Qcm9wZXJ0eSh2ZXJ0ZXhOYW1lKTtcblxuICAgIGlmICghdmVydGV4RXhpc3RzKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUodmVydGV4TmFtZSk7XG5cbiAgICAgIHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSA9IHZlcnRleDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQ7IC8vL1xuXG4gICAgYW5jZXN0b3JWZXJ0ZXhOYW1lcy5mb3JFYWNoKChhbmNlc3RvclZlcnRleE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGFuY2VzdG9yVmVydGV4RXhpc3RzID0gdmVydGV4TWFwLmhhc093blByb3BlcnR5KGFuY2VzdG9yVmVydGV4TmFtZSk7XG5cbiAgICAgIGlmICghYW5jZXN0b3JWZXJ0ZXhFeGlzdHMpIHtcbiAgICAgICAgY29uc3QgYW5jZXN0b3JWZXJ0ZXggPSBWZXJ0ZXguZnJvbVZlcnRleE5hbWUoYW5jZXN0b3JWZXJ0ZXhOYW1lKTtcblxuICAgICAgICB2ZXJ0ZXhNYXBbYW5jZXN0b3JWZXJ0ZXhOYW1lXSA9IGFuY2VzdG9yVmVydGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gdmVydGV4TWFwO1xufVxuXG5mdW5jdGlvbiBlZGdlc0Zyb21WZXJ0ZXhMaXRlcmFsc0FuZFZlcnRleE1hcCh2ZXJ0ZXhMaXRlcmFscywgdmVydGV4TWFwKSB7XG4gIGNvbnN0IGVkZ2VzID0gW107XG5cbiAgdmVydGV4TGl0ZXJhbHMuZm9yRWFjaCgodmVydGV4TGl0ZXJhbCkgPT4ge1xuICAgIGNvbnN0IGZpcnN0VmVydGV4TGl0ZXJhbEVsZW1lbnQgPSBmaXJzdCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBzZWNvbmRWZXJ0ZXhMaXRlcmFsRWxlbWVudCA9IHNlY29uZCh2ZXJ0ZXhMaXRlcmFsKSxcbiAgICAgICAgICBhbmNlc3RvclZlcnRleE5hbWVzID0gc2Vjb25kVmVydGV4TGl0ZXJhbEVsZW1lbnQsIC8vL1xuICAgICAgICAgIHZlcnRleE5hbWUgPSBmaXJzdFZlcnRleExpdGVyYWxFbGVtZW50OyAvLy9cblxuICAgIGFuY2VzdG9yVmVydGV4TmFtZXMuZm9yRWFjaCgoYW5jZXN0b3JWZXJ0ZXhOYW1lKSA9PiB7XG4gICAgICBjb25zdCBzb3VyY2VWZXJ0ZXhOYW1lID0gYW5jZXN0b3JWZXJ0ZXhOYW1lLCAvLy9cbiAgICAgICAgICAgIHRhcmdldFZlcnRleE5hbWUgPSB2ZXJ0ZXhOYW1lLCAgLy8vXG4gICAgICAgICAgICBzb3VyY2VWZXJ0ZXggPSB2ZXJ0ZXhNYXBbc291cmNlVmVydGV4TmFtZV0sXG4gICAgICAgICAgICB0YXJnZXRWZXJ0ZXggPSB2ZXJ0ZXhNYXBbdGFyZ2V0VmVydGV4TmFtZV0sXG4gICAgICAgICAgICBlZGdlID0gbmV3IEVkZ2Uoc291cmNlVmVydGV4TmFtZSwgdGFyZ2V0VmVydGV4TmFtZSksXG4gICAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSBlZGdlLCAgLy8vXG4gICAgICAgICAgICBvdXRnb2luZ0VkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgIGVkZ2VzLnB1c2goZWRnZSk7XG5cbiAgICAgIHNvdXJjZVZlcnRleC5hZGRPdXRnb2luZ0VkZ2Uob3V0Z29pbmdFZGdlKTtcblxuICAgICAgdGFyZ2V0VmVydGV4LmFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmZ1bmN0aW9uIG9yZGVyZWRWZXJ0aWNlc0Zyb21WZXJ0ZXhNYXBBbmRFZGdlcyh2ZXJ0ZXhNYXAsIGVkZ2VzKSB7XG4gIGNvbnN0IG9yZGVyZWRWZXJ0ZXhOYW1lcyA9IFtdLFxuICAgICAgICBzdGFydGluZ1ZlcnRleE5hbWVzID0gc3RhcnRpbmdWZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhNYXAodmVydGV4TWFwKSxcbiAgICAgICAgcmVtb3ZlZEVkZ2VzID0gW107XG5cbiAgbGV0IHN0YXJ0aW5nVmVydGV4TmFtZXNMZW5ndGggPSBzdGFydGluZ1ZlcnRleE5hbWVzLmxlbmd0aDtcblxuICB3aGlsZSAoc3RhcnRpbmdWZXJ0ZXhOYW1lc0xlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzdGFydGluZ1ZlcnRleE5hbWUgPSBzdGFydGluZ1ZlcnRleE5hbWVzLnBvcCgpLFxuICAgICAgICAgIG9yZGVyZWRWZXJ0ZXhOYW1lID0gc3RhcnRpbmdWZXJ0ZXhOYW1lOyAgLy8vXG5cbiAgICBvcmRlcmVkVmVydGV4TmFtZXMucHVzaChvcmRlcmVkVmVydGV4TmFtZSk7XG5cbiAgICBiYWNrd2FyZHNGb3JFYWNoKGVkZ2VzLCAoZWRnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHNvdXJjZVZlcnRleE5hbWUgPSBlZGdlLmdldFNvdXJjZVZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIGVkZ2VTdGFydGluZyA9IChzb3VyY2VWZXJ0ZXhOYW1lID09PSBzdGFydGluZ1ZlcnRleE5hbWUpOyAvLy9cblxuICAgICAgaWYgKGVkZ2VTdGFydGluZykge1xuICAgICAgICBlZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldFZlcnRleE5hbWUgPSBlZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgICAgdGFyZ2V0VmVydGV4ID0gdmVydGV4TWFwW3RhcmdldFZlcnRleE5hbWVdLFxuICAgICAgICAgICAgICBpbmNvbWluZ0VkZ2UgPSBlZGdlLCAvLy9cbiAgICAgICAgICAgICAgcmVtb3ZlZEVkZ2UgPSBlZGdlOyAgLy8vXG5cbiAgICAgICAgdGFyZ2V0VmVydGV4LnJlbW92ZUluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuXG4gICAgICAgIHJlbW92ZWRFZGdlcy5wdXNoKHJlbW92ZWRFZGdlKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRWZXJ0ZXhTdGFydGluZyA9IHRhcmdldFZlcnRleC5pc1N0YXJ0aW5nKCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFZlcnRleFN0YXJ0aW5nKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRpbmdWZXJ0ZXhOYW1lID0gdGFyZ2V0VmVydGV4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcy5wdXNoKHN0YXJ0aW5nVmVydGV4TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN0YXJ0aW5nVmVydGV4TmFtZXNMZW5ndGggPSBzdGFydGluZ1ZlcnRleE5hbWVzLmxlbmd0aDtcbiAgfVxuXG4gIGNvbnN0IGVkZ2VzTGVuZ3RoID0gZWRnZXMubGVuZ3RoO1xuXG4gIGlmIChlZGdlc0xlbmd0aCA9PT0gMCkge1xuICAgIHJlbW92ZWRFZGdlcy5mb3JFYWNoKChyZW1vdmVkRWRnZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0VmVydGV4TmFtZSA9IHJlbW92ZWRFZGdlLmdldFRhcmdldFZlcnRleE5hbWUoKSxcbiAgICAgICAgICAgIHRhcmdldFZlcnRleCA9IHZlcnRleE1hcFt0YXJnZXRWZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgIGluY29taW5nRWRnZSA9IHJlbW92ZWRFZGdlOyAvLy9cbiAgICAgIFxuICAgICAgdGFyZ2V0VmVydGV4LmFkZEluY29taW5nRWRnZShpbmNvbWluZ0VkZ2UpO1xuICAgIH0pXG4gIH1cblxuICBjb25zdCBvcmRlcmVkVmVydGljZXMgPSBvcmRlcmVkVmVydGV4TmFtZXMubWFwKChvcmRlcmVkVmVydGV4TmFtZSkgPT4gdmVydGV4TWFwW29yZGVyZWRWZXJ0ZXhOYW1lXSk7XG5cbiAgcmV0dXJuIG9yZGVyZWRWZXJ0aWNlcztcbn1cblxuZnVuY3Rpb24gc3RhcnRpbmdWZXJ0ZXhOYW1lc0Zyb21WZXJ0ZXhNYXAodmVydGV4TWFwKSB7XG4gIGNvbnN0IHZlcnRleE5hbWVzID0gT2JqZWN0LmtleXModmVydGV4TWFwKSxcbiAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcyA9IHZlcnRleE5hbWVzLnJlZHVjZSgoc3RhcnRpbmdWZXJ0ZXhOYW1lcywgdmVydGV4TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRleE1hcFt2ZXJ0ZXhOYW1lXSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTdGFydGluZyA9IHZlcnRleC5pc1N0YXJ0aW5nKCk7XG5cbiAgICAgICAgICBpZiAodmVydGV4U3RhcnRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nVmVydGV4TmFtZSA9IHZlcnRleE5hbWU7ICAvLy9cblxuICAgICAgICAgICAgc3RhcnRpbmdWZXJ0ZXhOYW1lcy5wdXNoKHN0YXJ0aW5nVmVydGV4TmFtZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHN0YXJ0aW5nVmVydGV4TmFtZXNcbiAgICAgICAgfSwgW10pO1xuXG4gIHJldHVybiBzdGFydGluZ1ZlcnRleE5hbWVzO1xufVxuIl19