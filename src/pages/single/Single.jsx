import React from 'react';
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';


const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Details Page</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/14573609/pexels-photo-14573609.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTitle">Name</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">bright@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+233 123 777</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Adress:</span>
                                    <span className="itemValue">Airport Ridge, PT 000 - 00</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Ghana</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending  (Last 6 Months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="itemTitle">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;