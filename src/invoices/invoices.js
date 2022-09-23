import { getInvoices } from "./indoviceData"
import { NavLink, Outlet } from "react-router-dom"
export default function Invoices() {
    const invoiceData = getInvoices()
    return (
        <div>
            <h1>跳转到invoices页面</h1>
            <div style={{ display: "flex" }}>
            <nav style={{borderRight: "solid 1px", padding: "1rem"}}>
                {invoiceData.map(invoice => (
                    <NavLink style={{ display: "block", margin: "1rem 0" }} to={`/invoices/${invoice.number}`} key={invoice.number}>
                        {invoice.number}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
            </div>
        </div>
    )
}