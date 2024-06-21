export default function TypeAddress({details}) {
    return (
        <div className="my-8">
        <div className="flex justify-start  items-center">
            <h1 className="text-2xl"> {`Entire ${details.type} in _`} </h1>
            <a className="block text-2xl underline my-2" target="_blank" href={"https://www.google.com/maps/?q=" + details.address}> {" " + details.address}</a>
        </div>


        <h2 className="text-md"> {`${details.max_guests} guests. ${details.bedrooms} ${details.bedrooms === 1 ? 'bedroom. ' : 'bedrooms'} . ${details.beds} ${details.beds === 1 ? ' bed ' : 'beds'}. ${details.bathrooms} ${details.bathrooms === 1 ? 'bathroom ' : 'bathrooms'}`} </h2>
    </div>
    )
}