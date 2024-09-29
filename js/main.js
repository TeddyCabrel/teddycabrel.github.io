import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.153.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.153.0/examples/jsm/controls/OrbitControls.js';


const canvas = document.querySelector('.canvas');
const scene = new THREE.Scene();

let about_1;
let about_2;
let nom;
let description;
let poissonA;
let poissonB ;
let poissonC;
let coral ;
let water ;
let tabs;
let skill;
let aboutMe;
let Home;
let project;
let star;
let Contact;
let video_popup
let project1;
let project2;
let project3;
let project4;
let allprojet;
let nav;
let contactContainer;
let solar;
skill = document.querySelector('.skill')
water = document.querySelector('.water')
description = document.querySelector('.description')
nom = document.querySelector('.nom')
about_1 = document.querySelector('.about-1')
about_2 = document.querySelector('.about-2')
poissonA = document.querySelector('.poissonA')
poissonB = document.querySelector('.poissonB')
poissonC = document.querySelector('.poissonC')
tabs = document.querySelector('.tabs')
coral = document.querySelector('.coral')
aboutMe  = document.querySelector('.aboutMe')
Home = document.querySelector('.Home')
project = document.querySelector('.project')
Contact = document.querySelector('.contact')
video_popup = document.querySelectorAll('.video-popup')
project1 =document.querySelector('.project1')
project2 =document.querySelector('.project2')
project3 =document.querySelector('.project3')
project4 =document.querySelector('.project4')
allprojet = document.querySelector('.allProject')
contactContainer = document.querySelector('.contactContainer')



const loadingManager = new THREE.LoadingManager();
const progressBar = document.getElementById('progress-bar');
loadingManager.onProgress = function(url, loaded, total){
    progressBar.value = (loaded/total)*100;
}
const button = document.querySelector('.startButton');
const progressBarContainer = document.querySelector('.progress-bar-container')
loadingManager.onLoad = function(){
    progressBarContainer.style.display='none';
    button.style.zIndex=100;
}
const loader = new GLTFLoader(loadingManager);


loader.load(
    '/assets/mountain.glb',
    function (glb) {
        console.log(glb);

        const root = glb.scene;
        root.scale.set(0.027, 0.027, 0.027);
        root.position.set(-0.15, 0.1, 1.3);

        root.rotation.y = -110 * (Math.PI / 180);

        renderer.setClearColor(0xcce1e1);


        scene.add(root);


        root.traverse(function (node) {
            if (node.isMesh) {
                node.castShadow = true;
                node.receiveShadow = true;
            }
        });
    },
   /*
    function (xhr) {
        // While it is loading, log the progress
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {

        console.error(error);
    }

    */
);


// Boiler Plate Code
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

// Camera setup
 const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 0.1, 100);
camera.position.set(-0.4821222362151634, 0.4895597488347424, 2.7342510730804914);
//camera.position.set(-0.9295392986346949, 0.92666112915394, 2.4950942613422384);
scene.add(camera);

// Renderer setup
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});


renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.outputEncoding = THREE.sRGBEncoding;


// Controls setup
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable smooth damping for the camera movement
/*
// Log camera position on change
controls.addEventListener('change', () => {
    console.log(`Camera position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
});

*/



controls.enableZoom =false;
controls.enableRotate = false;

controls.enablePan = false;

controls.zoomSpeed = 0.5;
controls.minDistance = 2.9;
controls.maxDistance = 3;




function animate() {
    requestAnimationFrame(animate);
    controls.update();
    if (star) {
        star.rotation.y += 0.004;
    }
    if (solar) {
        solar.rotation.y += 0.003;
    }


    renderer.render(scene, camera);
}

animate();

loader.load(
    '/assets/water.glb',
    function (glb) {
         const waterBoat = glb.scene;
        waterBoat.scale.set(1,1, 1);
        waterBoat.position.set(-0.47, 0.01,0.32);
        scene.add(waterBoat);



    },

);
loader.load(
    'assets/star.glb',
    function (gbl){
         star = gbl.scene;
        star.scale.set(0.04, 0.04, 0.04)
        star.position.set(2.5, 0.75, -2.3)
        scene.add(star);



    }
);

