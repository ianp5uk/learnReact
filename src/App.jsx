import "./global.css";
import { Car } from "./components/Car/Car";
import { Greetings} from "./components/Greetings/Greetings"
export function App() {
    return (
        <div>
            <p className="box">First the global.css</p>
            <Car />
            <Greetings />
        </div>
    );
}
