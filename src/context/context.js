import React, { useReducer, createContext } from "react";

import { listAds, adDetails } from "./actions/adActions";
import { listResources, resourceDetails } from "./actions/resourceActions";
import { categoryDetails, listCategories } from "./actions/categoryActions";
import { subjectDetails, listSubjects } from "./actions/subjectActions";
import adReducer from "./reducers/adReducers";
import resourceReducer from "./reducers/resourceReducers";
import categoryReducer from "./reducers/categoryReducers";
import subjectReducer from "./reducers/subjectReducers";

let initialState = {
  loading: false,
  categories: {},
  currentCategory: {},
  subjects: {},
  currentSubject: {},
  topics: {}, //TODO: get from current subject
  currentTopic: {}, //TODO:
  advertisements: {},
  currentAdvertisement: {},
  resources: {},
  currentResource: {},
  error: "",
};

export const GlobalContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [advertisements, dispatchAd] = useReducer(adReducer, initialState);
  const [resources, dispatchResource] = useReducer(
    resourceReducer,
    initialState
  );
  const [categories, dispatchCategory] = useReducer(
    categoryReducer,
    initialState
  );

  const [subjects, dispatchSubject] = useReducer(subjectReducer, initialState);
  const [topics, dispatchTopics] = useReducer(adReducer, initialState);

  const fetchAdvertisements = async () => {
    const res = await listAds(dispatchAd);
  };
  const fetchAdvertisement = async (id) => {
    await adDetails(dispatchAd, id);
  };
  const fetchResources = async () => {
    const res = await listResources(dispatchResource);
  };
  const fetchResource = async (id) => {
    resourceDetails(dispatchResource, id);
  };
  const fetchCategories = async () => {
    const res = await listCategories(dispatchCategory);
  };
  const fetchCategory = async (id) => {
    categoryDetails(dispatchCategory, id);
  };
  const fetchSubjects = async () => {
    const res = await listSubjects(dispatchSubject);
  };
  const fetchSubject = async (id) => {
    subjectDetails(dispatchSubject, id);
  };

  // const balance = data.reduce(
  //   (acc, currVal) =>
  //     currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
  //   0
  // );

  return (
    <GlobalContext.Provider
      value={{
        advertisements,
        fetchAdvertisements,
        fetchAdvertisement,
        resources,
        fetchResources,
        fetchResource,
        categories,
        fetchCategories,
        fetchCategory,
        subjects,
        fetchSubjects,
        fetchSubject,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
