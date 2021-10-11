import React, { Component } from 'react'
import './dashboard.css';
import {Doughnut} from 'react-chartjs-2';
import Charts from './charts'
export default class dashboard extends Component {
  render() {
    const data = {
        labels: [
            'Hours',
            'minutes',
            'Seconds'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    
    return (
        <div className="dashboard-container">
        <div className="dashboardpage-container">
            <h1 className="dashboard__title">Dashboard</h1>
            <div className="dashboard__panels">
            <div className="dashboard__panel--container">
            <div className="dashboard__filterpanel--container">
            
                
                </div>
                <div className="bars contaienr">
                    <Charts/>
                </div>


                </div>
            <div className="dashboard__notification--container">
                <div className=" dashboard__notification-panel">
                    <div className="dashboard__filter--container">
                        <span>Most tracked</span>
                    </div>
                    <div className="Doughnutcontainer">
                    <div className="doughnutpostion">
                    <Doughnut height={200} width={150}  data={data} /></div>

                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
  }
}
