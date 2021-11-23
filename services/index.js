import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// getDrugByClass
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      drugsByDrugClasses {
        brandNames
        drugClass
        drugName
        indication
        formulation
        majorSideEffects
        mechanismOfAction
        monitoringRequirement
        remarks
        seriousSideEffect
        slug
        therapeuticArea
        caution
        id
        proOnly
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  console.log(result);
  return result.drugsByDrugClasses;
};

export const getTopics = async () => {
  const query = gql`
    query MyQuery2 {
      __typename
      therapeuticAreas {
        name
        slug
        proOnly
        id
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  console.log(result);
  return result;
};

export const getSpecificTopics = async (slug) => {
  const query = gql`
    query MyQuery($slug: String!) {
      therapeuticArea(where: { slug: $slug }) {
        name
        id
        nonPharmacologicalTreatment
        pharmacologicalTreatmentSteps
        proOnly
        slug
        category
        complications
        prognosis
        signs
        symptoms
        briefSummary
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  console.log(result);
  return result.therapeuticArea;
};
