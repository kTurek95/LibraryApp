import { BranchesTsx } from '../../types/left-nav/branches/branches';
import Card from 'react-bootstrap/Card';

type BranchesProps = {
    branches: BranchesTsx
}

export const BranchesItem = (props: BranchesProps) => {
    const { branches} = props;
    return (
        <Card className="filie-row-card">
            <Card.Body>
                <Card.Title>Voivodeship {branches.province}</Card.Title>
                <Card.Text>{branches.description} {branches.numberOfBranches}</Card.Text>
            </Card.Body>
        </Card>

    )
}
 