import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { BranchesTsx } from '../../types/left-nav/branches/branches';
import { BranchesItem } from './branchItem';


export const Branches = () => {
    const [branches, setBranches] = useState<BranchesTsx[]>([
    ]);

    useEffect(() => {
        const branchesFetchFromApi: BranchesTsx[] = [
            { province: "dolnośląskie", description: "Number of branches -> ", numberOfBranches: 15 },
            { province: "kujawsko-pomorskie", description: "Number of branches -> ", numberOfBranches: 5 },
            { province: "lubelskie", description: "Number of branches -> ", numberOfBranches: 5 },
            { province: "lubuskie", description: "Number of branches -> ", numberOfBranches: 5 },
            { province: "łódzkie", description: "Number of branches -> ", numberOfBranches: 10 },
            { province: "małopolskie", description: "Number of branches -> ", numberOfBranches: 12 },
            { province: "mazowieckie", description: "Number of branches -> ", numberOfBranches: 20 },
            { province: "opolskie", description: "Number of branches -> ", numberOfBranches: 2 },
            { province: "podkarpackie", description: "Number of branches -> ", numberOfBranches: 3 },
            { province: "podlaskie", description: "Number of branches -> ", numberOfBranches: 4 },
            { province: "pomorskie", description: "Number of branches -> ", numberOfBranches: 19 },
            { province: "śląskie", description: "Number of branches -> ", numberOfBranches: 8 },
            { province: "świętokrzyskie", description: "Number of branches -> ", numberOfBranches: 5 },
            { province: "warmińsko-mazurskie", description: "Number of branches -> ", numberOfBranches: 5 },
            { province: "wielkopolskie", description: "Number of branches -> ", numberOfBranches: 7 },
            { province: "zachodniopomorskie", description: "Number of branches -> ", numberOfBranches: 3 }
        ];
        setBranches(branchesFetchFromApi)
    }, [])
    return (
        <Container>
            <Form className="container-form-row">
                <Form.Control
                    type="text"
                    id="inputDestination"
                    placeholder="Enter destination"
                    className="avcvcv"
                />
                <Button variant="primary" type="submit" className="container-form-button">Search</Button>
            </Form>
            <Row>
                <Col>
                    <img alt='' className="branches-col-image" src="/Image/left-nav/maps.png" />
                </Col>
                <Col>
                    <div className="branches-col-div">
                        <p className="branches-col-div-p">SEARCH RESULTS</p>
                    </div>
                </Col>
            </Row>
            <Row className="branches-row">
                {branches.map((item, index) =>
                    <BranchesItem key={index} branches={item} />
                )}
            </Row>
    </Container>      
    )
}