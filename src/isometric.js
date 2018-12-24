import { IsometricMap } from './map'

// A simple isometric tile renderer
const Isometric = {
  tileColumnOffset: 100, // pixels
  tileRowOffset: 50, // pixels

  originX: 0, // offset from left
  originY: 0, // offset from top

  Xtiles: 0, // Number of tiles in X-dimension
  Ytiles: 0, // Number of tiles in Y-dimension

  selectedTileX: -1,
  selectedTileY: -1,

  context: undefined,
  canvas: undefined,

  tileImages: undefined,

  showCoordinates: false,

  load: function() {
    this.tileImages = []
    let loadedImages = 0
    let totalImages = IsometricMap.tiles.length

    // Load all the images before we run the app
    let self = this
    for (let i = 0; i < IsometricMap.tiles.length; i++) {
      this.tileImages[i] = new Image()
      this.tileImages[i].onload = function() {
        if (++loadedImages >= totalImages) {
          self.run()
        }
      }
      this.tileImages[i].src = IsometricMap.tiles[i]
    }
  },

  run: function() {
    this.canvas = document.getElementById('isocanvas')
    this.context = this.canvas.getContext('2d')

    this.Xtiles = IsometricMap.map.length
    this.Ytiles = IsometricMap.map.length

    let self = this

    window.addEventListener('resize', function() {
      self.updateCanvasSize()
      self.redrawTiles()
    })

    document.body.addEventListener('mousemove', function(e) {
      console.dir(e)

      let pageX = e.pageX - self.tileColumnOffset / 2 - self.originX
      let pageY = e.pageY - self.tileRowOffset / 2 - self.originY

      const tileX = Math.round(
        pageX / self.tileColumnOffset - pageY / self.tileRowOffset,
      )

      const tileY = Math.round(
        pageX / self.tileColumnOffset + pageY / self.tileRowOffset,
      )

      self.selectedTileX = tileX
      self.selectedTileY = tileY
      self.redrawTiles()
    })

    document.body.addEventListener('click', function() {
      self.showCoordinates = !self.showCoordinates
      self.redrawTiles()
    })

    this.updateCanvasSize()
    this.redrawTiles()
  },

  updateCanvasSize: function() {
    const width = window.innerWidth
    const height = window.innerHeight

    this.context.canvas.width = width
    this.context.canvas.height = height

    this.originX = width / 2 - (this.Xtiles * this.tileColumnOffset) / 2
    this.originY = height / 2
  },

  redrawTiles: function() {
    this.context.canvas.width = this.context.canvas.width

    for (let Xi = this.Xtiles - 1; Xi >= 0; Xi--) {
      for (let Yi = 0; Yi < this.Ytiles; Yi++) {
        this.drawTile(Xi, Yi)
      }
    }

    this.drawDiamond(this.selectedTileX, this.selectedTileY, 'yellow')

    if (this.showCoordinates && this.isCursorOnMap()) {
      this.context.fillStyle = 'yellow'
      const idx = IsometricMap.map[this.selectedTileX][this.selectedTileY]
      this.context.font = '14pt Arial'
      this.context.fillText(
        IsometricMap.tiles[idx].replace('/assets/tiles/', ''),
        20,
        30,
      )
    }
  },

  isCursorOnMap: function() {
    return (
      this.selectedTileX >= 0 &&
      this.selectedTileX < this.Xtiles &&
      this.selectedTileY >= 0 &&
      this.selectedTileY < this.Ytiles
    )
  },

  drawTile: function(Xi, Yi) {
    let offX =
      (Xi * this.tileColumnOffset) / 2 +
      (Yi * this.tileColumnOffset) / 2 +
      this.originX
    let offY =
      (Yi * this.tileRowOffset) / 2 - (Xi * this.tileRowOffset) / 2 + this.originY

    let imageIndex = IsometricMap.map[Xi][Yi]
    this.context.drawImage(this.tileImages[imageIndex], offX, offY)

    if (this.showCoordinates) {
      this.context.fillStyle = 'orange'
      this.context.fillText(
        Xi + ', ' + Yi,
        offX + this.tileColumnOffset / 2 - 9,
        offY + this.tileRowOffset / 2 + 3,
      )
    }
  },

  drawDiamond: function(Xi, Yi, color) {
    let offX =
      (Xi * this.tileColumnOffset) / 2 +
      (Yi * this.tileColumnOffset) / 2 +
      this.originX
    let offY =
      (Yi * this.tileRowOffset) / 2 - (Xi * this.tileRowOffset) / 2 + this.originY

    this.drawLine(
      offX,
      offY + this.tileRowOffset / 2,
      offX + this.tileColumnOffset / 2,
      offY,
      color,
    )
    this.drawLine(
      offX + this.tileColumnOffset / 2,
      offY,
      offX + this.tileColumnOffset,
      offY + this.tileRowOffset / 2,
      color,
    )
    this.drawLine(
      offX + this.tileColumnOffset,
      offY + this.tileRowOffset / 2,
      offX + this.tileColumnOffset / 2,
      offY + this.tileRowOffset,
      color,
    )
    this.drawLine(
      offX + this.tileColumnOffset / 2,
      offY + this.tileRowOffset,
      offX,
      offY + this.tileRowOffset / 2,
      color,
    )
  },

  drawLine: function(x1, y1, x2, y2, color) {
    color = typeof color !== 'undefined' ? color : 'white'
    this.context.strokeStyle = color
    this.context.beginPath()
    this.context.lineWidth = 1
    this.context.moveTo(x1, y1)
    this.context.lineTo(x2, y2)
    this.context.stroke()
  },
}

export default Isometric
