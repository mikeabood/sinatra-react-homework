var React = require('react')
var ReactDOM = require('react-dom')
var request = require('superagent')
var FormComponent = require('./Form')


var MainComponent = React.createClass({
  getInitialState: function(){
    return { data: [], modal: false, updateValue: }
  },
  componentDidMount: function(){
    var state = this.state;
    var self = this;
    request.get('http://localhost:9393/items')
      .end(function(err, data){
        state.data = data.body;
        self.setState(state)
      })
  },
  createItem: function(item){
    var state = this.state;
    var self = this;
    request.post('http://localhost:9393/items')
      .type('form')
      .send( {title: item} )
      .end(function(err, data){
      console.log(data);
      state.data = data.body; 
      self.setState(state)
      
      })
  },
  update: function(event){
  	var state - this.state.
  	state.modal = true;
	console.log(event.target, ' this is event')

  },

  render: function(){
  	var self = this;
  	var entries = this.state.data.map(function(item, i){

  		    return (
    	<li key={i}> {item.title} <button onClick={this.uupdate}> update </button></li>
    	)
})

})



      <div>
        <FormComponent onItemSubmit={this.createItem}/>
        <ul>
          {this.state.data.map(function(item, i){
            return(
              <li key={i}>{item.title}</li>
            )
         })}
       </ul>
     </div>
   )
  }
});


var Modal = React.createClass({
	getInitialState: function() {
		return {updateValue: ''}
	}
	updateValue: function(){
		var state = this.state; 
		state.updateValue = event.target.value
		this.setState(state)
	},

	finalValue: function(){
		this.props.getUpdateValue(this.state.updateValue)
	}; 

	render: function(){
return(
<div>
<input type="text" value={this.state.updateValue}>
<button> submit</button>
</div> 
	)

	}
})









ReactDOM.render(
  <MainComponent/>, document.getElementById('container')
)


