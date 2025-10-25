/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import UploadFilesToS3 from "../../../services/UploadFilesToS3";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const ComplaintsEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            complainCategory: _entity?.complainCategory,
customerName: _entity?.customerName,
contactNumber: _entity?.contactNumber,
emailAddress: _entity?.emailAddress,
machineImage: _entity?.machineImage,
additionalDetail: _entity?.additionalDetail,
        };

        setLoading(true);
        try {
            
        const result = await client.service("complaints").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info complaints updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Edit Complaints" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="complaints-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="complainCategory">Complain Category:</label>
                <InputText id="complainCategory" className="w-full mb-3 p-inputtext-sm" value={_entity?.complainCategory} onChange={(e) => setValByKey("complainCategory", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["complainCategory"]) && (
              <p className="m-0" key="error-complainCategory">
                {error["complainCategory"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="customerName">Customer Name:</label>
                <InputText id="customerName" className="w-full mb-3 p-inputtext-sm" value={_entity?.customerName} onChange={(e) => setValByKey("customerName", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["customerName"]) && (
              <p className="m-0" key="error-customerName">
                {error["customerName"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="contactNumber">Contact Number:</label>
                <InputNumber id="contactNumber" className="w-full mb-3 p-inputtext-sm" value={_entity?.contactNumber} onChange={(e) => setValByKey("contactNumber", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["contactNumber"]) && (
              <p className="m-0" key="error-contactNumber">
                {error["contactNumber"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="emailAddress">Email Address:</label>
                <InputText id="emailAddress" className="w-full mb-3 p-inputtext-sm" value={_entity?.emailAddress} onChange={(e) => setValByKey("emailAddress", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["emailAddress"]) && (
              <p className="m-0" key="error-emailAddress">
                {error["emailAddress"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 field">
                <span className="align-items-center">
                    <label htmlFor="machineImage">Machine Image:</label>
                    <UploadFilesToS3 type={'edit'} setValByKey={setValByKey} onSave={onSave} id={urlParams.singleComplaintsId} serviceName="complaints" />
                </span>
                <small className="p-error">
                {!_.isEmpty(error["machineImage"]) && (
                  <p className="m-0" key="error-machineImage">
                    {error["machineImage"]}
                  </p>
                )}
              </small>
                </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="additionalDetail">Additional Detail:</label>
                <InputText id="additionalDetail" className="w-full mb-3 p-inputtext-sm" value={_entity?.additionalDetail} onChange={(e) => setValByKey("additionalDetail", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["additionalDetail"]) && (
              <p className="m-0" key="error-additionalDetail">
                {error["additionalDetail"]}
              </p>
            )}
          </small>
            </div>
                <div className="col-12">&nbsp;</div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(ComplaintsEditDialogComponent);
