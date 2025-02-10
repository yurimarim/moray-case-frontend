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
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(true);
  const [hasError, setHasError] = useState(false);

  const getGeoJsonData = useCallback(async () => {
    try {
      const response = await HomeService.getNeighborhood();
      setGeojson(response);
    } catch (error) {
      setHasError(true);
      console.log('Erro ao carregar as demarcações do mapa.', error);
    }
  }, []);

  const getNeighborhoodsPopulationalData = useCallback(async () => {
    try {
      const response = await HomeService.populationalData();
      setNeighborhoodsPopulationalData(response);
    } catch (error) {
      setHasError(true);
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

    if(!Array.isArray(neighborhoodsPopulationalData)) {
      setHasError(true);
      console.log('Ocorreu um erro ao obter os dados populacionais.');
    }

    const filteredData = neighborhoodsPopulationalData.filter(
      (item) => item.id_geometria === feature.properties.id
    );

    setFilteredNeighborhoodPopulationalInfo(filteredData);
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

  function handleCloseErrorModal() {
    setIsErrorModalOpen(false);
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
    handleToggleMenuModalOpen,
    hasError,
    isErrorModalOpen,
    handleCloseErrorModal
  };
}