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
    <div>
      <h1 className="flex place-content-center text-3xl underline p-10">
        Choose a category
      </h1>
      <div className="flex flex-row flex-wrap mx-32 justify-center">
        {!specialisations.length
          ? "Loading"
          : specialisations.map((specialisation) => {
              return (
                <div className="p-10 w-60 h-50" key={specialisation.id}>
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
