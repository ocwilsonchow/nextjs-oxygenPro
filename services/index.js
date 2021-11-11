import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;



export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      drugsByDrugClasses {
        brandNames
        drugClass
        drugName
        formulation
        majorSideEffects
        mechanismOfAction
        monitoringRequirement
        remarks
        seriousSideEffect
        slug
        therapeuticArea
        warning
        id
        proOnly
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  console.log(result)
  return result.drugsByDrugClasses;
};
