import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

import SingleRefundsPage from "../components/app_components/RefundsPage/SingleRefundsPage";
import RefundProjectLayoutPage from "../components/app_components/RefundsPage/RefundProjectLayoutPage";
import SingleComplaintsPage from "../components/app_components/ComplaintsPage/SingleComplaintsPage";
import ComplaintProjectLayoutPage from "../components/app_components/ComplaintsPage/ComplaintProjectLayoutPage";
import SingleCommercialsPage from "../components/app_components/CommercialsPage/SingleCommercialsPage";
import CommercialProjectLayoutPage from "../components/app_components/CommercialsPage/CommercialProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
    return (
        <Routes>
            {/* ~cb-add-unprotected-route~ */}
            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
<Route path="/refunds/:singleRefundsId" exact element={<SingleRefundsPage />} />
<Route path="/refunds" exact element={<RefundProjectLayoutPage />} />
<Route path="/complaints/:singleComplaintsId" exact element={<SingleComplaintsPage />} />
<Route path="/complaints" exact element={<ComplaintProjectLayoutPage />} />
<Route path="/commercials/:singleCommercialsId" exact element={<SingleCommercialsPage />} />
<Route path="/commercials" exact element={<CommercialProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
        </Routes>
    );
}

const mapState = (state) => {
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(AppRouter);
