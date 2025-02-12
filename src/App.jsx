import { Route, Routes } from "react-router";
import { Home } from "./components/pages/Home";
import { Layout } from "./Layouts/Layout";
import { ApolloProvider } from "@apollo/client";
import { client } from "./constans/client";
import { ProfileLayout } from "./Layouts/ProfileLayout";
import Achivments from "./components/pages/Profile/Achievements";
import { Foo } from "./components/pages/Profile/Rating";
import { Profile } from "./components/pages/Profile";
import { Quest } from "./components/pages/Test";
import { TestLayout } from "./Layouts/TestLayout";
import Questions from "./components/pages/TestsPage/Question";
import Quests from "./components/pages/Quests";
import CreateQuests from "./components/pages/Profile/Quest/CreateQuests";


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
                        <Route path="/profile" element={<ProfileLayout />} />
                        {/* <Route path="setting" element={<ProfileSetting />} />
                        <Route path="rating" element={<Rating />} /> */}
                        <Route path="quests">
                            <Route index element={<Quests />} />
                            <Route path="new" element={<CreateQuests />} />
                        </Route>
                        {/* <Route path="history" element={<History />} /> */}
                        <Route path="achievements" element={<Achivments />} />
                    </Route>
                    <Route path ='/rate' element={<Foo/>}/>
                    {/* <Route path="/join/:id" element={<Join />} />  */}
                    <Route path="/test" element={<TestLayout />}>
                        <Route index element={<Quest />} />
                        {/* <Route path="itmap/:count" element={<Itmap />} /> */}
                        <Route path="question/:testId/:id" element={<Questions />} />
                    </Route>
                    </Route>
                </Routes>
            </ApolloProvider>
        </>
    )
}
