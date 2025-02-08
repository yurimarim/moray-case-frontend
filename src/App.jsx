import { GeoJSON } from 'react-leaflet/GeoJSON';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import 'leaflet/dist/leaflet.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [geojson, setGeojson] = useState();
  const [neighborhoodPopulational, setNeighborhoodPopulational] = useState();
  const [filteredNeighborhoodInfo, setFilteredNeighborhoodInfo] = useState();
  const [neighborhoodName, setNeighborhoodName] = useState(null);

  // neighborhood é no singular, alterar para plural.
  // neighborhoodPopulational -> useMemo -> evitar re-cálculos durante o life cycle da aplicação. 
  // Implementação de gráficos para visualização o avanço populacional de detarminado bairro.

  const getGeoJsonData = useCallback(async () => {
    try {
      const response = await axios.get('/bairros-geojson');
      setGeojson(response?.data);
    } catch (error) {
      console.log('Erro ao carregar os dados de bairro', error);
    }
  }, []);

  const getNeighborhoodPopulationalData = useCallback(async () => {
    try {
      const response = await axios.get('/populacao');
      setNeighborhoodPopulational(response?.data);
    } catch (error) {
      console.log('Erro ao carregar os dados populacionais do bairro.', error);
    }
  }, []);

  useEffect(() => {
    getGeoJsonData();
  }, [getGeoJsonData])

  useEffect(() => {
    getNeighborhoodPopulationalData();
  }, [getNeighborhoodPopulationalData]);

  function handleCheckPopulationalData(event) {
    const { feature } = event.sourceTarget;

    const filteredData = neighborhoodPopulational.filter(
      (item) => item.id_geometria === feature.properties.id
    );

    setNeighborhoodName(feature.properties.name);
    setFilteredNeighborhoodInfo(filteredData);
  }

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
        {geojson && (
          <GeoJSON
            data={geojson}
            style={{ color: '#6c58ff' }}
            eventHandlers={{
              click: (event) => {
                // Quando o usuário clicar em um bairro no mapa, essa função será executada
                // console.log('feature (bairro):', event.sourceTarget.feature);
                handleCheckPopulationalData(event);
              },
            }}
          />
        )}
      </MapContainer>

      <h3>
        {`Dados Populacionais: ${neighborhoodName ?? 'Nenhum bairro selecionado.'}`}
      </h3>

      {filteredNeighborhoodInfo && (
        filteredNeighborhoodInfo.map(item => (
          <div key={Math.random()} style={{ display: 'flex', gap: 15 }}>
            <span>{`Ano: ${item.ano}`}</span>
            <span>{`População: ${item.populacao}`}</span>
          </div>
        ))
      )}
    </>
  );
}

export default App;
