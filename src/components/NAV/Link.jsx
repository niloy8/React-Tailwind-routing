
const Link = ({ route }) => {
    return (
        <div>
            <li className="mr-6" name={route.name} ><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Link;