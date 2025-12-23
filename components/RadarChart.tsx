'use client'

import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { careerTypes } from '@/data/types'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

interface RadarChartProps {
  percentages: Record<string, number>
}

export default function RadarChart({ percentages }: RadarChartProps) {
  const chartRef = useRef<ChartJS<'radar'>>(null)

  const labels = careerTypes.map((type) => type.shortName)
  const dataValues = careerTypes.map((type) => percentages[type.id] || 0)

  const data = {
    labels,
    datasets: [
      {
        label: 'あなたのタイプ適合度',
        data: dataValues,
        backgroundColor: 'rgba(255, 107, 53, 0.2)',
        borderColor: 'rgba(255, 107, 53, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 107, 53, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 107, 53, 1)',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: { raw: unknown }) => `${context.raw}%`,
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: 'rgba(139, 69, 19, 0.2)',
        },
        grid: {
          color: 'rgba(139, 69, 19, 0.2)',
        },
        pointLabels: {
          color: '#8B4513',
          font: {
            size: 12,
            weight: 'bold' as const,
          },
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          display: false,
        },
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Radar ref={chartRef} data={data} options={options} />
    </div>
  )
}
