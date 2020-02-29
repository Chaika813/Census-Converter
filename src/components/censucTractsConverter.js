import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



class CencucTractsConverter extends React.Component {
    constructor(props) {
        super(props);
        this.convert = this.convert.bind(this);
        //  this.handleFirstInputChange = this.handleFirstInputChange.bind(this);
        this.state = {
            inputOneText: '',
            inputTwoText: []
        }
    }

    handleFirstInputChange = (event) => {
        this.setState ({
            inputOneText: event.target.value
        })
    }

    convert() {
        // 1. save input to variable
        const needToConvert = this.state.inputOneText 
        // 2. split text by comma
    const splitedInput = needToConvert.split(", ").map((i) => '\''+ i + '\'')
        // 3. you'll have array, trim each value so there is no spaces before and after - trim()
        
        // 4. for each value add ' before and after
        //  for (let i=0; i < splitedInput.length; i++) {
        //  splitedInput[i]= '\''+ splitedInput[i] + '\''
        //   }
     
        alert(`There are ${splitedInput.length} number of locations`);
        // // // 5. join all values with comma
         const joinedInput = splitedInput.join()
        // 6. display it in second text area
     
         console.log(joinedInput)
        this.setState ({
            inputTwoText: joinedInput
        });
    }

// make textareas wide and big

    render() {
        return (
            <>
            {/* <div class="bg" ></div> */}
                <h1>Census tracts convert for QGIS</h1>
                <div class="container-fluid">
                <div > 
                    <textarea class="wide-large-border"  id="area1" onChange={this.handleFirstInputChange}/>
                </div>
                <button class="btn btn-primary " onClick={this.convert} ><i class="fa fa-hand-spock-o"></i>Convert</button>
                <div>
                    <textarea  class="wide-large-border"  id="area2" value={this.state.inputTwoText}/>
                </div>
                </div>
            </>
        
            
        );}
}


export default CencucTractsConverter;