import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "example/swagger-petstore",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "example/find-pets",
          label: "findPets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "example/add-pet",
          label: "addPet",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "example/find-pet-by-id",
          label: "find pet by id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "example/delete-pet",
          label: "deletePet",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
