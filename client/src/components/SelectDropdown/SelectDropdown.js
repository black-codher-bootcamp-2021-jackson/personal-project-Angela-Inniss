import React from 'react'
import Select from 'react-select'

const SelectDropDownFilter = (props) => (
    <Select placeholder={props.placeholder} options={props.options} onChange={props.onChange} />
)

export default SelectDropDownFilter;
