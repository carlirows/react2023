// const newMessge = {
//     name: 'Carli',
//     age: 36,
//     message: 'this is perri'
// }

// const playground = (newMessge) => {
//     return (
//         <>
//             <h1>{newMessge.name}</h1>
//             <p>{newMessge.message}</p>
//             <p>my age is {newMessge.age}</p>
//         </>
//     );
// };
import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle}) => {
    // if(!title){
    //     throw new Error('title is required');
    // }

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h2 data-testid="test-subtitle">{subtitle}</h2>
            <h2 data-testid="test-subtitle">{subtitle}</h2>
            {/* {playground(newMessge)} */}
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'Hello World',
    subtitle: 'This is my first React App'
}

