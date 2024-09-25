import { MainLayout } from '../src/components/MainLayout/MainLayout'
import settings from "./routes/settings-routes"
import main from "./routes/main-routes"


export const routes= [
	{
		
        element: <MainLayout />,
		children: [...settings, ...main],
	},
]