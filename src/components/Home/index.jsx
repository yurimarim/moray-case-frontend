import { GeoJSON } from 'react-leaflet/GeoJSON';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import 'leaflet/dist/leaflet.css';
import { GreetingsModal } from '../GreetingsModal';
import { NeighborhoodDataModal } from '../NeighborhoodDataModal';
import { Widget } from '../Widget';
import { useHome } from './useHome';
import { MenuModal } from '../MenuModal';

export function Home() {
  const {
    isGreetingsModalOpen,
    handleCloseGreetingsModal,
    neighborhoodPropertiesInfo,
    filteredNeighborhoodPopulationalInfo,
    isNeighborhoodModalOpen,
    handleToggleNeighborhoodModalOpen,
    geojson,
    handleCheckPopulationalData,
    isMenuModalOpen,
    handleToggleMenuModalOpen
  } = useHome();

  return (
    <>
      <GreetingsModal
        isOpen={isGreetingsModalOpen}
        closeModal={handleCloseGreetingsModal}
      />

      <NeighborhoodDataModal
        neighborhoodData={neighborhoodPropertiesInfo}
        filteredNeighborhoodPopulationalInfo={filteredNeighborhoodPopulationalInfo}
        isOpen={isNeighborhoodModalOpen}
        toggleModalOpen={handleToggleNeighborhoodModalOpen}
      />

      <MenuModal
        isOpen={isMenuModalOpen}
        toggleModalOpen={handleToggleMenuModalOpen}
      />

      <Widget handleClick={handleToggleMenuModalOpen} />

      <MapContainer
        style={{ height: '100vh' }}
        bounds={[[-23.234708, -45.928813], [-23.198917, -45.900761]]}
        zoom={15}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {geojson && (
          <GeoJSON
            data={geojson}
            style={{ color: '#6c58ff' }}
            eventHandlers={{
              click: (event) => handleCheckPopulationalData(event),
            }}
          />
        )}
      </MapContainer>
    </>
  );
}