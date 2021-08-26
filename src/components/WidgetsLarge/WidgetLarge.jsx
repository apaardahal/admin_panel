import './widgetlarge.css'

export default function WidgetLarge() {

    const Button = ({type}) =>{
        return <button className = {"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className = "widgetLg">
            <h3 className = "widgetLgTitle">Latest Transaction</h3>
             <table  className = "widgetLgTable">
                 <tr className = "widgetLgTr">
                     <th className = "widgetLgTh">Customer</th>
                     <th className = "widgetLgTh">Date</th>
                     <th className = "widgetLgTh">Amount</th>
                     <th className = "widgetLgTh">Status</th>
                 </tr>
                 <tr className = "widgetLgTr">
                     <td className = "widgetLgUser">
                         <img src = "/assets/apaar.jpg" className = "widgetLgImg"/>
                         <span className = "widgetLgName">Apaar Dahal</span>
                     </td>
                     <td className = "widgetLgDate">16 Feb 2020 </td>
                     <td className = "widgetLgAmount">$5000 </td>
                     <td className = "widgetLgStatus"> <Button type = "Approved"/></td>
                 </tr>
                 <tr className = "widgetLgTr">
                     <td className = "widgetLgUser">
                         <img src = "/assets/apaar.jpg" className = "widgetLgImg"/>
                         <span className = "widgetLgName">Apaar Dahal</span>
                     </td>
                     <td className = "widgetLgDate">16 Feb 2020 </td>
                     <td className = "widgetLgAmount">$5000 </td>
                     <td className = "widgetLgStatus"> <Button type = "Declined"/></td>
                 </tr>
                 <tr className = "widgetLgTr">
                     <td className = "widgetLgUser">
                         <img src = "/assets/apaar.jpg" className = "widgetLgImg"/>
                         <span className = "widgetLgName">Apaar Dahal</span>
                     </td>
                     <td className = "widgetLgDate">16 Feb 2020 </td>
                     <td className = "widgetLgAmount">$5000 </td>
                     <td className = "widgetLgStatus"> <Button type = "Pending"/></td>
                 </tr>
                 <tr className = "widgetLgTr">
                     <td className = "widgetLgUser">
                         <img src = "/assets/apaar.jpg" className = "widgetLgImg"/>
                         <span className = "widgetLgName">Apaar Dahal</span>
                     </td>
                     <td className = "widgetLgDate">16 Feb 2020 </td>
                     <td className = "widgetLgAmount">$5000 </td>
                     <td className = "widgetLgStatus"> <Button type = "Approved"/></td>
                 </tr>
             </table>
        </div>
    )
}
