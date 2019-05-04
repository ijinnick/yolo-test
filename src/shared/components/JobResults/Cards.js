import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MapLogo from '../../../assets/images/icon-map.png';
import HatLogo from '../../../assets/images/icon-hat.png';
import ClockLogo from '../../../assets/images/icon-clock.png';
import SuitcaseLogo from '../../../assets/images/icon-suitcase.png';

class cards extends React.Component{

    render(){
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;

        function dateDiffInDays(a, b) {

            const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc1 - utc2) / _MS_PER_DAY);
        }

        const a = new Date(),
            b = new Date(this.props.job_updated),
            difference = dateDiffInDays(a, b);

        let newDate = null;
        let newSalaryFrom = this.props.salary_range_from / 1000;
        let newSalaryTo = this.props.salary_range_to / 1000;
        if(difference < 30){
            newDate = difference + " Days";
        }
        if(difference > 30){
            newDate = Math.floor((365 / difference)) + " Month/s";
        }

        const inline_font = {
            fontSize: ".8rem",
            lineHeight: "30px"
        }


        return (
            <div>
                <Card bg="Secondary" text="black" style={{ width: '100%',borderRadius: 'unset'}}>
                    <Card.Body id={this.props.job_id}>
                        <Card.Title style={{marginBottom: '1.1rem'}}>{this.props.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{newSalaryFrom}K - {newSalaryTo}K</Card.Subtitle>
                            <Row style={{margin: "0 -15px 10px -15px"}}>
                                <Col lg="2"><img src={MapLogo}  style={{width: "30px"}} alt="Map Logo" /></Col>
                                <Col lg="4" style={inline_font}>{this.props.location}</Col>
                                <Col lg="2"><img src={SuitcaseLogo}  style={{width: "25px"}} alt="Suitcase Logo" /></Col>
                                <Col lg="4" style={inline_font}>{this.props.edu_degree}</Col>
                            </Row>
                            <Row  style={{margin: "0 -15px 10px -15px"}}>
                                <Col lg="2"><img src={HatLogo} style={{width: "30px"}} alt="Hat Logo" /></Col>
                                <Col lg="4" style={inline_font}>{this.props.xp_level}</Col>
                                <Col lg="2"><img src={ClockLogo} style={{width: "28px"}} alt="Clock Logo" /></Col>
                                <Col lg="4" style={inline_font}>{this.props.job_type}</Col>
                            </Row>
                            <Row  style={{margin: "25px -15px 10px -15px"}}>
                                <Col lg="2"><img src={this.props.company_logo} style={{width: "50px"}} alt="Company Logo" /></Col>
                                <Col lg="6" style={{fontSize: ".8rem",lineHeight: "24px"}}>{this.props.company_name}</Col>
                                <Col lg="4" style={{fontSize: ".8rem"}}>{newDate} Ago</Col>
                            </Row>
                    </Card.Body>
                </Card>
            </div>
        )
    }

}

export default cards;