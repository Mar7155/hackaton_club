"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, RotateCcw } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

const quizQuestions = [
  {
    id: 1,
    question: "¿Para qué sirven los comentarios?",
    options: [
      "Para cambiar el comportamiento de nuestro código",
      "Sirven para documentar nuestro código y explicar qué hace cada parte de él",
    ],
    correctAnswer: 1,
    feedback: {
      correct: "¡Exacto! Los comentarios son para documentar y explicar.",
      incorrect: "Incorrecto. Los comentarios no alteran el funcionamiento del código, solo lo documentan.",
    },
  },
  {
    id: 2,
    question: "¿Cómo se escriben los comentarios en JavaScript?",
    options: [
      "Puedes usar # para escribir comentarios de una línea o varias.",
      "Puedes usar // para escribir comentarios de una línea o /* */ para escribir comentarios de varias líneas",
    ],
    correctAnswer: 1,
    feedback: {
      correct: "¡Correcto! Esas son las dos formas de poner comentarios en JavaScript.",
      incorrect: "Casi. El símbolo # se usa para comentarios en otros lenguajes, como Python.",
    },
  },
  {
    id: 3,
    question:
      "¿Cuál es la forma correcta de declarar una variable en JavaScript?",
    options: [
      "var nombre = 'Juan';",
      "variable nombre = 'Juan';",
      "let nombre = 'Juan';",
      "const nombre = 'Juan';",
    ],
    correctAnswer: 2,
    feedback: {
      correct: "¡Correcto! 'let' es la forma moderna de declarar variables que pueden cambiar de valor.",
      incorrect: "Si bien 'var' y 'const' también declaran variables, 'let' es la respuesta más adecuada para una variable estándar y moderna.",
    },
  },
  {
    id: 4,
    question: "¿Qué significa DOM en JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Dynamic Object Method",
    ],
    correctAnswer: 0,
    feedback: {
      correct: "¡Perfecto! DOM significa Document Object Model (Modelo de Objetos del Documento).",
      incorrect: "Respuesta incorrecta. DOM es la estructura de objetos que representa el HTML en el navegador.",
    },
  },
  {
    id: 5,
    question: "¿Cuál es la diferencia entre '==' y '===' en JavaScript?",
    options: [
      "No hay diferencia, ambos hacen lo mismo",
      "'==' compara valor, '===' compara valor y tipo",
      "'==' es para números, '===' es para texto",
    ],
    correctAnswer: 1,
    feedback: {
      correct: "¡Excelente! '===' es una comparación estricta que evita errores al comparar también el tipo de dato.",
      incorrect: "Incorrecto. Sí hay una diferencia crucial: la comparación estricta (===) también revisa el tipo de dato.",
    },
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleCheckAnswer = () => {
    if (selectedAnswer === "") return;

    setShowFeedback(true);

    if (
      Number.parseInt(selectedAnswer) ===
      quizQuestions[currentQuestion].correctAnswer
    ) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="relative flex flex-col bg-background font-sans bg-gradient-to-b from-transparent via-green-400/10 to-blue-500/10 border-t">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(52, 168, 90, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(52, 168, 90, 0.4) 1px, transparent 1px)
            `,
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 40%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,1) 40%)",
            backgroundSize: "32px 32px",
          }}
        />
        <main className="w-full min-h-screen flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl">🎉</span>
                    <CardTitle className="text-2xl font-serif text-green-500">
                      PRUEBA COMPLETADA
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="text-6xl font-bold text-white">
                    {score}/{quizQuestions.length}
                  </div>
                  <p className="text-xl text-slate-300 font-bold">
                    {score === quizQuestions.length
                      ? "¡Perfecto! Gracias por resolver el Test."
                      : score >= quizQuestions.length * 0.7
                      ? "¡Muy bien! Gracias por resolver el Test"
                      : "Sigue practicando. Gracias por resolver el Test."}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={() => (window.location.href = "/")}
                      variant={"primary"}
                      className="border-slate-600 text-white hover:bg-slate-700 font-mono"
                    >
                      Volver al Inicio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="relative flex flex-col bg-background font-sans bg-gradient-to-b from-transparent via-green-400/10 to-blue-500/10 border-t">
      <main className="w-full min-h-screen flex justify-center items-center">
        <div className="container py-12 px-12">
          <div className="mb-8 max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-2xl font-bold text-blue-400">TEST</h2>
              <span className="text-2xl">📑</span>
            </div>
            <p className="text-slate-300 text-lg">
              <strong className="text-white font-mono">
                Demuestra tus conocimientos
              </strong>
            </p>
          </div>

          <Card className="bg-slate-800 border-slate-700 max-w-2xl mx-auto overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge
                  variant="outline"
                  className="bg-slate-700 text-white border-slate-600"
                >
                  📝 Examen interactivo
                </Badge>
                <div className="text-slate-400 text-sm font-bold">
                  Pregunta {currentQuestion + 1} de {quizQuestions.length}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h3 className="text-xl font-semibold text-green-400 mb-6">
                    {question.question}
                  </h3>

                  <RadioGroup
                    value={selectedAnswer}
                    onValueChange={setSelectedAnswer}
                    className="space-y-4"
                  >
                    {question.options.map((option, index) => {
                      const isCorrect = index === question.correctAnswer;
                      const isSelected = selectedAnswer === index.toString();

                      return (
                        <div key={index} className="space-y-2">
                          <div
                            className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors ${
                              showFeedback && isCorrect
                                ? "bg-green-900/50 border-green-600"
                                : showFeedback && isSelected && !isCorrect
                                ? "bg-red-900/50 border-red-600"
                                : "bg-slate-700 border-slate-600 hover:bg-slate-600"
                            }`}
                          >
                            <RadioGroupItem
                              value={index.toString()}
                              id={`option-${index}`}
                              className="mt-1"
                              disabled={showFeedback}
                            />
                            <Label
                              htmlFor={`option-${index}`}
                              className={`text-sm leading-relaxed cursor-pointer flex-1 ${
                                showFeedback ? "text-white" : "text-slate-200 "
                              }`}
                            >
                              {option}
                            </Label>
                          </div>

                          <AnimatePresence>
                            {showFeedback && isSelected && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className={`ml-7 font-mono ${
                                  isCorrect
                                    ? "text-green-400"
                                    : "text-red-400"
                                }`}
                              >
                                {isCorrect
                                  ? question.feedback.correct
                                  : question.feedback.incorrect}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </RadioGroup>

                  <div className="flex justify-end pt-4">
                    {!showFeedback && (
                      <Button
                        onClick={handleCheckAnswer}
                        disabled={!selectedAnswer}
                        variant={"primary"}
                        className="text-white font-bold"
                      >
                        Revisar Respuesta
                      </Button>
                    )}

                    {showFeedback && (
                      <Button
                        onClick={handleNextQuestion}
                        variant={"primary"}
                        className=" font-bold"
                      >
                        {currentQuestion < quizQuestions.length - 1 ? (
                          <>
                            Siguiente Pregunta
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        ) : (
                          "Ver Resultados"
                        )}
                      </Button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}