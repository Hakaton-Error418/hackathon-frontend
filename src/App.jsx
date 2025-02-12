import { Route, Routes } from "react-router"
import { Home } from "./components/pages/Home"
import { Layout } from "./Layouts/Layout"
import { ApolloProvider } from "@apollo/client"
import { client } from "./constans/client"
import { ProfileLayout } from "./Layouts/ProfileLayout"

export const App = () => {
    return (
        <>
            <ApolloProvider client={client}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/profile" element={<ProfileLayout />} />
                        {/* <Route path="setting" element={<ProfileSetting />} />
                        <Route path="rating" element={<Rating />} />
                        <Route path="quests" element={<QuestsLayout />}>
                            <Route index element={<Quests />} />
                            <Route path="new" element={<CreateQuests />} />
                        </Route>
                        <Route path="history" element={<History />} />
                        <Route path="achievements" element={<Achievements />} /> */}
                    </Route>
                    {/* <Route path="/join/:id" element={<Join />} /> 
                    <Route path="/test" element={<TestLayout />}>
                        <Route index element={<Test />} />
                        <Route path="itmap/:count" element={<Itmap />} />
                        <Route path="question/:id" element={<Question />} />
                    </Route> */}
                    {/* </Route> */}
                </Routes>
            </ApolloProvider>
        </>
    )
}
