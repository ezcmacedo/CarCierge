import React from "react";
import UsersInfo from "../Components/Admin/UsersInfo";
import CarsInfo from "../Components/Admin/CarsInfo";
import ReservationsInfo from "../Components/Admin/ReservationsInfo";
import PaymentsInfo from "../Components/Admin/PaymentsInfo";

function AdminTerminal() {

    return (
        <div className="min-h-[100vh] mb-[50rem]">
            <div className="h-[31.5rem]">
                <UsersInfo />
                <ReservationsInfo />
                <PaymentsInfo />
                <CarsInfo />
            </div>
        </div>
    )
}

export default AdminTerminal;