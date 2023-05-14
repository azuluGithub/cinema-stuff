import { PureComponent } from "react";

import './SelectVenue.css';

class SelectVenue extends PureComponent {
    render() {
        const { handleSelectChange, selectedVenue } = this.props;

        return (
            <div class="custom-select">
                <div class="dropdown-container">
                    <select onChange={(e) => handleSelectChange(e) } value={selectedVenue}>
                        <option value="">{"Select Venue"}</option>
                        <option value="sterkinekor">{"Ster Kinekor (JHB)"}</option>
                        <option value="labia">{"Labia Theater (CPT)"}</option>
                    </select>
                    <div class="select-icon">
                        <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" class="icon">
                        <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}
export default SelectVenue;