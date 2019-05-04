import React, { Component } from 'react';
import {connect} from 'react-redux';

import Cards from './Cards';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class jobresult extends Component{

    componentDidMount(){
        this.props.onJobSearch('system');
    }

    render() {
        let resultsArray = [];
        let totalArray = [];

        resultsArray = (
                Array.isArray(this.props.searchResult) ?
                this.props.searchResult.map((jobData,index) => {
                    return <Cards job_id={jobData.id} total_jobs={jobData.total_num}
                            title={jobData.job_title}
                                salary_range_from={jobData.salary_range_from}
                                salary_range_to={jobData.salary_range_to}
                                location={jobData.company_location}
                                edu_degree={jobData.degree}
                                xp_level={jobData.xp_lvl}
                                job_type={jobData.job_type}
                                company_name={jobData.company_name}
                                company_logo={jobData.company_logo}
                                job_updated={jobData.job_updated_at} key={index}/>            
                }) : null
        );

        totalArray = (
            this.props.total_results ?
            <Card bg="primary" text="white" style={{ width: '100%', fontSize: '.9rem', borderRadius: 'unset' }}>
            <Card.Header>{this.props.total_results} jobs found</Card.Header>
            </Card>  : null
        )

        return(
            <div>
                <Card bg="Secondary" text="black" style={{ width: '100%' , border: 'none'}}>
                    <Card.Header style={{backgroundColor: 'transparent'}}>
                    <Form onSubmit={(e) => {
                            e.preventDefault(); 
                            this.props.onJobSearch(document.getElementById('searchInput').value)}}>
                        <Form.Row>
                                <Form.Group as={Col} md="12">
                                    <InputGroup size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><span role="img" aria-label="search icon">&#128269;</span></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Search for job title or company name"
                                            autoComplete="off"
                                            id="searchInput"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                    </InputGroup>
                                </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <ButtonToolbar style={{width: '100%'}}>
                                <Button variant="outline-primary" block>Filter results</Button>
                            </ButtonToolbar>
                        </Form.Row>
                    </Form>
                    </Card.Header>
                </Card>
                {totalArray}
                {resultsArray}
            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        searchResult: state.searchResults,
        total_results: state.totalResults
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onJobSearch: (item) => dispatch({type: 'SEARCHJOB', payload: item}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(jobresult);