loader.load(
    'assets/solar.glb',
    function(glb){
        solar = glb.scene;
        solar.scale.set(1, 1, 1)
        solar.position.set(1.7, 0.72,-1.7);
        scene.add(solar);

    }
)

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 100);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 'black',
    side: THREE.DoubleSide
});
const moon = new THREE.Mesh(sphereGeometry, sphereMaterial);


moon.position.set(1.2, 0.5, -1);


const sphereSun = new THREE.SphereGeometry(0.4, 32, 32);
const sphereMaterialSun = new THREE.MeshStandardMaterial({
    color: 0xFFA500,
    side: THREE.DoubleSide
});

const ambientLight = new THREE.AmbientLight(0xffffff, 3);


scene.add(ambientLight);

const sun = new THREE.Mesh(sphereSun, sphereMaterialSun);


sun.position.set(-1.59, 0.52,-1.7);



scene.add(moon);
scene.add(sun);

document.addEventListener('DOMContentLoaded', function() {


    function hideButton() {
        enableCameraConstraints(controls)


        nav = document.querySelector('.wrapper')

        Home.style.pointerEvents = "none";

        gsap.to(description, {
            duration: 0.5,
            opacity: 0,
            
        });
        gsap.to(nom, {
            duration: 2,
            top: '11%',
            left: '24%',
            ease: "power2.out",
            autoRound: false,
            fontSize: '6.67vw'
        });
        gsap.to(nav, {
            duration: 2,
            opacity: 1,
            display:'flex',

        });

        gsap.to(button, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
                button.style.display = 'none';
            }
        });


        gsap.to(camera.position, {
            duration: 1.5,
            x: -0.8196332551280924,
            y: 1.0571139146446227,
            z: 2.4690795682717024,
            onUpdate: function () {
                camera.lookAt(scene.position);
                controls.update();
            },
            ease: "power1.inOut"
        });



                gsap.to(sun.position,
                    {
                        x: 1.7,
                        y:0.72,
                        z: -1.7,
                        duration: 1.5,
                        ease: "power1.out"
                    }
                );
        gsap.to(moon.scale, {
            x: 0.8,
            y: 0.8,
            z: 0.8,
            duration: 1,
            ease: "power1.inOut"
        });
        gsap.to(moon.position, {
            x: 2.5,
            y: 0.88,
            z: -2.3,
            duration: 1,
            ease: "power1.inOut"
        });




    }

    function aboutSection(){
        resetnom()
        disableCameraConstraints(controls)
        disableLink();
        resetElement(about_2, about_1, coral, poissonA, water,poissonB,poissonC,tabs,project1,project2,project3,project4,contactContainer);

        gsap.to(about_1, {

            opacity:0,
            duration:0.2,
            zIndex:100

        });
        gsap.to(about_2, {

            opacity:0,
            duration:0.2,
            zIndex:100

        });


        gsap.to(camera.position, {
            duration: 1.7,
            x: 0.14094358206177665,
            y: 1.8739808607189183,
            z: 2.0213191744071755,
            onComplete: () => {

                gsap.to(camera.position, {
                    duration: 0.8,
                    x: -0.7122110942377228,
                    y: 0.23476099036142498,
                    z: 0.3277700385102677,
                    ease: "power1.inOut",
                    onComplete: () => {
                        gsap.to(camera.position,{
                            duration:4.5,
                            x: -0.42778302893296566,
                            y: 0.2535615434948193,
                            z: 0.6157922989252962,
                            ease: "power1.inOut",
                            onComplete: () => {
                                gsap.to(camera.position,{
                                    duration: 1.5,
                                    x: -0.4054974548754952,
                                    y: 0.10216597577960831,
                                    z: 0.6479472807665938,
                                    ease: "power1.inOut",
                                    onUpdate:()=> {
                                        gsap.to(water,{
                                            opacity: 0.3,
                                            zIndex: 500,
                                            ease: "power1.inOut",
                                            duration:0.1
                                        })
                                        gsap.to(poissonA,{
                                            opacity: 1,
                                            zIndex: 400,
                                            ease: "power1.inOut",
                                            duration:0.2
                                        })
                                        gsap.to(poissonB,{
                                            opacity: 1,
                                            zIndex: 400,
                                            ease: "power1.inOut",
                                            duration:0.3
                                        })
                                        gsap.to(poissonC,{
                                            opacity: 1,
                                            zIndex: 402,
                                            ease: "power1.inOut",
                                            duration:0.4
                                        })
                                        gsap.to(coral,{
                                            opacity: 1,
                                            zIndex: 401,
                                            ease: "power1.inOut",
                                            duration:0.2
                                        })
                                    }

                                })
                            }
                        })
                    }
                });
                gsap.to(about_1, {
                    duration: 1,
                    opacity:1,
                    ease: "power2.out",
                    delay:6,
                    onComplete: () => {

                        enableLink()
                        aboutMe.style.pointerEvents="none";


                    }
                });
                gsap.to(about_2, {
                    duration: 1,
                    opacity:1,
                    ease: "power2.out",
                    delay:2,


                });

            },
            ease: "power2.out",
        });







    }
    function Skill(){
        resetnom()
        disableCameraConstraints(controls)
        disableLink()

        resetElement(about_2, about_1, coral, poissonA, water,poissonB,poissonC,tabs,project1,project2,project3,project4,contactContainer);

        gsap.to(camera.position, {
            duration: 1.5,
            x: 0.14094358206177665,
            y: 1.8739808607189183,
            z: 2.0213191744071755,
            onComplete: () => {

                gsap.to(camera.position, {
                    duration: 1.5,
                    x: 1.9913388251940596,
                    y: 0.776568144585013,
                    z:-1.935587161541752,
                    ease: "power1.inOut",
                    onComplete:()=>{
                        gsap.to(tabs,{
                            opacity:1,
                            zIndex: 100,
                            duration:1,



                        })
                    }
                });

                gsap.to(about_1, {
                    duration: 1,
                    opacity:0,
                    ease: "power2.out",
                    delay:2,
                    zIndex:-100,

                    onComplete: () => {

                        enableLink()
                        skill.style.pointerEvents="none";


                    }
                });

            },
            ease: "power1.inOut"
        });

    }
    function Project() {

        disableCameraConstraints(controls)
        allprojet.style.pointerEvents="auto"
        disableLink()
        resetElement(about_2, about_1, coral, poissonA, water,poissonB,poissonC,tabs,project1,project2,project3,project4,contactContainer);
        gsap.to(camera.position, {
            duration: 1.5,
            x: -2.784138754994846,
            y: 2.1119286194241087,
            z: 1.231499443300437,
            onComplete: function () {
                gsap.to(camera.position, {
                    duration: 1,
                    x: 2.0421093532892236,
                    y: 0.8346531146025703,
                    z:-2.9994652277662066,
                    onComplete: function () {
                        gsap.to(camera.position, {
                            duration: 1,
                            x: 2.708665859886271,
                            y: 0.9359552624181936,
                            z: -2.502451032381508,

                        });


                        gsap.to(project1,{
                            delay:1.2,
                            zIndex:500,
                            opacity:1,

                        })
                        gsap.to(project2,{
                            delay:1.3,
                            zIndex:500,
                            opacity:1,

                        })
                        gsap.to(project3,{
                            delay:1.4,
                            zIndex:500,
                            opacity:1
                        })
                        gsap.to(project4,{
                            delay:1.5,
                            zIndex:500,
                            opacity:1,
                            onComplete: function (){

                                Home.style.pointerEvents="auto"
                            }
                        })
                        disableLink()
                        project.style.pointerEvents="none"
                    }
                });
            }
        });

    }

    function showHome(){
        allprojet.style.pointerEvents="none"
        disableLink()

        resetElement(about_2, about_1, coral, poissonA, water,poissonB,poissonC,tabs,project1,project2,project3,project4,contactContainer);
        gsap.to(nom, {
            duration: 1.2,
            ease: "power2.out",
            opacity:1,
            zIndex:100
        });
        gsap.to(camera.position, {
            duration: 1.5,
            x: -0.8196332551280924,
            y: 1.0571139146446227,
            z: 2.4690795682717024,
            onUpdate: function () {
                camera.lookAt(scene.position);
                controls.update();
            },
            onComplete: function () {
                enableCameraConstraints(controls)
                enableLink()
                Home.style.pointerEvents="none";
            },
            ease: "power1.inOut"
        });
    }
    function contact(){
        disableCameraConstraints(controls)
        resetElement(about_2, about_1, coral, poissonA, water,poissonB,poissonC,tabs,project1,project2,project3,project4,contactContainer);

        disableLink()
        gsap.to(camera.position, {
            duration: 1.5,
            x: -2.784138754994846,
            y: 2.1119286194241087,
            z: 1.231499443300437,
            onComplete: function () {
                contactContainer.style.zIndex=100;
                contactContainer.style.opacity=1;
                gsap.to(camera.position, {
                    duration: 2,
                    x:-0.7624899495124199,
                    y:0.8585177155851387,
                    z:2.806952759293429,

                    onComplete: function(){
                        enableLink()
                        Contact.style.pointerEvents="none"
                        controls.minPolarAngle = Math.PI / 3;
                        controls.maxPolarAngle = Math.PI / 2.50;
                        controls.enableZoom =false;
                        controls.enableRotate = true;


                    }
                });
                resetnom()
            }
        });
    }



    const startButton = document.querySelector('.startButton');
    if (startButton) {
        startButton.addEventListener('click', hideButton);
    }

    if (aboutMe) {
        aboutMe.addEventListener('click', aboutSection);
    }
    const mySkill = document.querySelector('.skill')
    if(mySkill){
        mySkill.addEventListener('click', Skill);
    }

    if(Home){
        Home.addEventListener('click', showHome);
    }
    if (project) {
        project.addEventListener('click', Project);
    }
    if(Contact){
        Contact.addEventListener('click',contact);
    }



});


