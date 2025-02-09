import 'chart.js/auto';
import { useMemo } from 'react';
import { Bar } from 'react-chartjs-2'
import { X } from "@phosphor-icons/react";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';
import { ReactPortal } from "../ReactPortal";
import {
  ChartContainer,
  ChartLegendContainer,
  ChartLegendContent,
  ChartLegendHeader,
  Container,
  Content,
  LegendColor,
  NeighborhoodTableContainer,
  Overlay,
  TableHead
} from "./styles";

export function NeighborhoodDataModal({
  neighborhoodData,
  filteredNeighborhoodPopulationalInfo,
  isOpen,
  toggleModalOpen,
}) {
  const { t } = useTranslation();

  const values = useMemo(() => {
    const dataValues = (filteredNeighborhoodPopulationalInfo ?? []).map(item => item.populacao);

    return {
      min: dataValues.length ? Math.min(...dataValues) : 0,
      max: dataValues.length ? Math.max(...dataValues) : 0,
      dataValues,
    };
  }, [filteredNeighborhoodPopulationalInfo]);

  if (!isOpen) return null;

  return (
    <ReactPortal containerId='neighborhood-modal'>
      <Overlay>
        <Container>
          <div className='header'>
            <h3>
              {`${t('populational-data')}: ${neighborhoodData.name}`}
            </h3>

            <X
              size={23}
              cursor='pointer'
              color='red'
              onClick={toggleModalOpen}
            />
          </div>

          <Content>
            {filteredNeighborhoodPopulationalInfo ? (
              <>
                <span className='neighborhood-table-title'>{t('neighborhood-properties')}</span>

                <NeighborhoodTableContainer>
                  <TableHead>
                    <tr>
                      <th>{t('neighborhood-name')}</th>
                      <th>{t('neighborhood-sector')}</th>
                      <th>{t('neighborhood-zone')}</th>
                    </tr>
                  </TableHead>

                  <tbody>
                    <tr>
                      <td>{neighborhoodData.name}</td>
                      <td>{neighborhoodData.setor}</td>
                      <td>{neighborhoodData.zona}</td>
                    </tr>
                  </tbody>
                </NeighborhoodTableContainer>

                <ChartContainer>
                  <Bar
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: t('chart-title'),
                        },
                        legend: {
                          display: false
                        }
                      }
                    }}
                    data={{
                      labels: filteredNeighborhoodPopulationalInfo.map(
                        item => item.ano
                      ),
                      datasets: [
                        {
                          label: t('chart-label'),
                          data: filteredNeighborhoodPopulationalInfo.map(
                            item => item.populacao
                          ),
                          borderRadius: 8,
                          backgroundColor: values.dataValues.map(value => {
                            if (value === values.min) return '#fa6f6f';
                            if (value === values.max) return '#57d681';
                            return '#292df1';
                          }),
                        },
                      ],
                    }}
                  />

                  <ChartLegendContainer>
                    <ChartLegendHeader>
                      <span>{t('chart-legend-color')}</span>
                      <span>{t('chart-legend')}</span>
                    </ChartLegendHeader>

                    <ChartLegendContent>
                      <div>
                        <LegendColor color='#fa6f6f' />
                        <span>{t('chart-legend-min-value')}</span>
                      </div>

                      <div>
                        <LegendColor color='#57d681' />
                        <span>{t('chart-legend-max-value')}</span>
                      </div>

                      <div>
                        <LegendColor />
                        <span>{t('chart-legend-average-value')}</span>
                      </div>
                    </ChartLegendContent>
                  </ChartLegendContainer>
                </ChartContainer>
              </>
            ) : (
              <span>{t('error-title')}😥</span>
            )}
          </Content>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

NeighborhoodDataModal.propTypes = {
  neighborhoodData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    setor: PropTypes.string,
    zona: PropTypes.string
  }),
  filteredNeighborhoodPopulationalInfo: PropTypes.arrayOf(PropTypes.shape({
    id_geometria: PropTypes.number,
    ano: PropTypes.string,
    populacao: PropTypes.number,
  })),
  isOpen: PropTypes.bool.isRequired,
  toggleModalOpen: PropTypes.func.isRequired,
};