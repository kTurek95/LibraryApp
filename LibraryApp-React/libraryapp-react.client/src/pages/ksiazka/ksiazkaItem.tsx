import { KsiazkaTsx } from '/../pages/ksiazka/ksiazka';
import { Field, ErrorMessage } from 'formik';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { KsiazkaChoose, KsiazkaCheck } from '../../types/ksiazka/ksiazka';

type KsiazkaProps = {
    ksiazka: KsiazkaTsx,
}

type KsiazkaChooseProps = {
    ksiazkaChoose: KsiazkaChoose;
}

type KsiazkaCheckProps = {
    ksiazkaCheck: KsiazkaCheck;
}

export const KsiazkaItem = (props: KsiazkaProps) => {
    const { ksiazka } = props;
    return (
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>{ksiazka.label}</Form.Label>
                <Field name={ksiazka.label} type={ksiazka.control} className="form-control"></Field>
                <ErrorMessage className="errorMessage" name={ksiazka.label} component="Row"></ErrorMessage>
            </Form.Group>
        </Col>
    )
}

export const KsiazkaChooseItem = (props: KsiazkaChooseProps) => {
    const { ksiazkaChoose } = props;
    return (
        <Col>
            <Form.Group className="mb-3">
                <Form.Label>{ ksiazkaChoose.label }</Form.Label>
                <Field as="select" name={ksiazkaChoose.label} className="form-control">
                    <option value="">Wybierz...</option>
                    {ksiazkaChoose.options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </Field>
                <ErrorMessage className="errorMessage" name={ksiazkaChoose.label} component="Row"></ErrorMessage>
            </Form.Group>
        </Col>
    )
}

export const KsiazkaCheckItem = (props: KsiazkaCheckProps) => {
    const { ksiazkaCheck } = props;
    return (
        <Form.Group className="mb-3">
            <Field
                type="checkbox"
                name={ksiazkaCheck.id}
                id={ksiazkaCheck.id}
                as={Form.Check}
                label={ksiazkaCheck.label}
            />
            <ErrorMessage className="errorMessage" name={ksiazkaCheck.label} component="Row"></ErrorMessage>
        </Form.Group>
    )
}

