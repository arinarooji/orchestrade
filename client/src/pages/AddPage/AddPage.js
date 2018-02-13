import React, { Component }   from 'react';
import Navi                 from '../../components/Navi';
import Search                 from '../../components/Search';
import InstrumentCard         from '../../components/InstrumentCard';
import Footer                 from '../../components/Footer';
import PropTypes              from 'prop-types';
import escapeRegExp           from 'escape-string-regexp';
import sortBy                 from 'sort-by';
import { Input }              from 'reactstrap';

class AddPage extends Component {

    static propTypes = {
        testInstruments: PropTypes.array.isRequired,
        onAddInstrument: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    clearQuery = () => {
        this.setState({ query: ''})
    }

    render() {
      const { testInstruments, onAddInstrument } = this.props
      const { query } = this.state 
      
      let showingInstruments

      if (query) {
          const match = new RegExp(escapeRegExp(query), 'i')
          showingInstruments = testInstruments.filter((instrument) => match.test(instrument.instrumentName))
      }
      else {
          showingInstruments = testInstruments
      }

      showingInstruments.sort(sortBy('instrumentName'))

      return (
        <div>
            <Navi/>
            <Search/>
            <Input 
                className = 'search-instruments'
                type = 'text'
                placeholder="Cello"
                value = {this.state.query}
                onChange = { (event) => this.updateQuery(event.target.value)}
            />

            {showingInstruments.length !== testInstruments.length && (
                <div className = 'showing-instruments'>
                <span> Showing {showingInstruments.length } out of {testInstruments.length } in our directory</span>
                <button onClick={this.clearQuery}> Show All </button>

                </div>
            )}

            <ol className='instrument-list'>
                <h4>Available Instruments to Add</h4>
                {showingInstruments.map((instrument) => (
                    <li key={instrument.isAvailable} className='instrument-list-item'>
                    <div className='instrument-avatar' style={{
                        backgroundImage: `url(${instrument.image})`
                        }}
                        />
                    <div className='instrument-details'>
                        <p>{instrument.instrumentName}</p>
                        <p>{instrument.type}</p>
                        <p>{instrument.brand}</p>
                    </div>

                    <button  onClick={()=>onAddInstrument(instrument)} className='instrument-add' >
                        Add
                    </button>

                </li>
                ))}
            </ol>
            <Footer/>
        </div>
      );
    }
}
  
export default AddPage;