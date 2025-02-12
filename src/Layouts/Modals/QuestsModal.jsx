import { gql } from "@apollo/client"
import { Field, Form, Formik } from "formik"
import { Component } from "react"
import { mixed, object, string } from "yup"
import { client } from "../../constans/client"
import { getId } from "../../constans/id"

const CREATE_QUEST = gql`
    mutation CreateQuest(
        $name: String!
        $description: String!
        $picture: String!
        $userId: ID!
    ) {
        createQuest(
            name: $name
            picture: $picture
            description: $description
            userId: $userId
        ) {
            id
            name
            description
            picture
        }
    }
`

const schemaYup = object({
    name: string()
        .min(3, "Символів повино бути прийнані 3")
        .max(25, "Символів повино бути не більше 15")
        .required("Поле name є обов'язковим"),
    description: string()
        .min(3, "Символів повино бути прийнані 3")
        .max(100, "Символів повино бути не більше 15"),
    picture: mixed(),
})

class QuestsModal extends Component {
    handleSubmit = async (values) => {
        const info = Object.assign(values, { userId: getId() })
        const { data } = await client.mutate({
            mutation: CREATE_QUEST,
            variables: info,
        })
        const { changeIsQuestsModal } = this.props
        changeIsQuestsModal(data)
    }

    render() {
        return (
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    picture: "",
                }}
                validationSchema={schemaYup}
                onSubmit={this.handleSubmit}
            >
                <Form>
                    <div className="fixed top-0 left-0 z-200 h-full w-full bg-white px-5 pt-15 pb-10">
                        <div className="container flex flex-col items-center">
                            <label className="mb-3 flex items-center gap-3 px-2 py-1">
                                Назва
                                <Field
                                    name="name"
                                    className="shadow-shadow rounded-2xl px-2 py-1 shadow-lg"
                                    type="text"
                                    placeholder="Ведіть назву"
                                />
                            </label>
                            <label className="mb-7 flex items-center gap-3 px-2 py-1">
                                Опис
                                <Field
                                    name="description"
                                    className="shadow-shadow rounded-2xl px-2 py-1 shadow-lg"
                                    type="text"
                                    placeholder="Ведіть опис"
                                />
                            </label>
                            <label className="bg-bon-jour mb-10 flex h-[180px] min-h-[180px] w-[260px] min-w-[260px] cursor-pointer items-center justify-center rounded-[15px] text-2xl">
                                Додати зображення
                                <Field
                                    className="is-hidden"
                                    type="file"
                                    name="picture"
                                />
                                <img className="is-hidden" src="#" alt="123" />
                            </label>
                            <button
                                type="submit"
                                className="shadow-shadow rounded-[10px] px-9 py-3.5 shadow-lg"
                            >
                                Створити Квест
                            </button>
                        </div>
                    </div>
                </Form>
            </Formik>
        )
    }
}

export default QuestsModal