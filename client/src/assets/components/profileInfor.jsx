export default function ProfielInfor() {


    function inputHeader(text) {
        return <h2 className="text-xl mt-4 w-min">{text}</h2>;
      }
      function inputDescription(text) {
        return <p className="text-gray-500 text-sm">{text}</p>;
      }
      function preInput(header, description) {
        return (
          <div>
            {inputHeader(header)}
            {inputDescription(description)}
          </div>
        ); 
      }
    return (


             <div className="my-8">
                <div className="grid grid-cols-[1fr_2fr]">
                {preInput('Name', "")}
                <input className="" type="text" /> 
                </div>
                <div className="grid grid-cols-[1fr_2fr]">
                {preInput('Address', "")}
                <input className="" type="text" /> 
                </div>
                <div className="grid grid-cols-[1fr_2fr]">
                {preInput('Phone', "")}
                <input className="" type="phone" /> 
                </div>
                <div className="grid grid-cols-[1fr_2fr]">
                {preInput('Name', "")}
                <input className="" type="text" /> 
                </div>
                
             </div>
    );
}