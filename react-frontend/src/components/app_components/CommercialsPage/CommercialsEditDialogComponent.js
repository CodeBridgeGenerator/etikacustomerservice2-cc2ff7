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
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
const rentOrPurchaseArray = ["Rent","Purchase"];
const rentOrPurchaseOptions = rentOrPurchaseArray.map((x) => ({ name: x, value: x }));
const sellTypeArray = ["Own Products","Engage Etika Services"];
const sellTypeOptions = sellTypeArray.map((x) => ({ name: x, value: x }));

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

const CommercialsEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            commercialCategory: _entity?.commercialCategory,
customerName: _entity?.customerName,
contactNumber: _entity?.contactNumber,
emailAddress: _entity?.emailAddress,
machineAddress: _entity?.machineAddress,
additionalDetail: _entity?.additionalDetail,
rentOrPurchase: _entity?.rentOrPurchase,
machineQuantity: _entity?.machineQuantity,
tenancyPeriod: _entity?.tenancyPeriod,
newOutlet: _entity?.newOutlet,
sellType: _entity?.sellType,
        };

        setLoading(true);
        try {
            
        const result = await client.service("commercials").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info commercials updated successfully" });
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
        <Dialog header="Edit Commercials" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="commercials-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="commercialCategory">Commercial Category:</label>
                <InputText id="commercialCategory" className="w-full mb-3 p-inputtext-sm" value={_entity?.commercialCategory} onChange={(e) => setValByKey("commercialCategory", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["commercialCategory"]) && (
              <p className="m-0" key="error-commercialCategory">
                {error["commercialCategory"]}
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
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="machineAddress">Machine Address:</label>
                <InputText id="machineAddress" className="w-full mb-3 p-inputtext-sm" value={_entity?.machineAddress} onChange={(e) => setValByKey("machineAddress", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["machineAddress"]) && (
              <p className="m-0" key="error-machineAddress">
                {error["machineAddress"]}
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
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="rentOrPurchase">Rent Or Purchase:</label>
                <Dropdown id="rentOrPurchase" value={_entity?.rentOrPurchase} options={rentOrPurchaseOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("rentOrPurchase", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["rentOrPurchase"]) && (
              <p className="m-0" key="error-rentOrPurchase">
                {error["rentOrPurchase"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="machineQuantity">Machine Quantity:</label>
                <InputNumber id="machineQuantity" className="w-full mb-3 p-inputtext-sm" value={_entity?.machineQuantity} onChange={(e) => setValByKey("machineQuantity", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["machineQuantity"]) && (
              <p className="m-0" key="error-machineQuantity">
                {error["machineQuantity"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tenancyPeriod">Tenancy Period:</label>
                <Calendar id="tenancyPeriod" value={_entity?.tenancyPeriod?.map((d)=> new Date(d))} onChange={ (e) => setValByKey("tenancyPeriod", e.value)} showIcon selectionMode="range"  readOnlyInput hideOnRangeSelection  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tenancyPeriod"]) && (
              <p className="m-0" key="error-tenancyPeriod">
                {error["tenancyPeriod"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="newOutlet">New Outlet:</label>
                <InputText id="newOutlet" className="w-full mb-3 p-inputtext-sm" value={_entity?.newOutlet} onChange={(e) => setValByKey("newOutlet", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["newOutlet"]) && (
              <p className="m-0" key="error-newOutlet">
                {error["newOutlet"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="sellType">Sell Type:</label>
                <Dropdown id="sellType" value={_entity?.sellType} options={sellTypeOptions} optionLabel="name" optionValue="value" onChange={(e) => setValByKey("sellType", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["sellType"]) && (
              <p className="m-0" key="error-sellType">
                {error["sellType"]}
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

export default connect(mapState, mapDispatch)(CommercialsEditDialogComponent);
