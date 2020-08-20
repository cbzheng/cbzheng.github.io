import React from 'react'
import hkust from '../resource/hkust-logo.png'
import zhejiang from '../resource/zhejiang-logo.jpg'
import zju from '../resource/zju-logo.png'
import vidi from '../resource/vidi-logo.png'

const myTimeLine = [
    {
        timeSpan: "2020.8-present",
        title: "PhD student in CSE",
        institute: "HCI Initiative, Hong Kong University of Science and Technology",
        description: "Human-Computer Interaction, supervised by Prof. Xiaojuan Ma",
        logo: hkust
    },
    {
        timeSpan: "2020.1-present",
        title: "Research Assistant",
        institute: "Zhejiang Lab",
        description: "Urban Visualization, supervised by Prof. Yingcai Wu",
        logo: zhejiang
    },
    {
        timeSpan: "2019.7-2019.12",
        title: "Visiting Student",
        institute: "VIDI Lab, UC Davis",
        description: "Immersive Visualization, supervised by Prof. Kwan-Liu Ma",
        logo: vidi
    },
    {
        timeSpan: "2016.9-2020.6",
        title: "Undergraduate Student in Computer Science and Technology",
        institute: "Chu Kochen Honors College, Zhejiang University",
        description: "",
        logo: zju
    }
]

export default function Timeline() {

    let timelineInfo = []
    myTimeLine.forEach(slot => {
        timelineInfo.push(
            <div style={{display: 'flex', flexDirection: 'row', color:'black', height: "12vh", fontSize: '16px', }}>
                <div style={{color: 'gray', width: "20vw", borderRight: "thick solid #322F3B"}}>{slot.timeSpan}</div>
                <div style={{width: '60vw', marginLeft: "5%"}}>
                    <span style={{fontSize: '18px'}}><b>{slot.title}</b></span> <br/>
                    <span>{slot.institute}</span> <br />
                    <span  style={{color: 'gray'}}>{slot.description}</span>
                </div>
                <img src={slot.logo} style={{width: "9vh", height: '9vh'}}></img>
            </div>
        )
    });

    return <div style={{
        width:"100%",
        backgroundColor:'white',
        marginTop: "5%",
        paddingBottom: "3%",
        marginBottom: "5%"
    }}>
        <div style={{
            textAlign: 'left',
            fontSize: 30,
            color: 'black',
            marginTop: '3%',
            marginLeft: '24%',
            marginRight: '24%'
        }}>
            <b>Experience</b>
            <div style={{marginTop: "5vh"}}>
            {timelineInfo}
            </div>
        </div>
    </div>
}