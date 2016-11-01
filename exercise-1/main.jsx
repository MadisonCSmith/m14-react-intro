// Main.jsx file

// Create a simple component
var myComponent = React.createClass({

    // In your render function...
    render:function() {
        // Set variables `name` and `interest`
        var name = "Madison";
        var interest = "Baking";

        // Return div with two paragraphs
        return(
        	<div>
	        	<p>My name is {name}</p>
	        	<p>I like {interest}</p>
	        </div>
        );
    }
});


// Render your component in the `main` section
ReactDOM.render(<MyComponent/>, document.querySelector('main'));
