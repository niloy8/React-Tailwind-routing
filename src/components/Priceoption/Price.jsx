import PropTypes from 'prop-types'

const Price = ({ option }) => {
    const { name, price, duration, features } = option;

    return (
        <div className='bg-blue-800 text-white p-4 rounded flex flex-col  text-center'>
            <h1 className='text-5xl'>{name}</h1>
            <h2 className='my-3'>
                <span className='text-4xl'>{price}</span>
                <span className='text-1xl'>\{duration}</span>
            </h2>
            {features.map((feature, index) => <p key={index} className='flex-grow'>{feature}</p>)}
            <button className='bg-green-600 hover:bg-green-950 p-3 mt-3'>BUY NOW</button>
        </div>
    );
};

Price.propTypes = {
    option: PropTypes.object
}
export default Price;