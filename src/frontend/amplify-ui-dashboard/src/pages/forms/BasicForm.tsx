import React, { useState } from "react";
import {
  Button,
  Flex,
  Text,
  TextField} from "@aws-amplify/ui-react";

const initialValues = {
  premiseid: "",
  total_animal: "0",
};

const FarmForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // Validate and submit form data
    e.preventDefault();
    console.log("Farm data:", values);
    // Add your submission logic here
  };

  return (
    <>
      <Flex as="form" direction="column" width="100%" onSubmit={handleSubmit}>
        <TextField
          value={values.premiseid}
          onChange={handleInputChange}
          name="premiseid"
          label={
            <Text>
              Premise ID
              <Text as="span" fontSize="0.8rem" color="red">
                (required)
              </Text>
            </Text>
          }
          type="text"
          isRequired={true}
        />
        <TextField
          value={values.total_animal}
          onChange={handleInputChange}
          name="total_animal"
          label={
            <Text>
              Total Animals
              <Text as="span" fontSize="0.8rem" color="red">
                (required)
              </Text>
            </Text>
          }
          type="number"
          isRequired={true}
        />

        <Button
          type="submit"
          variation="primary"
          width={{ base: "100%", large: "50%" }}
          style={{ marginLeft: "auto" }}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default FarmForm;