import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SearchForm = ({
  onSubmit,
  onChange,
}) => (
  <form onSubmit={(e)=>{e.preventDefault();onSubmit()}}>
    <h2 className="card-heading">Search for New Articles</h2>
    <div>Topic
      <input onChange={(e)=>{onChange('topic', e.target.value)}} /> 
    </div>
    <div>Start Date
      <input onChange={(e)=>{onChange('startDate', e.target.value)}}/> 
    </div>
    <div>End Date
      <input onChange={(e)=>{onChange('endDate', e.target.value)}}/> 
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
);

export default SearchForm;