window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});





function resetElement(...elements) {
    elements.forEach(element => {
        gsap.to(element, {
            opacity: 0,
            duration: 0.2,
            zIndex: -100,
            ease: "none"
        });
    });
}
function resetnom(){
    gsap.to(nom, {
        duration: 1,
        opacity:0,
        ease: "power2.out",
        zIndex:-100

    });
}

function disableLink(){
    aboutMe.style.pointerEvents = "none";
    skill.style.pointerEvents="none";
    Home.style.pointerEvents="none";
    project.style.pointerEvents="none";
    Contact.style.pointerEvents="none"
}

function enableLink(){
    aboutMe.style.pointerEvents = "auto";
    skill.style.pointerEvents="auto"
    Home.style.pointerEvents="auto"
    project.style.pointerEvents="auto"
    Contact.style.pointerEvents="auto"
}


document.querySelectorAll('.allProject .videoholder').forEach(img => {
    img.onclick = () => {
        const videoSrc = img.getAttribute('data-video-src');
        document.querySelector('.video-popup video').src = videoSrc;
        document.querySelector('.video-popup').style.display = 'block';
        Home.style.pointerEvents = "none";
        const descriptionText = document.querySelector('.video-text');
        const description = img.getAttribute('data-description');
        descriptionText.textContent = description

        descriptionText.innerHTML = description;
    };
});



document.querySelector('span').onclick=()=>{
    document.querySelector('.video-popup').style.display = 'none';
    Home.style.pointerEvents="auto"
}

function disableCameraConstraints(controls) {

    controls.minAzimuthAngle = -Infinity;
    controls.maxAzimuthAngle = Infinity;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI;
    controls.minDistance = 0;
    controls.maxDistance = Infinity;

    controls.enableZoom =false;
    controls.enableRotate = false;

    controls.enablePan = false;



}
function enableCameraConstraints(controls) {

    controls.minAzimuthAngle = -40 * (Math.PI / 180);
    controls.maxAzimuthAngle = -10 * (Math.PI / 180);
    controls.minPolarAngle = Math.PI / 3;
    controls.maxPolarAngle = Math.PI / 2.25;
    controls.enableZoom =false;
    controls.enableRotate = true;

}
