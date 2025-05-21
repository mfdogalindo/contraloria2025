import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TestWeightsChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                chartInstanceRef.current = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Competencias Funcionales (Conocimientos)', 'Competencias Comportamentales', 'Análisis de Antecedentes'],
                        datasets: [{
                            label: 'Peso de las Pruebas',
                            data: [60, 20, 20],
                            backgroundColor: [
                                'rgb(2, 132, 199)',
                                'rgb(125, 211, 252)',
                                'rgb(251, 191, 36)'
                            ],
                            borderColor: [ /* Add original border colors or remove if not needed */
                                'rgb(2, 132, 199)',
                                'rgb(125, 211, 252)',
                                'rgb(251, 191, 36)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'top',
                                labels: {
                                    font: { size: 11 },
                                    padding: 10,
                                    boxWidth: 15
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.label || '';
                                        if (label) { label += ': '; }
                                        if (context.parsed !== null) { label += context.parsed + '%'; }
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div className="relative w-full max-w-[400px] mx-auto h-[300px] max-h-[350px] md:h-[350px] mb-6">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};
export default TestWeightsChart;