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
                color: '#6a0dad',
              },
              value: {
                show: true,
                color: '#6a0dad',
              },
            },
          },
        },
        colors: ['#6a0dad'],
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
                color: '#6a0dad',
              },
              value: {
                show: true,
                color: '#6a0dad',
              },
            },
          },
        },
        colors: ['#6a0dad'],
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
                color: '#6a0dad',
              },
              value: {
                show: true,
                color: '#6a0dad',
              },
            },
          },
        },
        colors: ['#6a0dad'],
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
