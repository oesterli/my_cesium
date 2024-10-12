
  const helloWorld = document.getElementById("hello-world");
  const message = "Hello World";
  helloWorld.innerText = message;
  
  
  // The URL on your server where CesiumJS's static files are hosted.
  window.CESIUM_BASE_URL = '/';
  
  
  
  import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer } from 'cesium';
  import "cesium/Build/Cesium/Widgets/widgets.css";
  
  
  /*
  // Your access token can be found at: https://ion.cesium.com/tokens.
  // Replace `your_access_token` with your Cesium ion access token.
  Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzN2UxMDY2Ni02MDJjLTQzNDYtOGJkOS1mODExYmRhZTAzZDAiLCJpZCI6MjQ3NDAyLCJpYXQiOjE3Mjg2NDgwNTh9.0nZw0i7LqRtez-o0PrU1L9IgN9NAlwvwAFiexJN3ejc';
  
  // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
  const viewer = new Viewer('cesiumContainer', {
    terrain: Terrain.fromWorldTerrain(),
  });
  
  // Fly the camera to Wabern at the given longitude, latitude, and height.
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(7.45155, 46.92807, 10000), //fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: CesiumMath.toRadians(0.0),
      pitch: CesiumMath.toRadians(-90.0),
    }
  });
  
  
  // Add Cesium OSM Buildings, a global 3D buildings layer.
  const buildingTileset = await createOsmBuildingsAsync();
  viewer.scene.primitives.add(buildingTileset);
  
  /* 
  // Add own data
  try {
    const resource = await IonResource.fromAssetId(2768414);
    
    console.log("Test");
    console.log(resource);
    
    const dataSource = await Cesium.KmlDataSource.load(resource, {
      camera: viewer.scene.camera,
      canvas: viewer.scene.canvas,
      clampToGround: true,
    });
  
    console.log(dataSource);
    
    await viewer.dataSources.add(dataSource);
    await viewer.zoomTo(dataSource);
  } catch (error) {
    console.log(error);
  }
   
  
   */
