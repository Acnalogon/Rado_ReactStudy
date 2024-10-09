"use client";

import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SkillChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // This ensures the chart only renders after the component is mounted
  }, []);

  const charts = [
    {
      series: [90],
      options: {
        chart: {
          height: 350,
          type: 'radialBar' as 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
            dataLabels: {
              name: {
                show: true,
                color: '#f55a5f',
              },
              value: {
                show: true,
                color: '#f55a5f',
              },
            },
          },
        },
        colors: ['#f55a5f'],
        labels: ['Front-End'],
      },
    },
    {
      series: [70],
      options: {
        chart: {
          height: 350,
          type: 'radialBar' as 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
            dataLabels: {
              name: {
                show: true,
                color: '#f55a5f',
              },
              value: {
                show: true,
                color: '#f55a5f',
              },
            },
          },
        },
        colors: ['#f55a5f'],
        labels: ['Back-End'],
      },
    },
    {
      series: [60],
      options: {
        chart: {
          height: 350,
          type: 'radialBar' as 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
            dataLabels: {
              name: {
                show: true,
                color: '#f55a5f',
              },
              value: {
                show: true,
                color: '#f55a5f',
              },
            },
          },
        },
        colors: ['#f55a5f'],
        labels: ['Languages'],
      },
    },
  ];

  if (!mounted) {
    return null; // Prevent rendering on the server
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {charts.map((chart, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <ReactApexChart
            options={chart.options}
            series={chart.series}
            type="radialBar"
            height={350}
          />
        </div>
      ))}
    </div>
  );
};

export default SkillChart;
