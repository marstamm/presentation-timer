window.createMarkup = () => {
  const markup = `
  <img src="camunda.svg" id="logo" style="position: absolute; z-index:-1; width: 30vw; margin-left: 35vw; margin-top: 100px;" />
  <div id="container"></div>
  <svg style="position: absolute; bottom: 0; width: 100%" viewBox="0 0 580 400">
  <ellipse fill="rgba(0,0,0,0.7)" stroke="#000" stroke-width="1.5" cx="290" cy="450" id="svg_1" rx="398" ry="139.5" stroke-dasharray="none" fill-opacity="1"></ellipse>
  </svg>
  <div id="timer" style="font-family: 'Roboto Mono', monospace; position: absolute; bottom: 60px; width: 100%; text-align: center; font-size: 130px; color: white;"></div>
  <div id="title" style="font-family: 'Roboto Mono', monospace; position: absolute; top: 60px; width: 100%; text-align: center; font-size: 70px; color: white;">Spring Hack Day Presentations<div>
  <div id="subtitle" style="display: none"></div>
`;

  const endTime = new Date("2019-04-05T16:00:00.000+0200").valueOf();

  document.body.innerHTML = markup;

  document.body.style.margin = '0';
  document.body.style.overflow = 'hidden';
  document.body.style.backgroundColor = '#111111';

  document.getElementById('logo').style.opacity = '0.3';

  const font = document.createElement('link');
  font.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto+Mono');
  font.setAttribute('ref', 'stylesheet');
  document.head.appendChild(font);

  ["three.js"].forEach(src => {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", src);
    document.head.appendChild(scriptTag);
  });
  setTimeout(() => {
    ["GPUParticleSystem.js"].forEach(src => {
      const scriptTag = document.createElement("script");
      scriptTag.setAttribute("src", src);
      document.head.appendChild(scriptTag);
    });
  }, 200);

  setTimeout(() => {
    var camera, tick = 0,
    scene, renderer, clock = new THREE.Clock(),
    controls, container,
    options, spawnerOptions, particleSystem, spawner, timeScale;
  var stats;
  init();
  animate();
  function init() {
    //
    container = document.getElementById( 'container' );
    camera = new THREE.PerspectiveCamera( 28, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 100;
    scene = new THREE.Scene();
    // The GPU Particle system extends THREE.Object3D, and so you can use it
    // as you would any other scene graph component.	Particle positions will be
    // relative to the position of the particle system, but you will probably only need one
    // system for your whole scene
    particleSystem = new THREE.GPUParticleSystem( {
      maxParticles: 250000
    } );
    scene.add( particleSystem );
    // options passed during each spawned

    timeScale = 1;

    spawner = [
      {options: {
        position: new THREE.Vector3(),
      positionRandomness: .3,
      velocity: new THREE.Vector3(),
      velocityRandomness: .5,
      color: 0xc60029,
      colorRandomness: .2,
      turbulence: .5,
      lifetime: 2,
      size:  5 + 5 * Math.random(),
      sizeRandomness: 1
      }, spawnerOptions: {
        spawnRate: 5000,
      horizontalSpeed: 3 * Math.random(),
      verticalSpeed: 2.6 * Math.random(),
      timeScale

      }},
      {options: {
        position: new THREE.Vector3(),
      positionRandomness: .3,
      velocity: new THREE.Vector3(),
      velocityRandomness: .5,
      color: 0xc60029,
      colorRandomness: .2,
      turbulence: .5,
      lifetime: 2,
      size:  5 + 5 * Math.random(),
      sizeRandomness: 1
      }, spawnerOptions: {
        spawnRate: 5000,
      horizontalSpeed: 3 * Math.random(),
      verticalSpeed: 2.6 * Math.random(),
      timeScale
      }},
      {options: {
        position: new THREE.Vector3(),
      positionRandomness: .3,
      velocity: new THREE.Vector3(),
      velocityRandomness: .5,
      color: 0xc60029,
      colorRandomness: .2,
      turbulence: .5,
      lifetime: 2,
      size:  5 + 5 * Math.random(),
      sizeRandomness: 1
      }, spawnerOptions: {
        spawnRate: 5000,
      horizontalSpeed: 3 * Math.random(),
      verticalSpeed: 2.6 * Math.random(),
      timeScale
      }},
      {options: {
        position: new THREE.Vector3(),
      positionRandomness: .3,
      velocity: new THREE.Vector3(),
      velocityRandomness: .5,
      color: 0xc60029,
      colorRandomness: .2,
      turbulence: .5,
      lifetime: 2,
      size:  5 + 5 * Math.random(),
      sizeRandomness: 1
      }, spawnerOptions: {
        spawnRate: 5000,
      horizontalSpeed: 3 * Math.random(),
      verticalSpeed: 2.6 * Math.random(),
      timeScale
      }},
      {options: {
        position: new THREE.Vector3(),
      positionRandomness: .3,
      velocity: new THREE.Vector3(),
      velocityRandomness: .5,
      color: 0xc60029,
      colorRandomness: .2,
      turbulence: .5,
      lifetime: 2,
      size:  5 + 5 * Math.random(),
      sizeRandomness: 1
      }, spawnerOptions: {
        spawnRate: 5000,
      horizontalSpeed: 3 * Math.random(),
      verticalSpeed: 2.6 * Math.random(),
      timeScale
      }},
      {options: {
        position: new THREE.Vector3(),
      positionRandomness: .3,
      velocity: new THREE.Vector3(),
      velocityRandomness: .5,
      color: 0xc60029,
      colorRandomness: .2,
      turbulence: .5,
      lifetime: 2,
      size:  5 + 5 * Math.random(),
      sizeRandomness: 1
      }, spawnerOptions: {
        spawnRate: 5000,
      horizontalSpeed: 3 * Math.random(),
      verticalSpeed: 2.6 * Math.random(),
      timeScale
      }},
      {options: {
        position: new THREE.Vector3(),
      positionRandomness: .3,
      velocity: new THREE.Vector3(),
      velocityRandomness: .5,
      color: 0xc60029,
      colorRandomness: .2,
      turbulence: .5,
      lifetime: 2,
      size:  5 + 5 * Math.random(),
      sizeRandomness: 1
      }, spawnerOptions: {
        spawnRate: 5000,
      horizontalSpeed: 3 * Math.random(),
      verticalSpeed: 2.6 * Math.random(),
      timeScale
      }},
    ];
    //
    //
    //
    renderer = new THREE.WebGLRenderer({alpha: true});
    renderer.setClearColor( 0x111111, 0);
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    //
    window.addEventListener( 'resize', onWindowResize, false );
  }
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }
  function animate() {
    requestAnimationFrame( animate );
    const now = Date.now();
    if (endTime - now > 0) {
      // render time after
      timer.textContent = convertRemaining(endTime - now);
    } else {
      timer.textContent = "00:00";
    }

    var delta = clock.getDelta() * timeScale;
    tick += delta;
    if ( tick < 0 ) tick = 0;
    if ( delta > 0 ) {
      spawner.forEach(({options, spawnerOptions}, idx) => {
        options.position.x = Math.sin( idx * 479 + tick * spawnerOptions.horizontalSpeed ) * 40;
        options.position.y = Math.sin( idx *311 + tick * spawnerOptions.verticalSpeed ) * 20;
        options.position.z = Math.sin( idx *83 + tick * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed ) * 10;
        for ( var x = 0; x < spawnerOptions.spawnRate * delta; x ++ ) {
          // Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
          // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
          particleSystem.spawnParticle( options );
        }
      })
    }
    particleSystem.update( tick );
    render();
  }
  function render() {
    renderer.render( scene, camera );
  }

  }, 400);

  function convertRemaining(milliseconds) {
    const minutes = Math.floor(milliseconds / 60 / 1000);
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const ms = Math.floor((milliseconds % 1000) / 10);
    if (minutes) {
      return leftPad(minutes) + ":" + leftPad(seconds);
    } else {
      return leftPad(seconds) + ":" + leftPad(ms);
    }
  }
  function leftPad(number) {
    return number.toString().length < 2 ? "0" + number : number;
  }
};
