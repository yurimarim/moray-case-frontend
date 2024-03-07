// import { GeoJSON } from 'react-leaflet/GeoJSON';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
      <MapContainer
        style={{ height: '100vh' }}
        bounds={[[-23.234708, -45.928813], [-23.198917, -45.900761]]}
        zoom={15}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Componente que renderiza as geometrias dos bairros */}
        {/* {geojson && (
          <GeoJSON
            data={geojson}
            style={{ color: '#6c58ff' }}
            eventHandlers={{
              click: (event) => {
                // Quando o usuário clicar em um bairro no mapa, essa função será executada
                console.log('feature (bairro):', event.sourceTarget.feature);
              },
            }}
          />
        )} */}
      </MapContainer>
    </>
  );
}

export default App;
