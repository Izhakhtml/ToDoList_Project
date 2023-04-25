
const TransferDataToList = ({ addToList, existTask }) => {
 
    return (
        <div className="transferDataToList">
            <div> {existTask}</div>
            <button onClick={addToList}>ADD TO LIST</button>
        </div>
    )
}
export default TransferDataToList;