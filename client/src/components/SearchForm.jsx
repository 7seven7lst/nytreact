import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Button from 'react-toolbox/lib/button/Button';

const SearchForm = ({
  onSubmit,
  onChange,
}) => (
  <section>
    <form onSubmit={(e)=>{e.preventDefault();onSubmit()}}>
      <h2 className="card-heading">Search for New Articles</h2>
      <div>
        <span>Topic</span><br/>
        <input type="text" onChange={(e)=>{onChange('topic', e.target.value)}} /> 
      </div>
      <div>
        <span>Start Date</span><br/>
        <input type="date" onChange={(e)=>{onChange('startDate', e.target.value)}} /> 
      </div>
      <div>
        <span>End Date</span><br/>
        <input type="date" onChange={(e)=>{onChange('endDate', e.target.value)}} /> 
      </div>
      <div>
        <Button type="submit" raised style={{"margin": "5px"}}>Submit</Button>
      </div>
    </form>
  </section>
);

export default SearchForm;
