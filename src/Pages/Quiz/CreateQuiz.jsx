import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm, useFieldArray } from "react-hook-form";
import "./Quiz.css";
import { Check, X } from "phosphor-react";

export default function CreateQuiz() {
  return (
    <div>
      <h1>Create Quiz</h1>
      <CreateQuizForm />
    </div>
  );
}
function QuizOptions({ control, register, errors, nestIndex }) {
  const { fields, remove, append, replace } = useFieldArray({
    control,
    name: `questions[${nestIndex}].options`,
  });

  const addOption = () => {
    append({ answerText: "", isCorrect: false });
  };
  const removeOption = (index) => {
    remove(index);
  };
  const markAsAnswer = (index) => {
    // Mark index isCorrect as true
    // Set all other isCorrect as false

    const newOptions = fields.map((item, i) => {
      if (i === index) {
        return { answerText: item.answerText, isCorrect: true };
      } else {
        return { answerText: item.answerText, isCorrect: false };
      }
    });

    replace(newOptions);
  };
  const alphabetMap = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
  };
  return (
    <div>
      <div className="question-options">
        {fields.map((item, k) => (
          <div key={item.id} className="mt-3 mb-2">
            <div className="question-option">
              <div className="option-letter">{alphabetMap[k]}</div>
              <div className="input-controls">
                <input
                  name={`questions[${nestIndex}].options[${k}].answerText`}
                  {...register(
                    `questions.${nestIndex}.options.${k}.answerText`
                  )}
                  className={`form-control ${
                    errors.questions?.[nestIndex] &&
                    errors.questions?.[nestIndex].options?.[k]?.answerText
                      ? "is-invalid"
                      : ""
                  }`}
                  type="text"
                  placeholder={`Option ${k + 1}`}
                />
                <div className="btn-group">
                  <button
                    type="button"
                    onClick={() => markAsAnswer(k)}
                    className={`${item.isCorrect ? "bg-success" : ""}`}
                  >
                    <Check />
                  </button>
                  <button type="button" onClick={() => removeOption(k)}>
                    <X />
                  </button>
                </div>
                {/* {errors.questions?.[nestIndex] && (
                  <div className="invalid-feedback">
                    {
                      errors.questions?.[nestIndex].options?.[k]?.answerText
                        .message
                    }
                  </div>
                )} */}
              </div>
            </div>
          </div>
        ))}
        {errors.questions?.[nestIndex] && (
          <div className="invalid-feedback">
            {errors.questions?.[nestIndex]?.message}
          </div>
        )}
      </div>
      <button type="button" className="btn-text" onClick={addOption}>
        Add option +{" "}
      </button>
    </div>
  );
}

function QuizQuestion({ children }) {
  return <div className="quiz-question">{children}</div>;
}

function QuizQuestions({ control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });
  const addQuestion = () => {
    console.log(errors);
    append({
      questionText: "",
      options: [
        {
          answerText: "",
          isCorrect: false,
        },
        {
          answerText: "",
          isCorrect: false,
        },
      ],
    });
  };
  const removeQuestion = (index) => {
    remove(index);
  };

  return (
    <div className="questions">
      {fields.map((item, i) => (
        <QuizQuestion key={item.id}>
          <div className="question-header">
            <h1>Question {i + 1}</h1>
            <button onClick={() => removeQuestion(i)}>
              <X />
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            name={`questions[${i}].questionText`}
            {...register(`questions.${i}.questionText`)}
          />
          {errors.questions?.[i] && (
            <div className="invalid-feedback">
              {errors.questions?.[i].questionText?.message}
            </div>
          )}
          <QuizOptions nestIndex={i} {...{ control, register, errors }} />
        </QuizQuestion>
      ))}
      {/* <button type="button" onClick={() => addQuestion(i)}> */}
      <button type="button" onClick={addQuestion}>
        Add Question +{" "}
      </button>
    </div>
  );
}

function CreateQuizForm() {
  const defaultValues = {
    name: "",
    timeLimit: 2500,
    description: "",
    questions: [
      {
        questionText: "",
        options: [
          {
            answerText: "",
            isCorrect: false,
          },
          {
            answerText: "",
            isCorrect: false,
          },
        ],
      },
    ],
  };
  const questionSchema = Yup.object().shape({
    questionText: Yup.string().required("Value is mandatory!"),
    options: Yup.array()
      .min(2, "At least 2 options are required")
      .of(
        Yup.object().shape({
          answerText: Yup.string().required("Value is mandatory"),
          isCorrect: Yup.boolean().default(false),
        })
      ),
  });
  const quizSchema = Yup.object().shape({
    name: Yup.string().required("Value is mandatory"),
    timeLimit: Yup.number().default(2500),
    description: Yup.string().default(""),
    questions: Yup.array()
      .min(1, "At least one question is required")
      .of(questionSchema),
  });
  const optionsDf = { resolver: yupResolver(quizSchema), defaultValues };
  const { control, formState, handleSubmit, register } = useForm(optionsDf);
  const { errors } = formState;
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  function onSubmit(res) {
    console.log(errors);
    console.log(res);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Quiz Name:
          <input type="text" name="name" {...register("name")} />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </label>
        <label>
          Quiz Description:
          <input type="text" name="description" {...register("description")} />
          <div className="invalid-feedback">{errors.description?.message}</div>
        </label>
        <label>
          Quiz Time Limit:
          <input type="text" name="timeLimit" {...register("timeLimit")} />
          <div className="invalid-feedback">{errors.timeLimit?.message}</div>
        </label>
        <label>Quiz Questions:</label>
        <QuizQuestions {...{ control, register, errors }} />
        <button type="submit">Create Test</button>
      </form>
    </div>
  );
}
