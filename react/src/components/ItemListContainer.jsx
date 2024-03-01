
const ItemListContainer = ({ greeting }) => {
    return (

        <div style={{ 
            backgroundColor: '#fff',
            border: '1px solid #ddd',  
            padding: '20px',
            margin: '20px auto',
            width: '80%',
        }}>
            <h1>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;