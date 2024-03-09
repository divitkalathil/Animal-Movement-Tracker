import React from "react";
import { Autocomplete } from "@aws-amplify/ui-react";

//import { baseConfig } from "../../config";

const HeaderSearchBar = () => {
  // const navigate = useNavigate();
  return (
    <div className="header-search-bar">
      <Autocomplete
        label="Autocomplete"
        options={[
          { id: "new_originpremid", label: "Origin Premise ID" },
          { id: "new_destinationpremid", label: "Destination Premise ID" },
          { id: "new_numitemsmoved", label: "Number of Items Moved" },
          { id: "new_movementreason", label: "Reason for movement of items" },
          { id: "new_species", label: "Species" },
          { id: "new_shipmentsstartdate", label: "Shipment Start Date" },

        ]}
        placeholder="Search here..."
        size="small"
      />
    </div>
  );
};

export default HeaderSearchBar;
