import paper from 'paper'

const canvas = document.getElementById('canvas')

paper.setup(canvas)

const path = new paper.Path()

path.strokeColor = '#000000'

const start = new paper.Point(100, 100)

path.moveTo(start)
path.lineTo(start.add([200, -50]))

paper.view.onFrame = () => {
	path.rotate(3)
}