import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectSpecialisations } from "../store/experts/selectors";
import { fetchSpecialisations } from "../store/experts/thunks";
import Specialisation from "../components/Specialisation";

export const Experts = () => {
  const dispatch = useDispatch();
  const specialisations = useSelector(selectSpecialisations);

  useEffect(() => {
    dispatch(fetchSpecialisations());
  }, [dispatch]);

  console.log("show me:", specialisations);
  return (
    <div className="h-screen bg-[url('../public/images/musicians.jpg')]  bg-contain bg-center">
      <h1 className="flex place-content-center text-3xl text-white p-10 ml-96 mr-96 bg-black bg-opacity-40">
        Choose a category
      </h1>
      <div className="flex flex-row flex-wrap mx-32 justify-center">
        {!specialisations.length
          ? "Loading"
          : specialisations.map((specialisation) => {
              return (
                <div
                  className="p-10 w-60 h-50 bg-black bg-opacity-70 rounded-lg"
                  key={specialisation.id}
                >
                  <Specialisation
                    id={specialisation.id}
                    title={specialisation.title}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};
