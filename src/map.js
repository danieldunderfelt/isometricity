// Map between index and filename
export const IsometricMap = {
  tiles: [
    // "images/dirt.png",
    require("./images/dirtHigh.png"), // 0
    require("./images/grass.png"), // 1
    require("./images/water.png"), // 2
    require("./images/waterBeachCornerEast.png"), // 3
    require("./images/waterBeachCornerNorth.png"), // 4
    require("./images/waterBeachCornerSouth.png"), // 5
    require("./images/waterBeachCornerWest.png"), // 6
    require("./images/waterBeachEast.png"), // 7
    require("./images/waterBeachNorth.png"), // 8
    require("./images/waterBeachSouth.png"), // 9
    require("./images/waterBeachWest.png"), // 10
    require("./images/waterCornerEast.png"), // 11
    require("./images/waterCornerNorth.png"), // 12
    require("./images/waterCornerSouth.png"), // 13
    require("./images/waterCornerWest.png"), // 14
    require("./images/waterEast.png"), // 15
    require("./images/waterNorth.png"), // 16
    require("./images/waterSouth.png"), // 17
    require("./images/waterWest.png"), // 18
    require("./images/bridgeEast.png"), // 19
    require("./images/bridgeNorth.png"), // 20
    require("./images/crossroad.png"), // 21
    // "images/hillCornerEast.png",
    // "images/hillCornerNW.png",
    // "images/hillCornerSE.png",
    // "images/hillCornerWest.png",
    // "images/hillEast.png",
    // "images/hillNorth.png",
    // "images/hillRoadEast.png",
    // "images/hillRoadNorth.png",
    // "images/hillRoadSouth.png",
    // "images/hillRoadWest.png",
    // "images/hillSouth.png",
    // "images/hillWest.png",
    require("./images/lot.png"), // 22
    require("./images/lotCornerEast.png"), // 23
    require("./images/lotCornerNorth.png"), // 24
    require("./images/lotCornerSouth.png"), // 25
    require("./images/lotCornerWest.png"), // 26
    require("./images/lotEast.png"), // 27
    require("./images/lotExitEast.png"), // 28
    require("./images/lotExitNorth.png"), // 29
    require("./images/lotExitSouth.png"), // 30
    require("./images/lotExitWest.png"), // 31
    require("./images/lotNorth.png"), // 32
    require("./images/lotPark.png"), // 33
    require("./images/lotSouth.png"), // 34
    require("./images/lotWest.png"), // 35
    require("./images/roadCornerES.png"), // 36
    require("./images/roadCornerNE.png"), // 37
    require("./images/roadCornerNW.png"), // 38
    require("./images/roadCornerWS.png"), // 39
    require("./images/roadEast.png"), // 40
    require("./images/roadEndEast.png"), // 41
    require("./images/roadEndNorth.png"), // 42
    require("./images/roadEndSouth.png"), // 43
    require("./images/roadEndWest.png"), // 44
    require("./images/roadNorth.png"), // 45
    require("./images/roadTEast.png"), // 46
    require("./images/roadTNorth.png"), // 47
    require("./images/roadTSouth.png"), // 48
    require("./images/roadTWest.png")
  ], // 49
  map: [
    [2, 2, 2, 2, 19, 2, 2, 2, 2, 2],
    [18, 18, 18, 18, 19, 18, 18, 18, 18, 18],
    [1, 0, 1, 0, 40, 0, 1, 0, 1, 0],
    [23, 35, 24, 1, 40, 1, 41, 1, 1, 1],
    [32, 33, 34, 1, 39, 46, 49, 45, 37, 1],
    [32, 33, 30, 45, 45, 49, 45, 45, 38, 1],
    [25, 28, 26, 36, 37, 1, 1, 1, 1, 1],
    [1, 48, 45, 38, 40, 1, 1, 3, 7, 7],
    [1, 40, 1, 1, 40, 1, 1, 9, 2, 2],
    [1, 40, 1, 1, 40, 1, 1, 5, 10, 10]
  ]
};
