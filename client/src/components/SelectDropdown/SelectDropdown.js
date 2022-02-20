import React from 'react'
import Select from 'react-select'



// const customStyles = {
//     option: (provided, state) => ({
//         border: state.isFocussed ? 'blue' : 'pink',

//     }),
// }

const SelectDropDownFilter = (props) => (
    <Select isMulti={props.isMulti} placeholder={props.placeholder} options={props.options} onChange={props.onChange} />
)

export default SelectDropDownFilter;
