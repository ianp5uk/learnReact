export function Car(props) {
    function onClick() {
        props.onCarClick(2);
    }
    return <p onClick={onClick}>I am the {"<Car />"}</p>;
}