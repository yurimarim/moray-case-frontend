import { useCallback, useEffect, useState } from "react";
import HomeService from "../../services/HomeService";

export function useHome() {
  const [geojson, setGeojson] = useState(null);
  const [neighborhoodsPopulationalData, setNeighborhoodsPopulationalData] = useState(null);
  const [filteredNeighborhoodPopulationalInfo, setFilteredNeighborhoodPopulationalInfo] = useState(null);
  const [neighborhoodPropertiesInfo, setNeighborhoodPropertiesInfo] = useState(null);
  const [isNeighborhoodModalOpen, setIsNeighborhoodModalOpen] = useState(false);
  const [isGreetingsModalOpen, setIsGreetingsModalOpen] = useState(true);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const getGeoJsonData = useCallback(async () => {
    try {
      const response = await HomeService.getNeighborhood();
      setGeojson(response);
    } catch (error) {
      console.log('Erro ao carregar os dados de bairro', error);
    }
  }, []);

  const getNeighborhoodsPopulationalData = useCallback(async () => {
    try {
      const response = await HomeService.populationalData();
      setNeighborhoodsPopulationalData(response);
    } catch (error) {
      console.log('Erro ao carregar os dados populacionais do bairro.', error);
    }
  }, []);

  useEffect(() => {
    getGeoJsonData();
  }, [getGeoJsonData])

  useEffect(() => {
    getNeighborhoodsPopulationalData();
  }, [getNeighborhoodsPopulationalData]);

  function handleCheckPopulationalData(event) {
    const { feature } = event.sourceTarget;

    if (neighborhoodsPopulationalData) {
      const filteredData = neighborhoodsPopulationalData.filter(
        (item) => item.id_geometria === feature.properties.id
      );

      setFilteredNeighborhoodPopulationalInfo(filteredData);
    }

    setNeighborhoodPropertiesInfo(feature.properties);
    setIsNeighborhoodModalOpen(true);
  }

  function handleToggleNeighborhoodModalOpen() {
    setIsNeighborhoodModalOpen(!isNeighborhoodModalOpen);
  }

  function handleCloseGreetingsModal() {
    setIsGreetingsModalOpen(false);
  }

  function handleToggleMenuModalOpen() {
    setIsMenuModalOpen(!isMenuModalOpen);
  }

  return {
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
  };
}