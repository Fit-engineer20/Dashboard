import React from 'react'
import '../assets/sass/home.scss'
import profile from '../assets/images/profile.svg'
import music from '../assets/images/music.svg'
import log from '../assets/images/log.svg'
import mic from '../assets/images/mic.svg'
import people from '../assets/images/people.svg'
import play from '../assets/images/play.svg'

const Home = () => {
    return (
        <>
            <div className="head d-flex justify-content-between">
                <h3>Overview</h3>
                <div className=" d-flex align-items-center info">
                  <h6 className="mx-2">info@dummymail.com</h6>
                  <img className="img-fluid" src={profile} alt="image"></img>
                </div>
            </div>
            <div className="container-fluid home-con">
            <div className="row">
                <div className="col-8 d-flex justify-content-center">
                   <div className="graph mt-4 mb-4">
                      <h1>GRAPH !!!</h1>
                   </div>
                </div>   
                <div className="col-4">

                <div className="cards mt-4 mb-4 stats">

                    <div className="card" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={music} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">278.42K</h5>
                            <p className="card-text">Tracks created</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="card" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={people} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">2.05M</h5>
                            <p className="card-text">Active Users</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="card" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={mic} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">160.17K</h5>
                            <p className="card-text">Active Creators</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="card" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={play} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">7.11M</h5>
                            <p className="card-text">Total Plays</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="card" style={{maxWidth: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={log} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">257.34K</h5>
                            <p className="card-text">New Users</p>
                        </div>
                        </div>
                    </div>
                    </div>                    

                </div> 

                </div>
            </div>
            </div>

            <div className="container-fluid">
                <div className="row gx-3">
                    <div className="col-8">
                    
                        <div className="container-fluid">
                        <div className="row mt-3 gx-3">
                            <div className="col-8">
                              <div className="cards">
                                <div className="p-2">
                                  <h4>Trending</h4>
                                  <p>Today</p>
                                </div>

                                <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                              </div>  

                            </div>
                            <div className="col-4">

                            <div className="cards">
                                <div className="p-2">
                                  <h4>Users</h4>
                                  <p>Today</p>
                                </div>

                                <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This</p>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This</p>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="card" style={{maxWidth: "540px"}}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                    <img src="..." className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                              </div>  
                                
                            </div>
                        </div>
                        </div>

                    </div>
                    
                    <div className="col-4">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
