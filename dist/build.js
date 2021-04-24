"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var template_1 = require("./template");
var filePath = function (variant, bordered) {
    return path.join(process.cwd(), "/ayu-" + variant + (bordered ? '-bordered' : '') + ".json");
};
['light', 'dark', 'mirage'].map(function (variant) {
    var bordered = JSON.stringify(template_1.default(variant, true), null, '\t');
    var nonBordered = JSON.stringify(template_1.default(variant, false), null, '\t');
    fs.writeFileSync(filePath(variant, true), bordered);
    fs.writeFileSync(filePath(variant, false), nonBordered);
    console.log("Updated " + variant);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYnVpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1QkFBd0I7QUFDeEIsMkJBQTRCO0FBQzVCLHVDQUFpRDtBQUVqRCxJQUFNLFFBQVEsR0FBRyxVQUFDLE9BQWUsRUFBRSxRQUFpQjtJQUNsRCxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLFVBQVEsT0FBTyxJQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQU8sQ0FBQztBQUE5RSxDQUE4RSxDQUUvRTtBQUFBLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxPQUFtQjtJQUNuRCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNwRSxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUV4RSxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDbkQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFBO0lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBVyxPQUFTLENBQUMsQ0FBQTtBQUNuQyxDQUFDLENBQUMsQ0FBQSJ9