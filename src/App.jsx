import { Route, Routes } from "react-router"
import { Home } from "./components/pages/Home"
import { Profile } from "./components/pages/Profile"
import { Layout } from "./Layouts/Layout"
import  {ProfileLayout}  from "./Layouts/ProfileLayout"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { client } from "./constans/client"
export const App = () => {
    return (
        <ApolloProvider client={client}>
        <h1 className="bg-gray-20 text-6xl">hello</h1>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    
                        <Route  path="/profile" element={<ProfileLayout />}>
                            <Route index element={<Profile />} />
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
                </Route>
            </Routes>
        </ApolloProvider>
    )
}
