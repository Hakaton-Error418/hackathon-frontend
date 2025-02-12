import { Route, Routes } from "react-router"
import { Home } from "./components/pages/Home"
import { Profile } from "./components/pages/Profile"
import { Layout } from "./Layouts/Layout"
import { ApolloProvider } from "@apollo/client"
import { client } from "./constans/client"
import { ProfileLayout } from "./Layouts/ProfileLayout"
import Achivments from "./components/pages/Profile/Achievements"
import { Foo } from "./components/pages/Profile/Rating"
export const App = () => {
    return (
        <>
            <ApolloProvider client={client}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/profile" element={<ProfileLayout />}>
                        <Route index element={<Profile />} />
                        {/* <Route path="quests" element={<QuestsLayout />}>
                            <Route index element={<Quests />} />
                            <Route path="new" element={<CreateQuests />} />
                        </Route> */}
                        {/* <Route path="history" element={<History />} /> */}
                        <Route path="achievements" element={<Achivments />} />
                    </Route>
                    <Route path ='/rate' element={<Foo/>}/>
                    {/* <Route path="/join/:id" element={<Join />} /> 
                    <Route path="/test" element={<TestLayout />}>
                        <Route index element={<Test />} />
                        <Route path="itmap/:count" element={<Itmap />} />
                        <Route path="question/:id" element={<Question />} />
                    </Route> */}
                    </Route>
                </Routes>
            </ApolloProvider>
        </>
    )
}
