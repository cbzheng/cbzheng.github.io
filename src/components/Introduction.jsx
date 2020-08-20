import React from 'react'
import lion from "../resource/lion1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import me from "../resource/me.jpg"

export default function Introduction() {
    return <div style={{
            width: "60vw",
            backgroundImage: `url(${lion})`,
            backgroundSize: "100%",
            paddingTop: "23%",
            backgroundRepeat: 'no-repeat'
        }}>
        <div style={{
            backgroundColor: "#EEF7F2",
            padding: "1%",
            height: "100%",
            color: 'black',
            display: 'flex',
            flexDirection: 'row',
        }}>
            <img src={me} style={{width: "20%", height: "20%", borderRadius: "100%", margin: "3%"}}></img>
            <div style={{marginLeft: "2%", marginRight: "2%", textAlign: 'left'}}>
                <div style={{fontSize: 30, paddingTop: "1vh"}}><b>ZHENG Chengbo</b></div>
                <div style={{fontSize: 18}}>
                    <p>
                        I am a first-year PhD student at <a href="http://www.ust.hk/">HKUST</a>, majoring in computer science and engineering(CSE).
                        Currently, I am supervised by <a href="https://www.cse.ust.hk/~mxj/">Prof. Xiaojuan Ma</a>, doing research around Human-Computer Interaction.
                        Before joining HKUST, I was an undergraduate student at <a href="https://www.zju.edu.cn/">Zhejiang University</a>, supervised by <a href="http://www.ycwu.org/">Prof. Yingcai Wu</a>.
                    </p>
                    <p>
                        <a href=""><FontAwesomeIcon icon={['fab', 'facebook']} style={{marginLeft: "1%", marginRight: "1%"}}/></a>
                        <a href="https://www.linkedin.com/in/%E6%88%90%E5%8D%9A-%E9%83%91-862aa61aa/"><FontAwesomeIcon icon={['fab', 'linkedin']} style={{marginLeft: "1%", marginRight: "3%"}}/></a>
                        Contact: czhengag <FontAwesomeIcon icon={faAt} /> connect.ust.hk
                    </p>
                </div>
            </div>
        </div>
    </div>
}