import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import './home.css';
import {userData} from "../../dummyData";
import WidgetLarge from '../../components/WidgetsLarge/WidgetLarge';
import WidgetSmall from '../../components/widgetsSmall/widgetSmall';

export default function Home() {
    return (
        <div className = "home">
            <FeaturedInfo/>
            <Chart data = {userData} title = "User Analytics" grid  dataKey = "Active User" />
            <div className = "homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}
