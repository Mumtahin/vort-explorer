import { Box } from "@mui/material"
import { Mapbox } from "../components/Mapbox";

export const Dashboard = () => {
	const bgColour = '#191a1a';
	const textColour = '#fff';

	return (
		<div className="App" style={{ backgroundColor: bgColour, color: textColour }}>
			<Box display="flex" flexDirection="row" height="100vh">
				<Box flex={1}>
					<Box height="40vh" display="flex" flexDirection="column">
						<Box flex={1}>
							<Box height="40vh" sx={{ m: 3 }}>
								Chart
							</Box>
						</Box>
						<Box height="40vh" flex={1}>
							<Box height="40vh" sx={{ m: 3 }}>
								Chart
							</Box>
						</Box>
					</Box>
				</Box>
				<Box flex={3}>
					<Mapbox />
				</Box>
			</Box>
		</div >
	)
}