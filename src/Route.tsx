import {UpdateItem} from "./components/UpdateItem";
import styles from './Styles.module.css';
import {CheckBox} from "./components/CheckBox";
import {Button} from "./components/Button";
import {RouteType} from "./FlightTable";

type RouteProps = {
    route: RouteType
    toggleFTIsBooked: (flightTableID: string, routeID: string, newIsBooked: boolean) => void;
    flightTableID: string;
    updateFTRoutesFrom: (flightID: string, routeID: string, newFrom: string) => void;
    updateFTRoutesTo: (flightID: string, routeID: string, newTo: string) => void;
    removeFTRoute: (flightTableID: string, routeID: string) => void

};

export const Route = ({
                          route,
                          toggleFTIsBooked,
                          flightTableID,
                          updateFTRoutesFrom,
                          updateFTRoutesTo,
                          removeFTRoute,
                      }: RouteProps) => {

    const handleRemoveFTRoute = () => {
        removeFTRoute(flightTableID, route.id)
    };

    const handleUpdateRouteFrom = (newTitle: string) => {
        updateFTRoutesFrom(flightTableID, route.id, newTitle)
    };

    const handleUpdateRouteTo = (newTitle: string) => {
        updateFTRoutesTo(flightTableID, route.id, newTitle);
    }

    const handleToggleFTIsBooked = (isBooked: boolean) => {
        toggleFTIsBooked(flightTableID, route.id, isBooked)
    }

    return (
        <>
            <table className={styles.ftTable}>
                <tbody>
                <tr className={styles.ftRow}>
                    <td className={styles.ftCell}>
                        <Button title={'X'} onClick={handleRemoveFTRoute}></Button>
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        <UpdateItem oldTitle={route.from} callBack={handleUpdateRouteFrom}/>
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        ➔
                    </td>
                    <td className={`${styles.ftCell} ${styles.pointerCursor}`}>
                        <UpdateItem oldTitle={route.to} callBack={handleUpdateRouteTo}/>
                    </td>
                    <td className={styles.checkboxContainer}>
                        <label>
                            <CheckBox isDone={route.isBooked} updateCheckBox={handleToggleFTIsBooked}/>
                            {route.isBooked ? ' Booked' : 'Available'}
                        </label>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

