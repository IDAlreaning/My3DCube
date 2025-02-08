import { BoxGeometry, Color, Mesh, MeshBasicMaterial, MeshStandardMaterial, PerspectiveCamera, Scene, WebGLRenderer } from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"
import { cameraViewMatrix, materialOpacity } from "three/tsl"

console.log("hello")

let canvasElement = document.getElementById("root") //我從document中拿到一個id叫做root的元件，這個拿到的元件取名叫做canvasElement
//在three.js中畫畫叫做渲染器(renderer)

let renderer = new WebGLRenderer({ canvas: canvasElement }) //renderer類似於畫家，要把畫畫出來

renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight)
renderer.setViewport(0, 0, canvasElement.clientWidth, canvasElement.clientHeight)


//3D世界有場景和攝影機，要先畫攝影機才會有東西建置

let camera = new PerspectiveCamera() //OrthographicCamera 
// OrthographicCamera看不出距離感

let scene = new Scene()

let mesh = new Mesh() //網格
// let x = 0

let geo = new BoxGeometry(1, 1, 1) //形狀

let material = new MeshBasicMaterial() //材質，設定顏色

material.color = new Color(1, 0, 0)

mesh.geometry = geo
// x = 1
mesh.material = material

scene.add(mesh)

camera.position.z = 5

new OrbitControls(camera, canvasElement)
let x = 0.01
function loop() {
    renderer.clear()
    renderer.render(scene, camera)
    if (material.color.r >0.7) {
        x = -0.01
    }
    if (material.color.r < 0.1) {
        x = 0.01
    }
    material.color.r = material.color.r + x
}

renderer.setAnimationLoop(loop)



//EX:
class Cat { // 類別
    position = 0;

    run() {
        this.position = this.position + 1;
    }
}

// 我們可以透過類別做出物件，使用 new 這個關鍵字
let blueblue = new Cat();
let mimi = new Cat();

blueblue.run()
blueblue.run()

mimi.run()

mimi.position = 30