import { Field, Form, Formik } from "formik"
import { Component } from "react"
import { gql } from "@apollo/client"
import { Link } from "react-router"
import QuestsModal from "../../../../Layouts/Modals/QuestsModal"
import TypeTask from "../../../../Layouts/Modals/TypeTask"
import BottomPanel from "../../createQuests/BottomPanel"
import { client } from "../../../../constans/client"
import { getId } from "../../../../constans/id"

const ADD_TASK = gql`
    mutation AddTask(
        $userId: ID!
        $questId: ID!
        $type: String!
        $description: String!
        $picture: String!
        $openAnswer: String
        $time: Int!
    ) {
        addTask(
            userId: $userId
            questId: $questId
            type: $type
            description: $description
            picture: $picture
            openAnswer: $openAnswer
            time: $time
        ) {
            id
        }
    }
`

const ADD_ANSWER = gql`
    mutation addAnswer(
        $userId: ID!
        $questId: ID!
        $taskId: ID!
        $answer: String!
        $isCorrect: Boolean!
    ) {
        addAnswer(
            userId: $userId
            questId: $questId
            taskId: $taskId
            answer: $answer
            isCorrect: $isCorrect
        ) {
            id
        }
    }
`

class CreateQuests extends Component {
    state = {
        isTypeModal: true,
        isQuestsModal: true,
        questId: "",
        taskId: "",
        type: "",
        number: 1,
    }

    handelSubmit = async (values, { resetForm }) => {
        const { picture, description, openAnswer, time } = values
        const { type, questId } = this.state
        const info = {
            picture: picture,
            description: description,
            type: type,
            userId: getId(),
            questId: questId,
            time: Number(time),
        }
        if (type === "open") {
            info.openAnswer = openAnswer
        }
        const { data } = await client.mutate({
            mutation: ADD_TASK,
            variables: info,
        })
        const taskId = data.addTask.id

        if (type !== "open") {
            for (let i = 1; i <= 4; i++) {
                const answerData = {
                    taskId: taskId,
                    userId: getId(),
                    questId: questId,
                    isCorrect: values["isCorrect" + i],
                    answer: values["answer" + i],
                }
                const data = await client.mutate({
                    mutation: ADD_ANSWER,
                    variables: answerData,
                })
            }
        }
        this.resetTask()
        resetForm()
    }

    resetTask() {
        this.setState((prev) => ({
            isTypeModal: true,
            taskId: "",
            type: "",
            number: prev.number + 1,
        }))
    }

    changeIsTypeModal = (type) => {
        this.setState((prev) => ({
            isTypeModal: !prev.isTypeModal,
            type: type,
        }))
    }
    changeIsQuestsModal = (data) => {
        this.setState((prev) => ({
            isQuestsModal: !prev.isQuestsModal,
            questId: data.createQuest.id,
        }))
    }

    render() {
        const { isTypeModal, isQuestsModal, type, number } = this.state

return (
            <div className="flex h-full flex-col justify-between">
                {isTypeModal && (
                    <TypeTask changeIsTypeModal={this.changeIsTypeModal} />
                )}
                {isQuestsModal && (
                    <QuestsModal
                        changeIsQuestsModal={this.changeIsQuestsModal}
                    />
                )}
                <Formik
                    initialValues={{
                        openAnswer: "",
                        isCorrect1: false,
                        answer1: "",
                        isCorrect2: false,
                        answer2: "",
                        isCorrect3: false,
                        answer3: "",
                        isCorrect4: false,
                        answer4: "",
                        time: 1,
                        description: "",
                        picture: "",
                    }}
                    onSubmit={this.handelSubmit}
                >
                    <Form>
                        <button
                            type="submit"
                            className="mx-auto mt-7 block rounded-2xl border-2 border-black p-2"
                        >
                            <Link to="/" className="h-full w-full">
                                Готово
                            </Link>
                        </button>
                        <div className="container m-auto mt-7 mb-10 flex flex-col items-center justify-center">
                            <Field
                                name="description"
                                placeholder="Напишіть питання"
                                className="bg-grey-light mx-auto mb-8 flex w-60 justify-center rounded-[10px] px-5 py-3 text-xl"
                            />
                            <label className="bg-bon-jour mb-4 flex h-[180px] min-h-[180px] w-[260px] min-w-[260px] cursor-pointer items-center justify-center rounded-[15px] text-2xl">
                                Додати зображення
                                <Field
                                    className="is-hidden"
                                    type="file"
                                    name="picture"
                                    placeholder="Напишіть назву"
                                />
                                <img className="is-hidden" src="#" alt="" />
                            </label>
                            <label className="shadow-shadow mb-3 flex h-10 w-30 items-center justify-center gap-1 rounded-2xl shadow-lg">
                                Час:
                                <Field
                                    placeholder="Напишіть опис"
                                    className="w-14 px-0.5"
                                    name="time"
                                />
                            </label>
                            {type !== "open" ? (
                                <ul className="flex flex-wrap gap-x-3 gap-y-4">
                                    <li className={getLiAnswerStyled()}>
                                        <Field
                                            className="h-5 w-5"
                                            type="checkbox"
                                            name="isCorrect1"
                                        />
                                        <Field
                                            className="w-25"
                                            type="text"
                                            placeholder="Відповідь 1"
                                            name="answer1"
                                        />
                                    </li>
                                    <li className={getLiAnswerStyled()}>
                                        <Field
                                            className="h-5 w-5"
                                            type="checkbox"
                                            name="isCorrect2"/>
                                        <Field
                                            className="w-25"
                                            type="text"
                                            placeholder="Відповідь 2"
                                            name="answer2"
                                        />
                                    </li>
                                    <li className={getLiAnswerStyled()}>
                                        <Field
                                            className="h-5 w-5"
                                            type="checkbox"
                                            name="isCorrect3"
                                        />
                                        <Field
                                            className="w-25"
                                            type="text"
                                            placeholder="Відповідь 3"
                                            name="answer3"
                                        />
                                    </li>
                                    <li className={getLiAnswerStyled()}>
                                        <Field
                                            className="h-5 w-5"
                                            type="checkbox"
                                            name="isCorrect4"
                                        />
                                        <Field
                                            className="w-25"
                                            type="text"
                                            placeholder="Відповідь 4"
                                            name="answer4"
                                        />
                                    </li>
                                </ul>
                            ) : (
                                <Field
                                    name="openAnswer"
                                    placeholder="Веддіть відповідь"
                                ></Field>
                            )}
                        </div>
                        <BottomPanel number={number} />
                    </Form>
                </Formik>
            </div>
        )
    }
}

function getLiAnswerStyled() {
    return `shadow-shadow flex items-center justify-center gap-0.5 rounded-2xl px-2 py-5 shadow-lg`
}

export default CreateQuests