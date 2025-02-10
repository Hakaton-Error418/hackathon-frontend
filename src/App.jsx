import { Route, Routes } from "react-router"
import { Home } from "./components/pages/Home"
import { Layout } from "./Layouts/Layout"


export const App = () => {
    return (
        <>
        <h1>hello</h1>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="/profile" element={<ProfileLayout />}>
                        <Route index element={<Profile />} />
                        <Route path="setting" element={<ProfileSetting />} />
                        <Route path="rating" element={<Rating />} />
                        <Route path="quests" element={<QuestsLayout />}>
                            <Route index element={<Quests />} />
                            <Route path="new" element={<CreateQuests />} />
                        </Route>
                        <Route path="history" element={<History />} />
                        <Route path="achievements" element={<Achievements />} />
                    </Route>
                    <Route path="/join/:id" element={<Join />} />
                    <Route path="/test" element={<TestLayout />}>
                        <Route index element={<Test />} />
                        <Route path="itmap/:count" element={<Itmap />} />
                        <Route path="question/:id" element={<Question />} />
                    </Route> */}
                </Route>
            </Routes>
        </>
    )
}
