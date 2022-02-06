import React from 'react'
import Select from 'react-select'


// const customStyles = {
//     option: (provided, state) => ({
//         ...provided,
//         borderBottom: '1px dotted pink',
//         color: state.isSelected ? 'red' : 'blue',
//         padding: 20,
//     }),
//     control: () => ({
//         // none of react-select's styles are passed to <Control />
//         width: 200,
//     }),
//     singleValue: (provided, state) => {
//         const opacity = state.isDisabled ? 0.5 : 1;
//         const transition = 'opacity 300ms';

//         return { ...provided, opacity, transition };
//     }
// }
const SelectDropDownFilter = (props) => (
    <Select isMulti={props.isMulti} placeholder={props.placeholder} options={props.options} onChange={props.onChange} />
)

export default SelectDropDownFilter;
