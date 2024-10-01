import { ReportAPurchaseTsx, ReportAPurchaseChoose } from "../../types/left-nav/report-a-purchase/reportAPurchasePage"
import Form from 'react-bootstrap/Form';
import { Field, ErrorMessage } from 'formik';

type ReportPurchaseProps = {
    reportPurchase: ReportAPurchaseTsx
}

export const ReportAPurchaseItem = (props: ReportPurchaseProps) => {
    const { reportPurchase} = props;
    return(
        <Form.Group className="mb-3" controlId={reportPurchase.controlId }>
            <Form.Label>{reportPurchase.label}</Form.Label>
            <Field name={reportPurchase.controlId} type={reportPurchase.type} placeholder={reportPurchase.placeholder} className="form-control" />
            <ErrorMessage className="errorMessage" name="email" component="Row"></ErrorMessage>
        </Form.Group>
    )
}

type ReportAPurchaseChooseProps = {
    reportPurchaseChoose: ReportAPurchaseChoose
}

export const ReportAPurchaseChooseItem  = (props: ReportAPurchaseChooseProps) => {
    const { reportPurchaseChoose} = props;
    return (
        <Form.Group className="mb-3" controlId={reportPurchaseChoose.controlId }>
            <Form.Label>{reportPurchaseChoose.label}</Form.Label>
            <Field name={reportPurchaseChoose.controlId } as="select" className="form-select" >
                <option>Choose...</option>
                <option>...</option>
            </Field>
            <ErrorMessage className="errorMessage" name="email" component="Row"></ErrorMessage>
        </Form.Group>
    )
}