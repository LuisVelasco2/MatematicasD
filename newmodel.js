const scene = new THREE.Scene();
//declaramos camara
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/ window.innerHeight, 0.1, 1000
);
camera.position.z = 3;
//render de escena
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//luz ambuiental
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);
// generar luz
const point = new THREE.PointLight(0xffffff,1);
point.position.set(2,3,2);
scene.add(point);

//rendereamos cubo
const geometry = new THREE.BoxGeometry(1,1,1);
const cuboA = new THREE.Mesh(
    geometry,
    new THREE.MeshStandarMaterial({color: 0xF4FF00})// amarillo
);

cuboA.position.x = -2;
scene.add(cuboA);
//cubo largo
const geometryX = new THREE.BoxGeometry(2,1,1);
const cuboB = new THREE.Mesh(
    geometryX,
    new THREE.MeshStandarMaterial({color: 0xF4FF00})
);
cuboB.position.x = 0;
scene.add(cuboB);
//cubo alto
const geometryY = new THREE.BoxGeometry(1,2,1);
const cuboC = new THREE.Mesh(geometryY, 
    new THREE.MeshStandarMaterial({color: 0xF4FF00})
);
cuboC.position.x = 2;
scene.add(cuboC);
//variables para UI
let rotar = true;
//cambio de color
document.getElementById("cuboColor").addEventListener("change",(e)=>{
    const colorHex = e. target.value;
    cuboA.material.color.set(colorHex);
    cuboB.material.color.set(colorHex);
    cuboC.material.color.set(colorHex);
});
//cambio de iluminacion
document.getElementById("pointLight").addEventListener("input", (e) =>{
    point.intensity = parseFloat(e.target.value);
});
//activacion y desactivacion de rotacion
document.getElementById("rotate").addEventListener("click", () =>{
    rotar = !rotar;
    document.getElementById("rotate").textContent = rotar ? "desactivar" : "activar"
});
//animar cubo
function animate()
{
    requestAnimationFrame(animate);
    if(rotar){
        scene.rotation.y += 0.01;
        cuboA.rotation.y += 0.01;
        cuboB.rotation.y += 0.01;
        cuboC.rotation.y += 0.01;
    }
    renderer.render(scene.camera);
}
animate();
//ajustar el cubo en pantalla
window.addEventListener('resize', () =>{

    camera.aspect= window.innerWidth / window.innerHeight;
    camera.updateProjectMatrix();
    render.setSize(window.innerWidth, window.innerHeight)
}) // en caso de necesitarse la comilla sencialla  '