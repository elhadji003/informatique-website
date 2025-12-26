import React, { useState } from "react";
import Title from "../Title";
import { useParams } from "react-router-dom";
import {
  useFinishCoursMutation,
  useGetCoursByIdQuery,
  useLikeCoursMutation,
  useStartCoursMutation,
} from "../../backend/features/bureautique/coursApi";

export default function Word() {
  const { id } = useParams();

  // --- RTK Query
  const { data: coursWord, isLoading } = useGetCoursByIdQuery(id);
  const [likeCours] = useLikeCoursMutation();
  const [startCours] = useStartCoursMutation();
  const [finishCours] = useFinishCoursMutation();

  //   // --- States
  const [liked, setLiked] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [ModalOrdiPortableOpen, setModalOrdiPortableOpen] = useState(false);
  const [ModalOrdiFixeOpen, setModalOrdiFixeOpen] = useState(false);

  const courItem = coursWord;
  const etapeItem = courItem?.etapes[currentStep];
  const ordiItems = etapeItem?.types_objets;

  return (
    <div>
      <Title text={courItem?.titre} />
    </div>
  );
}
